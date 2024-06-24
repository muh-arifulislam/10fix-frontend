import { FaChevronDown } from "react-icons/fa";
import FlyoutLink from "../components/ui/FlyoutLink";
import { NavLink } from "react-router-dom";

const OthersNavTab = () => {
  return (
    <div className="flex justify-center bg-white text-slate-950 z-50 relative">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <span className="flex items-center gap-2 text-[17px]">
          আরো
          <span>
            <FaChevronDown size={10} />
          </span>
        </span>
      </FlyoutLink>
    </div>
  );
};

const navItemsClassName = "mb-2 block";

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <div>
          <span className={navItemsClassName}>
            <NavLink to={"/about-us"} className={"hover:underline"}>
              আমাদের সম্পর্কে
            </NavLink>
          </span>
          <span className={navItemsClassName}>
            <NavLink to={"/privacy-policy"} className={"hover:underline"}>
              প্রাইভেসি এন্ড পলিসি
            </NavLink>
          </span>
          <span className={navItemsClassName}>
            <NavLink to={"/terms-and-condition"} className={"hover:underline"}>
              টার্মস এন্ড কন্ডিশন
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OthersNavTab;
