import HeroSection from "@/components/common/HeroSection";

const PageNotFound = () => {
  return (
    <>
      <HeroSection
        height={"full"}
        image={"/assets/hero-section-image-home.webp"}
        title="Page Not Found"
        description="The page you are looking for doesn't exist!"
        buttonText="Return To Home"
        buttonRedirect={"/"}
      />
    </>
  );
};

export default PageNotFound;
