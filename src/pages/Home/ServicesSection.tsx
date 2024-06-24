import CardService from "../../components/Card/CardService";
import { servicesData } from "../../data";

const ServicesSection = () => {
  return (
    <section className="mt-[50px] mb-[120px]" id="services">
      <div className="custom-container">
        <div className="">
          <h2 className="text-center section-title">সার্ভিস সমূহ</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-10">
          {servicesData.map((service) => (
            <CardService key={service.id} data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
