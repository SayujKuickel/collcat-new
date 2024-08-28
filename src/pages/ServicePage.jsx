import HeroSection from "@/components/common/HeroSection";
import ITSolutions from "@/components/sections/HomeSections/ITSolutions";
import FlexLayout from "@/Layout/FlexLayout";

const ServicePage = () => {
  return (
    <FlexLayout>
      <HeroSection
        height={"half"}
        image={"/assets/hero-section-image-home.webp"}
        title="Our Services"
      />

      <ITSolutions />
    </FlexLayout>
  );
};

export default ServicePage;
