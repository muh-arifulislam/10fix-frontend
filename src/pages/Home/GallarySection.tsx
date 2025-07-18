import image1 from "../../assets/images/gallary-item04.jpg";
import image2 from "../../assets/images/gallary-item05.jpg";
import image3 from "../../assets/images/gallary-item01.jpg";
import image4 from "../../assets/images/gallary-item03.jpg";
import image5 from "../../assets/images/gallary-item02.jpg";
import image6 from "../../assets/images/gallary-item06.jpg";
import gallaryImg from "../../assets/images/glr-design.png";
import useBreakpoint from "../../hooks/useBreakpoint";

const GallarySection = () => {
  const screens = useBreakpoint();
  return (
    <section>
      <div className="custom-container">
        {/* <div className="flex flex-row flex-wrap justify-between gap-0 sm:gap-[40px] p-3">
          <div className="w-[40%] sm:w-auto mb-[34px]">
            <img
              height="448"
              className="h-full w-auto sm:h-[224px] max-w-full"
              src={image5}
              alt=""
            />
          </div>
          <div className="w-[60%] sm:w-auto mb-[34px]">
            <img
              width="666"
              height="448"
              className="h-auto w-auto sm:h-[224px] max-w-full"
              src={image2}
              alt=""
            />
          </div>
          <div className="w-[100%] sm:w-auto mb-[34px]">
            <img
              width="846"
              height="448"
              className="h-[224px] w-auto max-w-[100%]"
              src={image6}
              alt=""
            />
          </div>
        </div> */}

        <div className="mb-[100px]">
          <h2 className="section-title text-center ">
            কাজ হোক বিরক্তিমুক্ত #SaveYourTime!
          </h2>
        </div>
        <div
          className={`${
            screens == "xl"
              ? "animated-border"
              : "border-[2px] rounded border-[#d92626]"
          }`}
        >
          <div className="relative grid grid-cols-12 sm:gap-8 gap-4 p-4 pb-8 sm:p-8">
            <div className="col-span-5 sm:col-span-3 sm:h-[224px]">
              <img className="h-full w-full" src={image1} alt="" />
            </div>
            <div className="col-span-7 sm:col-span-4 sm:h-[224px]">
              <img className="h-full w-full" src={image2} alt="" />
            </div>
            <div className="col-span-12 sm:col-span-5 sm:h-[224px]">
              <img className="h-full w-full" src={image3} alt="" />
            </div>
            <div className="col-span-12 sm:col-span-5 sm:h-[224px] order-1 sm:-order-none">
              <img className="h-full w-full" src={image4} alt="" />
            </div>
            <div className="col-span-5 sm:col-span-3 sm:h-[224px]">
              <img className="h-full w-full" src={image5} alt="" />
            </div>
            <div className="col-span-7 sm:col-span-4 sm:h-[224px]">
              <img className="h-full w-full" src={image6} alt="" />
            </div>
            <div>
              <img
                className="absolute bottom-0 w-[200px] left-[50%] translate-x-[-50%] translate-y-[50%]"
                src={gallaryImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallarySection;
