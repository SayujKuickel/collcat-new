import HeroSection from "@/components/common/HeroSection";
import ContactFormSection from "@/components/sections/contactSections/ContactFormSection";
import FlexLayout from "@/Layout/FlexLayout";

const ContactPage = () => {
  return (
    <>
      <FlexLayout>
        <HeroSection
          height={"half"}
          image={"/assets/hero-section-image-home.webp"}
          title="Contact Us"
        />

        <ContactFormSection />
      </FlexLayout>
    </>
  );
};

export default ContactPage;
