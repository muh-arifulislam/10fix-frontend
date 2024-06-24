import CardWorkingProcess from "../../components/Card/CardWorkingProcess";
import { BsCalendarCheck, BsEnvelope, BsEmojiLaughing } from "react-icons/bs";

const WorkingProcessSection = () => {
  return (
    <section className="mt-[120px]">
      <div className="custom-container">
        <div className="text-center lg:md:mb-[100px] mb-10">
          <h2 className="section-title">সেবা গ্রহণ করার পদ্ধতি</h2>
        </div>
        <div className="grid grid-cols-3">
          <CardWorkingProcess
            IconComponent={BsCalendarCheck}
            title="অনলাইন সার্ভিস বুক"
          />
          <CardWorkingProcess IconComponent={BsEnvelope} title="ই-ইনভয়েস" />
          <CardWorkingProcess
            IconComponent={BsEmojiLaughing}
            title="সেবা গ্রহণ"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
