// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

const FadeLeft = ({ children }: { children: React.ReactNode }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 200,
    to: {
      x: !inView ? 24 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
};

export default FadeLeft;
