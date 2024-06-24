import { NavLink } from "react-router-dom";

const FlexButton = () => {
  return (
    <div className="fixed bottom-4 right-4 " style={{ zIndex: "999999" }}>
      <div className="fixed bottom-4 right-4 " style={{ zIndex: "999999" }}>
        <NavLink to={"/request-service"} className="animated-button1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          বুক সার্ভিস
        </NavLink>
      </div>
    </div>
  );
};

export default FlexButton;
