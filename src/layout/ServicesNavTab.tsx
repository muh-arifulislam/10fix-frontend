import { FaChevronDown } from "react-icons/fa";
import FlyoutLink from "../components/ui/FlyoutLink";
import CardServiceNav from "../components/Card/CardServiceNav";
import { PiDesktopTowerFill } from "react-icons/pi";
import { MdAdfScanner, MdMore } from "react-icons/md";
import { BsFillRouterFill } from "react-icons/bs";
import { TbFingerprintScan } from "react-icons/tb";
import { BiSolidCctv } from "react-icons/bi";
// import { NavLink } from "react-router-dom";

const ServicesNavTab = () => {
  return (
    <div className="flex justify-center bg-white text-slate-950 z-50 relative">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        <span className="flex items-center gap-2 text-[17px]">
          সার্ভিসেস
          <span>
            <FaChevronDown size={10} />
          </span>
        </span>
      </FlyoutLink>
    </div>
  );
};

const PricingContent = () => {
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
  return (
    <div className="lg:w-[920px] md:w-[600px] bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3 border-b pb-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
          {heroServicesData.map((item) => (
            <CardServiceNav data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesNavTab;
