import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ContainerLayout from "@/Layout/ContainerLayout";
import HeaderMobile from "./HeaderMobile";
import Navigation from "./Navigation";

const Header = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpened(false);
    console.log("changed");
  }, [location]);

  return (
    <header>
      <div className="relative z-[1000]">
        <ContainerLayout>
          <div className="flex items-center justify-between py-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={"/assets/logo.png"}
                className="w-24 aspect-square"
                alt="Collcat-logo"
              />
              <h3 className="hidden lg:block text-4xl font-serif font-bold text-primary-500">
                COLLCAT
              </h3>
            </Link>

            <div
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpened(true)}
            >
              <i className="fi fi-br-menu-burger flex text-2xl"></i>
            </div>

            <div className="hidden text-lg lg:block">
              <Navigation />
            </div>
          </div>
        </ContainerLayout>
      </div>

      {isMobileMenuOpened && (
        <div className="lg:hidden">
          <HeaderMobile handleMobileMenuOpened={setIsMobileMenuOpened} />
        </div>
      )}
    </header>
  );
};

export default Header;
