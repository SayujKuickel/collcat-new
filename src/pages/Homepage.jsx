import HeroSection from "@/components/common/HeroSection";
import ITFeaturesSection from "@/components/sections/CommonSections/ITFeaturesSection";
import ContactFormSection from "@/components/sections/contactSections/ContactFormSection";
import ITSolutions from "@/components/sections/HomeSections/ITSolutions";
import { BeyondTheBox } from "@/constants/BeyondTheBox";
import FlexLayout from "@/Layout/FlexLayout";
// import data from "@/constants/data.json";

const Homepage = () => {
  return (
    <FlexLayout>
      <HeroSection
        height={"full"}
        image={"/assets/hero-section-image-home.webp"}
        title="unlocking financial success and technological innovation"
        description="Your Partner in Comprehensive Finance Management and Cutting-Edge IT Services"
        buttonText="Contact us"
        buttonRedirect={"/contact"}
      />

      <ITSolutions />

      <ITFeaturesSection
        title={BeyondTheBox.title}
        description={BeyondTheBox.description}
        items={BeyondTheBox.categories}
        redirect={`beyond-the-box`}
      />

      <ContactFormSection />
    </FlexLayout>
  );
};

export default Homepage;
