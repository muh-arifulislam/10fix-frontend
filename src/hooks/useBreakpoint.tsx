import { useState, useEffect } from "react";

// Define your breakpoints here
const breakpoints: { [key: string]: number } = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

type Breakpoint = keyof typeof breakpoints;

function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xl");

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      let newBreakpoint: Breakpoint = "xl";

      for (const bp in breakpoints) {
        if (Object.prototype.hasOwnProperty.call(breakpoints, bp)) {
          if (width >= breakpoints[bp as Breakpoint]) {
            newBreakpoint = bp as Breakpoint;
          }
        }
      }

      setBreakpoint(newBreakpoint);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

export default useBreakpoint;
