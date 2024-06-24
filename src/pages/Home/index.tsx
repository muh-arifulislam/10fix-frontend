import ClientSection from "./ClientSection";
import GallarySection from "./GallarySection";
import ServicesSection from "./ServicesSection";
import WorkingProcessSection from "./WorkingProcessSection";
import ReviewSection from "./ReviewSection";
import TopBannerSection from "./TopBannerSection";
import BlogSection from "./BlogSection";
import FadeUp from "../../components/FadeUp";

const Home = () => {
  return (
    <>
      {/* top banner  */}
      <TopBannerSection />

      <section className="my-[20px] block sm:hidden">
        {/* <Statistics /> */}
      </section>

      {/* service section  */}
      <FadeUp>
        <ServicesSection />
      </FadeUp>

      <FadeUp>
        <GallarySection />
      </FadeUp>

      {/* working process section  */}

      <FadeUp>
        <WorkingProcessSection />
      </FadeUp>

      {/* reviws section  */}
      <FadeUp>
        <ReviewSection />
      </FadeUp>

      {/* corporate client section */}
      <FadeUp>
        <ClientSection />
      </FadeUp>

      {/* blog section  */}
      <FadeUp>
        <BlogSection />
      </FadeUp>
    </>
  );
};

export default Home;
