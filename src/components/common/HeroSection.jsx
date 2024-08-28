import ContainerLayout from "@/Layout/ContainerLayout";
import Button from "@/components/common/Button";
import { Link } from "react-router-dom";

export default function HeroSection({
  image,
  height,
  title,
  description,
  buttonText,
  buttonRedirect,
}) {
  return (
    <ContainerLayout>
      <div
        className={`relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl mt-12
        ${height === "full" ? "h-[40rem]" : "h-[20rem]"}`}
      >
        <img
          src={image}
          className="w-full h-full object-cover"
          alt="Hero Image"
        />

        <div className="absolute backdrop-blur-sm bg-[#ececec66] backdrop-brightness-90 text-center z-2 -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 w-full h-full p-2 lg:px-5 flex justify-center flex-col">
          <h1 className="text-primary-500 text-4xl md:text-6xl font-semibold capitalize font-serif mb-6">
            {title}
          </h1>

          {description && (
            <p className="font-sans text-base md:text-xl font-medium mb-12">
              {description}
            </p>
          )}

          {buttonText && (
            <Link to={buttonRedirect} className="w-fit mx-auto">
              <Button styles="text-xl px-6 py-4" type="primary">
                {buttonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </ContainerLayout>
  );
}
