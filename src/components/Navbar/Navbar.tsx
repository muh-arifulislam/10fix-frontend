import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around relative">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <RxCross2 /> : <IoMenu />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <button>ONcli</button>
        </div>
        {/* Mobile nav */}
        <ul
          style={{ zIndex: "999999999999" }}
          className={`
        md:hidden bg-slate-400 absolute w-full bottom-0
        duration-500 left-0 translate-y-[100%] overflow-hidden ${
          open ? "h-[500px]" : "h-0"
        }
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <button>button</button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
