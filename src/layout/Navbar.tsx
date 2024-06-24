import { useState } from "react";

import logo from "../assets/images/logo.png";

import { FaChevronDown } from "react-icons/fa";

import { RiMenu3Fill } from "react-icons/ri";
import ServicesNavTab from "./ServicesNavTab";

import OthersNavTab from "./OthersNavTab";
import { NavLink } from "react-router-dom";
import { BiSolidCctv, BiSupport } from "react-icons/bi";
import locationPinAnimated from "../assets/icons/location-pin-animated.gif";
import { RiCustomerServiceFill } from "react-icons/ri";
import { PiDesktopTowerFill } from "react-icons/pi";
import { MdAdfScanner, MdMore } from "react-icons/md";
import { BsFillRouterFill } from "react-icons/bs";
import { TbFingerprintScan } from "react-icons/tb";
const heroServicesData: {
  id: number;
  name: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}[] = [
  {
    id: 1,
    name: "laptop-desktop",
    title: "ল্যাপটপ & ডেক্সটপ",
    description: "পোর্টেবল এবং ডেস্কটপ কম্পিউটার",
    icon: <PiDesktopTowerFill size={24} />,
  },
  {
    id: 2,
    name: "printer-scanner",
    title: "প্রিন্টার & স্ক্যানার",
    description: "প্রিন্ট এবং স্ক্যান করার যন্ত্র",
    icon: <MdAdfScanner size={24} />,
  },
  {
    id: 3,
    name: "network-device",
    title: "নেটওয়ার্ক ডিভাইস",
    description: "নেটওয়ার্ক সংযোগ ডিভাইস",
    icon: <BsFillRouterFill size={24} />,
  },
  {
    id: 4,
    name: "attendece-device",
    title: "অ্যাটেনডেন্স ডিভাইস",
    description: "উপস্থিতি নির্ধারণ ডিভাইস",
    icon: <TbFingerprintScan size={24} />,
  },
  {
    id: 5,
    name: "cctv-camera",
    title: "সিসি ক্যামেরা",
    description: "সার্কিউলেশন সিস্টেম ক্যামেরা",
    icon: <BiSolidCctv size={24} />,
  },
  {
    id: 6,
    name: "more-hardware",
    title: "আরো অন্যান্য",
    description: "অতিরিক্ত বিভাগের পণ্য",
    icon: <MdMore size={24} />,
  },
];
const Navbar = () => {
  // const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleServicesTab, setToggleServicesTab] = useState(false);
  const [toggleOthersTab, setToggleOthersTab] = useState(false);
  const [hoverCallBtn, setHoverCallBtn] = useState(false);

  return (
    <div className="">
      <div className={`custom-container`} style={{ padding: "0" }}>
        <nav>
          <div
            className="grid grid-cols-2 lg:grid-cols-3 items-center justify-items-end lg:justify-items-start bg-white p-[10px] sm:p-0"
            style={{ zIndex: "9999999" }}
          >
            <div
              className="flex justify-start items-center bg-white gap-8"
              style={{ zIndex: "9999999" }}
            >
              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  className="lg:md:max-h-[40px] max-h-[35px]"
                  alt="Website logo"
                />
              </a>
              <div className="flex items-center gap-1">
                <img className="w-8" src={locationPinAnimated} alt="" />
                <span className="text-xl font-solaimanlipi-bold">ঢাকা</span>
              </div>
            </div>

            {/* desktop view  */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-4">
                <li className="py-5">
                  <NavLink
                    to={"/"}
                    className="text-[17px] hover:text-secondary"
                  >
                    হোম
                  </NavLink>
                </li>
                <li className="py-5 relative group">
                  <ServicesNavTab />
                </li>
                <li className="py-5">
                  <NavLink
                    to={"/blogs"}
                    className="text-[17px] hover:text-secondary"
                  >
                    ব্লগ
                  </NavLink>
                </li>
                <li className="py-5">
                  <NavLink
                    to={"/contact-us"}
                    className="text-[17px] hover:text-secondary"
                  >
                    যোগাযোগ
                  </NavLink>
                </li>
                <li className="py-5">
                  <OthersNavTab />
                </li>
              </ul>
            </div>
            <div className="w-full hidden md:flex justify-end">
              <div className="flex items-center">
                <a
                  href="tel:+8801618634321"
                  className="flex items-center"
                  onMouseOver={() => setHoverCallBtn(true)}
                  onMouseOut={() => setHoverCallBtn(false)}
                >
                  <span className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center z-50">
                    <RiCustomerServiceFill
                      className={`${
                        hoverCallBtn ? "animate-bounce" : "animate-none"
                      }`}
                      size={24}
                    />
                  </span>
                  <div className="flex flex-col translate-x-[-20%]">
                    <span className="py-1 bg-slate-100 pl-8 pr-4 rounded-r-full text-sm">
                      এখনই কল করুন!
                    </span>
                    <span className="pl-8 pr-4 text-sm">01618-634321</span>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="block md:hidden bg-white"
              style={{ zIndex: "9999999" }}
            >
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <RiMenu3Fill size={24} />
              </button>
            </div>
          </div>
          <div
            style={{ zIndex: "99" }}
            className={`absolute bottom-1  left-0 w-full bg-white shadow-md transition-all ease-linear duration-300 translate-y-[100%] overflow-hidden h-0 ${
              toggleMenu ? "h-auto" : "h-0"
            }`}
          >
            <ul>
              <li className="flex items-center justify-between p-[15px] border-b">
                <NavLink
                  to={"/"}
                  onClick={() => setToggleMenu(false)}
                  className="text-[17px] inline-block hover:text-secondary"
                >
                  হোম
                </NavLink>
              </li>
              <li>
                <div
                  className="flex items-center justify-between p-[15px] border-b relative"
                  onClick={() => setToggleServicesTab(!toggleServicesTab)}
                >
                  <a href="#" className="text-[17px] inline-block ">
                    সার্ভিসেস
                  </a>
                  <span>
                    <FaChevronDown size={10} />
                  </span>
                </div>
                <div
                  className={`p-3 overflow-hidden ${
                    toggleServicesTab ? "h-auto block" : " h-0 hidden"
                  }`}
                >
                  {heroServicesData.map((service) => (
                    <NavLink
                      key={service.id}
                      onClick={() => setToggleMenu(false)}
                      to={`/category/${service.name}`}
                    >
                      <div className="flex items-center gap-3 px-[10px] py-2 rounded border border-transparent transition-all ease-linear hover:border-slate-200 hover:translate-x-[5px]">
                        <div className="w-[45px] h-[45px] border rounded flex items-center justify-center text-secondary">
                          {service.icon}
                        </div>
                        <div className="">
                          <p className="text-[14px]">{service.title}</p>
                          <p className="text-[12px]">{service.description}</p>
                        </div>
                      </div>
                    </NavLink>
                  ))}
                  <span className="flex w-full h-[1px] bg-slate-200 mt-3"></span>
                </div>
              </li>

              <li className="flex items-center justify-between p-[15px] border-b">
                <NavLink
                  to={"/blogs"}
                  onClick={() => setToggleMenu(false)}
                  className="text-[17px] inline-block hover:text-secondary"
                >
                  ব্লগ
                </NavLink>
              </li>
              <li className="flex items-center justify-between p-[15px] border-b">
                <NavLink
                  to={"/contact-us"}
                  onClick={() => setToggleMenu(false)}
                  className="text-[17px] inline-block hover:text-secondary"
                >
                  যোগাযোগ
                </NavLink>
              </li>
              <li>
                <div
                  className="flex items-center justify-between p-[15px] border-b"
                  onClick={() => setToggleOthersTab(!toggleOthersTab)}
                >
                  <a href="#" className="text-[17px] inline-block ">
                    আরো
                  </a>
                  <span>
                    <FaChevronDown size={10} />
                  </span>
                </div>
                <div
                  className={`p-3 overflow-hidden ${
                    toggleOthersTab ? "h-auto block" : " h-0 hidden"
                  }`}
                >
                  <ul className="p-3">
                    <li className="mb-2">
                      <NavLink
                        onClick={() => setToggleMenu(false)}
                        to={"/about-us"}
                        className={"hover:underline"}
                      >
                        আমাদের সম্পর্কে
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink
                        onClick={() => setToggleMenu(false)}
                        to={"/privacy-policy"}
                        className={"hover:underline"}
                      >
                        আমাদের পলিসি
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink
                        onClick={() => setToggleMenu(false)}
                        to={"/terms-and-condition"}
                        className={"hover:underline"}
                      >
                        সাহায্য ও সহায়তা
                      </NavLink>
                    </li>
                  </ul>
                  <span className="flex w-full h-[1px] bg-slate-200 mt-3"></span>
                </div>
              </li>
              <li className="p-[15px] border-b">
                <div className="">
                  <a
                    href="tel:+8801618634321"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>
                      <BiSupport size={20} />
                    </span>
                    <span className="text-[17px]">হেল্পলাইন</span>
                    <span className="text-[17px]">01618634321</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
