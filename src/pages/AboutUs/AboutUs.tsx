import SectionHeader from "../../components/ui/SectionHeader";
import ClientSection from "../Home/ClientSection";

import aboutImg from "../../assets/images/context-about.jpg";
import activitiesImg from "../../assets/images/activities.jpg";
import FadeUp from "../../components/FadeUp";
import FadeRight from "../../components/FadeRight";
import FadeLeft from "../../components/FadeLeft";

const AboutUs = () => {
  return (
    <>
      <SectionHeader title="আমাদের সম্পর্কে" />
      <div className="custom-container my-28 ">
        <FadeUp>
          <div className="text-center">
            <h6 className="text-[46px] font-medium text-[#000000] mb-10">
              আমরা নিরন্তর কাজ করে চলেছি
            </h6>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <img className="rounded" src={activitiesImg} alt="" />
            </div>
            <div className="ml-0 sm:ml-[60px]">
              <div className="mb-8">
                <h4 className="mb-4 text-2xl font-medium leading-8 text-[#000]">
                  আমাদের প্রচেষ্টা/দর্শন
                </h4>
                <p className="text-lg text-slate-600">
                  কর্মব্যস্ত সময়কে আরো সহজ করার জন্য একটি ডিজিটাল প্ল্যাটফর্ম
                  তৈরি করে বাংলাদেশকে সামনে এগিয়ে নিয়ে যাওয়া।
                </p>
              </div>
              <div className="mb-8">
                <h4 className="mb-4 text-2xl font-medium leading-8 text-[#000]">
                  আমাদের বিশ্বাস
                </h4>
                <p className="text-lg text-slate-600">
                  সময় ও কাজের মান নিয়ে আমরা কখনই কম্প্রোমাইজ করি না।
                </p>
              </div>
              <div className="mb-8">
                <h4 className="mb-4 text-2xl font-medium leading-8 text-[#000]">
                  ব্যবহারকারীরাই প্রথম
                </h4>
                <p className="text-lg text-slate-600">
                  ১০ ফিক্স এর প্রধান কাজ সেবা দেওয়া। ব্যবহারকারীর সময় ও কাজের
                  উপর প্রভাব না ফেলে।
                </p>
              </div>
              <div className="mb-8">
                <h4 className="mb-4 text-2xl font-medium leading-8 text-[#000]">
                  আমাদের কাছে সবাই গুরুত্বপূর্ণ।
                </h4>
                <p className="text-lg text-slate-600">
                  ১০ ফিক্স পরিবারের সবাই আমাদের কাছে মূল্যবান।
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 sm:mt-40 gap-0 sm:gap-20  ">
          <FadeRight>
            <div className="">
              <h5 className="text-2xl sm:text-5xl mb-8">১০ ফিক্স কী করে?</h5>
              <p className="text-md mb-4 text-primary">
                ডিজিটাল বাংলাদেশের প্রতিষ্টা দ্রুত করার জন্য বিশেষ ভূমিকা রাখার
                আশা রাখে ১০ ফিক্স। এই লক্ষ্যে ১০ ফিক্স কর্মব্যস্ত সময়কে আরো সহজ
                করার জন্য একটি ডিজিটাল প্ল্যাটফর্ম তৈরি করে বাংলাদেশকে সামনে
                এগিয়ে নিয়ে যাওয়া সেবা দিয়ে থাকে।
              </p>
            </div>
          </FadeRight>
          <FadeLeft>
            <div>
              <h5 className="text-2xl sm:text-5xl mb-8">আমাদের উদ্দেশ্য কী?</h5>
              <p className="text-md mb-4 text-primary">
                অভিনব প্রযুক্তি সমাধানের মাধ্যমে আমাদের ক্লায়েন্টদের সেরা আইটি
                পরিষেবা প্রদান করা এবং তাদের ব্যবসায়িক লক্ষ্য অর্জনে সহায়তা
                করা আমাদের মিশন। আমরা গুণগত মান, নির্ভরযোগ্যতা, সেবা শ্রেষ্ঠত্ব
                এবং উদ্ভাবনে নিজেদের প্রতিশ্রুতিবদ্ধ রেখেছি।
              </p>
            </div>
          </FadeLeft>
        </div>
        <FadeUp>
          <div>
            <div className="relative mt-8 sm:mt-[100px]">
              <img className="hidden sm:inline" src={aboutImg} alt="" />
              <div className="relative sm:absolute bg-black sm:bg-transparent top-0 left-0 w-full h-full">
                <div className="h-full w-full py-5 px-8 sm:py-[60px] sm:px-[85px] text-white flex flex-col justify-between">
                  <p className="sm:w-[50%] sm:text-2xl  leading-[18px]  sm:leading-[44px] tracking-normal mb-3">
                    আমরা সব সময় বিশ্বাস করি ডিজিটাল বাংলাদেশ গড়ার লক্ষ্যে
                    ডিজিটাল প্ল্যাটফর্ম অনেক ভুমিকা রাখে। কর্ম সময় বৃদ্ধি এবং
                    মেধা বিকাশের জন্য ডিজিটাল প্ল্যাটফর্ম অনেক গুরুত্বপূর্ণ। ১০
                    ফিক্স একটি ডিজিটাল সেবা প্রদানকারী প্ল্যাটফর্ম, যে সেবা সমূহ
                    নিয়ে আমরা আছি আপনার দরজা পর্যন্ত। কর্ম সময় বৃদ্ধি এবং মেধা
                    বিকাশের সব সময় আপনার সাথে।
                  </p>
                  <div>
                    <h4 className="sm:text-3xl">রাকিব মাহমুদ</h4>
                    <span className="sm:text-md">পরিচালক, ১০ফিক্স</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
      <ClientSection />
    </>
  );
};

export default AboutUs;
