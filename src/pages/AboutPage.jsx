import HeroSection from "@/components/common/HeroSection";
import MissionVisionSection from "@/components/sections/CommonSections/MissionVisionSection";
import ContainerLayout from "@/Layout/ContainerLayout";
import FlexLayout from "@/Layout/FlexLayout";

const AboutPage = () => {
  return (
    <FlexLayout>
      <HeroSection
        height={"half"}
        image={"/assets/hero-section-image-home.webp"}
        title="About Us"
      />

      <ContainerLayout>
        <h2 className="text-center font-serif text-2xl md:text-4xl text-primary-500 font-bold mb-4">
          Who are we?
        </h2>

        <p className="max-w-[62ch] mx-auto text-center  font-serif">
          COLCAT is a dynamic consulting firm offering specialized services in
          Funding, Investment, Management, IT, Legal, Finance, Accounting, Tax,
          Engineering, and Aviation Consulting. With a team of experienced
          professionals from various industries, we provide best solutions to
          address each clients unique needs, guiding them through complex
          challenges and facilitating sustainable growth. Our dedication to
          excellence, innovation, and client satisfaction guarantees measurable
          outcomes and enduring success and foster long-term relationships
        </p>
      </ContainerLayout>

      <MissionVisionSection />
    </FlexLayout>
  );
};

export default AboutPage;
