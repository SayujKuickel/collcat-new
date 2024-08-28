import { useParams } from "react-router-dom";
import data from "@/constants/data.json";
import FlexLayout from "@/Layout/FlexLayout";
import HeroSection from "@/components/common/HeroSection";
import { useEffect, useState } from "react";
import PageNotFound from "@/components/sections/CommonSections/PageNotFound";
import ContactFormSection from "@/components/sections/contactSections/ContactFormSection";
import ContainerLayout from "@/Layout/ContainerLayout";
import { BeyondTheBox } from "@/constants/BeyondTheBox";
import Spiner from "@/components/global/Spiner";

const ServiceItemPage = () => {
  const { slug } = useParams();
  const [isloading, setIsloading] = useState(true);
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    setIsloading(true);

    setPageData(
      slug === "beyond-the-box"
        ? BeyondTheBox
        : data[2].subItems.find((item) => item.slug === slug)
    );

    setIsloading(false);
  }, [slug]);

  console.log(pageData);

  if (!pageData) return <PageNotFound />;

  return (
    <>
      {isloading ? (
        <>
          <Spiner />
        </>
      ) : (
        <FlexLayout>
          <HeroSection
            height={"half"}
            image={"/assets/hero-section-image-home.webp"}
            title={pageData.title}
          />

          <ContainerLayout>
            <FlexLayout>
              {pageData.categories.map((item, index) => (
                <li
                  key={index}
                  id={item.slug}
                  className="flex flex-col md:flex-row md:even:flex-row-reverse gap-4 md:gap-12"
                >
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl mb-4 font-bold font-serif text-primary-800">
                      {item.title}
                    </h2>
                    <p
                      className="md:text-2xl"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                  </div>

                  <div className="rounded-md overflow-hidden flex-1 group">
                    <img
                      src={item.image}
                      className="brightness-90 group-hover:scale-[1.025] h-64 md:h-[24rem] w-full transition-all object-cover"
                      alt={`image for ${item.title}`}
                    />
                  </div>
                </li>
              ))}
            </FlexLayout>
          </ContainerLayout>

          <ContactFormSection />
        </FlexLayout>
      )}
    </>
  );
};
export default ServiceItemPage;
