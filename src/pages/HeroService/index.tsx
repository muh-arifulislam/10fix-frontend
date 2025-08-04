import { FaArrowRight } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import useBreakpoint from "../../hooks/useBreakpoint";

import FadeLeft from "../../components/FadeLeft";
import FadeRight from "../../components/FadeRight";
import FadeUp from "../../components/FadeUp";

//images
import featureIcon1 from "../../assets/icons/person-with-clock-money.png";
import featureIcon2 from "../../assets/icons/hand-with-clock.png";
import featureIcon3 from "../../assets/icons/person-icon.png";
import paymentIcon from "../../assets/icons/pay-info.png";
import pageBg from "../../assets/images/service-page-hero-design.jpg";

type TFeature = {
  id: number;
  title: string;
  content: string;
  image: string;
};

const HeroService = () => {
  const breakPoint = useBreakpoint();

  const featureData: TFeature[] = [
    {
      id: 1,
      title: "ডিভাইস নিয়ে নো টেনশন!",
      content:
        "আপনার ডিভাইস নিয়ে প্রতিদিন কি কাজের প্রতি বিরক্ত হোন? অনুরোধ পাঠান আর বিরক্তি কে ছুটি দিন! ১০ফিক্স মানেই সাশ্রয়ী, ঝামেলাবিহীন এবং নিরাপদ সলিউশন!",
      image: featureIcon1,
    },
    {
      id: 2,
      title: "কাজকে সহজ করুন, নিজেকে সময় দিন।",
      content:
        "আপনি আমাদের কাছে অনেক গুরুতবপূর্ণ। আপনার সময়ের মধ্যে ডিভাইসকে সম্পন্ন করে সেবাটি চালু করার জন্য একমাত্র সমাধান ১০ফিক্স!",
      image: featureIcon2,
    },
    {
      id: 3,
      title: "আমরা সব সময় এভেইলেবল",
      content:
        "সকাল কিংবা বিকাল, সব সময়েই আমরা প্রস্তুত আছি আপনার পাঠানো অনুরোধটি নিশ্চিত করতে। তাই যেকোনো সময়ই পাঠাতে পারেন আপনার সেবার অনুরোধটি!",
      image: featureIcon3,
    },
  ];

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${pageBg})`,
        }}
        className={`w-full max-w-screen-2xl mx-auto lg:md:sm:h-[560px] h-auto lg:md:sm:bg-cover bg-no-repeat lg:md:sm:bg-center bg-right-top relative mb-0 sm:mb-[150px] ${
          breakPoint === "xs" ? "bg-sizeTB" : "bg-full"
        }`}
      >
        <div>
          <div style={{ zIndex: 1, position: "relative" }}>
            <div
              style={
                breakPoint === "xs"
                  ? {
                      background:
                        "linear-gradient(to top, #fff 63%, transparent 90%)",
                    }
                  : {}
              }
            >
              <div className="pt-20 text-center sm:text-start">
                <div className="grid lg:md:grid-cols-5 grid-cols-1 lg:md:px-[100px] lg:md:py-[100px] p-[40px]">
                  <div className="col-span-2">
                    <FadeLeft>
                      <h2 className="text-3xl sm:text-5xl leading-[45px] sm:leading-[65px] text-primary font-solaimanlipi-bold ">
                        মুঠো ফোনে অনুরোধ এবং ডেলিভারি
                      </h2>
                    </FadeLeft>
                    <FadeLeft>
                      <p className="text-xl leading-[30px] mb-4">
                        নির্দিষ্ট সময়ের মধ্যে আপনার ডিভাইস এর সমস্যার সমাধান
                        অনুরোধ বাটন আপনার হাতেই!
                      </p>
                    </FadeLeft>
                    <FadeRight>
                      <div className="flex justify-center sm:justify-start">
                        <NavLink
                          to={"/request-service"}
                          className=" bg-secondary text-white shadow-xl border rounded-md px-[40px] py-[15px] text-xl hover:shadow flex items-center justify-between gap-12 sm:gap-[90px] group  transition-all ease-linear"
                        >
                          <span className="flex items-center gap-5">
                            <span>
                              <FaShop />
                            </span>
                            <span>বুক সার্ভিস</span>
                          </span>
                          <FaArrowRight className="transition-all ease-linear group-hover:translate-x-2" />
                        </NavLink>
                      </div>
                    </FadeRight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FadeUp>
        <section className="custom-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featureData.map((item: TFeature) => (
              <div key={item.id} className="p-[48px] text-center">
                <div className="mb-5">
                  <img src={item.image} alt="" />
                </div>
                <h2 className="text-[32px] leading-10 mb-5">{item.title}</h2>
                <p className="text-xl">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>
      <FadeUp>
        <section className="container mx-auto px-4 md:px-0 my-[100px] ">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              <div className="w-[90%] mx-auto">
                <h2 className="text-[32px] leading-10 mb-5">
                  পেমেন্ট ই-ইনভয়েস যাবে ই-মেইলের মাধ্যমে
                </h2>
                <p className="text-xl">
                  ঝামেলামুক্ত ও পেপারলেস পেমেন্ট ই-ইনভয়েস আপনার অনুরোধ এর ৩য়
                  ধাপে ই-মেইল এর মাধ্যমে পেয়ে যাবেন
                </p>
              </div>
              <div className="">
                <img className="w-full h-auto" src={paymentIcon} alt="" />
              </div>
            </div>
          </div>
        </section>
      </FadeUp>
    </>
  );
};

export default HeroService;
