import React from "react";

const JustifyGrid = ({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap?: number;
}) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${
        gap ? `gap-[${gap}px]` : "gap-[20px]"
      }`}
    >
      {children}
    </div>
  );
};

export default JustifyGrid;
