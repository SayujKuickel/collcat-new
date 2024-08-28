import ContainerLayout from "@/Layout/ContainerLayout";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const HeaderMobile = ({ handleMobileMenuOpened }) => {
  return (
    <div className=" bg-primary-300 fixed top-0 left-0 w-full h-full z-[1005]">
      <ContainerLayout styles={"pt-8"}>
        <Link to="/" className="w-fit">
          <img
            src={"/assets/logo.png"}
            className="w-24 aspect-square brightness-0 invert"
            alt="Collcat-logo"
          />
          <h2 className="mt-4 text-2xl text-white font-semibold font-serif w-fit">
            Collcat
          </h2>
        </Link>

        <div
          className="absolute right-6 top-8 text-white"
          onClick={() => handleMobileMenuOpened(false)}
        >
          <i className="fi fi-rr-circle-xmark flex text-4xl"></i>
        </div>

        <hr className="mt-4 mb-8" />

        <div className="text-lg">
          <Navigation />
        </div>
      </ContainerLayout>
    </div>
  );
};

export default HeaderMobile;
