import CountUp from "react-countup";

const Statistics = () => {
  return (
    <div className="px-7 py-5 grid grid-cols-1 sm:grid-cols-3 text-center ">
      <div className="py-3 border-b sm:border-b-0 border-r-0 sm:border-r flex flex-col justify-between items-stretch">
        <p className="text-[32px] mb-3 font-semibold">
          <CountUp startVal={0} end={1600} suffix="+" />
        </p>
        <p className="text-[20px]">সার্ভিস রিকুয়েস্ট</p>
      </div>
      <div className="py-3 border-b sm:border-b-0 border-r-0 sm:border-r flex flex-col justify-between items-stretch">
        <p className="text-[32px] mb-3 font-semibold">
          <CountUp startVal={0} end={1200} suffix="+" />
        </p>
        <p className="text-[20px]">সফল সার্ভিস</p>
      </div>
      <div className="py-3 flex flex-col justify-between items-stretch">
        <p className="text-[32px] mb-3 font-semibold">
          <CountUp startVal={0} end={1100} suffix="+" />
        </p>
        <p className="text-[20px]">হ্যাপি গ্রাহক</p>
      </div>
    </div>
  );
};

export default Statistics;
