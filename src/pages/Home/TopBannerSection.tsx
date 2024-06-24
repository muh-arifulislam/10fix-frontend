import { NavLink } from "react-router-dom";
import useBreakpoint from "../../hooks/useBreakpoint";
import { FaShop } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import heroBg from "../../assets/images/Hero-design.jpg";
import Statistics from "../../components/ui/Statistics";
import FadeLeft from "../../components/FadeLeft";
import FadeRight from "../../components/FadeRight";

const TopBannerSection = () => {
  const breakPoint = useBreakpoint();
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className={`w-full lg:md:sm:h-[100vh] h-auto lg:md:sm:bg-cover bg-no-repeat lg:md:sm:bg-center bg-right-top relative mb-0 sm:mb-[150px] ${
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
                    <h2 className="text-3xl sm:text-5xl leading-[45px] sm:leading-[65px] text-primary font-solaimanlipi-bold">
                      দেশের ডিজিটাল <br />
                      সার্ভিস প্ল্যাটফর্ম
                    </h2>
                  </FadeLeft>
                  <FadeRight>
                    <h5 className="my-5 text-primary">
                      এক জায়গা থেকেই সার্ভিস সমাধান।
                    </h5>
                    <div className="flex justify-center sm:justify-start">
                      <NavLink to={"/request-service"}>
                        <button className="bg-[#d31217] px-8 py-2 text-lg rounded-md shadow-lg flex items-center gap-4 text-white">
                          <span>
                            <FaShop />
                          </span>
                          <span className="mr-5">
                            <b>সার্ভিস বুকিং</b>
                          </span>
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </NavLink>
                    </div>
                  </FadeRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative sm:absolute sm:bottom-0 sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[50%]  z-50 sm:w-[50%] w-full p-3">
        <div className="shadow-xl bg-white  rounded-md">
          <Statistics />
        </div>
      </div>
    </section>
  );
};

export default TopBannerSection;
