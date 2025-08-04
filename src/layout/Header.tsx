import Headroom from "react-headroom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section>
      <Headroom style={{ zIndex: "99999999999" }}>
        <div
          className="w-full h-auto bg-white shadow-md relative"
          style={{ zIndex: "999999999999" }}
        >
          <Navbar></Navbar>
        </div>
      </Headroom>
    </section>
  );
};

export default Header;

// className="w-full h-[70px] bg-white shadow-sm"
