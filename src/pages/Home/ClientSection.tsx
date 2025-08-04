import CardClient from "../../components/Card/CardClient";
import Slider from "../../lib/swiper/Slider";
import useBreakpoint from "../../hooks/useBreakpoint";

import clientLogo1 from "../../assets/icons/clients/aniyas-fashion-hub.jpg";
import clientLogo2 from "../../assets/icons/clients/e-hut-bd.jpg";
import clientLogo3 from "../../assets/icons/clients/efarmer.jpg";
import clientLogo4 from "../../assets/icons/clients/purbani.jpg";
import clientLogo5 from "../../assets/icons/clients/sol-international.jpg";

const ClientSection = () => {
  const clientsData = [
    {
      _id: 1,
      title: "Mountain View",
      image: clientLogo1,
    },
    {
      _id: 2,
      title: "Ocean Sunset",
      image: clientLogo2,
    },
    {
      _id: 3,
      title: "City Lights",
      image: clientLogo3,
    },
    {
      _id: 4,
      title: "Forest Retreat",
      image: clientLogo4,
    },
    {
      _id: 5,
      title: "Desert Mirage",
      image: clientLogo5,
    },
  ];

  const breakPoint = useBreakpoint();
  return (
    <section className="my-[120px]">
      <div className="container mx-auto px-4 md:px-0">
        <div>
          <h2 className="section-title text-center">
            আমাদের কর্পোরেট ক্লায়েন্ট
          </h2>
          <div className="my-10">
            <Slider
              data={clientsData}
              pagination={false}
              slidePerView={breakPoint === "xs" ? 1 : 3}
              render={CardClient}
            ></Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
