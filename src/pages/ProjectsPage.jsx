import HeroSection from "@/components/common/HeroSection";
import ITFeaturesSection from "@/components/sections/CommonSections/ITFeaturesSection";
import FlexLayout from "@/Layout/FlexLayout";

const ProjectsPage = () => {
  return (
    <FlexLayout>
      <HeroSection
        height={"half"}
        image={"/assets/hero-section-image-home.webp"}
        title="Projects"
      />

      <ITFeaturesSection
        title={"We Provide Best in Class Finance & Business Solutions"}
        description="Your Complete Business Solution."
      />
    </FlexLayout>
  );
};

export default ProjectsPage;
