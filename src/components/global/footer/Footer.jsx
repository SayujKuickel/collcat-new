import ContainerLayout from "@/Layout/ContainerLayout";
import data from "@/constants/data.json";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white font-sans mt-24 py-6 px-1">
      <ContainerLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6">
          <div className="">
            <img
              src={"/assets/Collcat-logo.png"}
              className="w-28 aspect-square brightness-0 invert"
              alt="Collcat-logo"
            />
            <span className="text-2xl font-bold font-serif uppercase">
              COLLCAT
            </span>

            <div className="flex items-center gap-2">{/*  */}</div>
          </div>

          <ul className="">
            <li className="font-serif font-bold text-2xl">Quick Links</li>
            {data.map((item, index) => (
              <li key={index} className="mt-1 ">
                <Link
                  to={item.slug}
                  key={index}
                  className="text-neutral-200 hover:text-white transition-all"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="">
            <li className="font-serif font-bold text-2xl">Consultancy</li>
            {data[2].subItems.map((item, index) => (
              <li key={index} className="mt-1">
                <Link
                  to={`/services/${item.slug}`}
                  key={index}
                  className="text-neutral-200 hover:text-white transition-all"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ContainerLayout>

      <ContainerLayout>
        <div className="border-t border-t-neutral-400/50 pt-4 mt-14 flex items-center justify-between flex-wrap gap-8 md:flex-nowrap">
          <p className="text-neutral-400">
            All rights reserved ©{new Date().getFullYear()} Collcat
          </p>

          <p className="flex items-center justify-between w-full md:w-auto gap-2 text-neutral-400">
            <Link to="" className="hover:text-white transition-all">
              Privacy Policy
            </Link>
            <Link to="" className="hover:text-white transition-all">
              Terms & condition
            </Link>
          </p>
        </div>
      </ContainerLayout>
    </footer>
  );
}
