import CardService from "../../components/Card/CardService";
import SectionHeader from "../../components/ui/SectionHeader";
import { servicesData } from "../../data";

const OurServices = () => {
  const loading = false;

  return (
    <>
      <SectionHeader title="সকল সার্ভিসেস" />
      <div className="lg:md:py-[120px] py-[60px] lg:md:px-0 px-4 simple-content-module">
        <div className="max-w-[1200px] mx-auto my-[40px]">
          {loading ? (
            <>
              <div className="max-w-[1200px] mx-auto my-[50px] ">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
                  loading
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
                {servicesData.map((service) => (
                  <CardService key={service.id} data={service} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OurServices;
