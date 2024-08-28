import { Link } from "react-router-dom";
import data from "@/constants/data.json";

const ITFeaturesSection = ({ title, description, items, redirect }) => {
  const itData = items ? items : data[2].subItems;
  return (
    <section className="container mx-auto px-2 py-8 grid md:grid-cols-2">
      <div>
        <h2 className="font-serif text-4xl md:text-6xl text-primary-500 font-bold mb-4">
          {title}
        </h2>

        <p className="font-sans text-md lg:text-xl text-justify">
          {description}
        </p>
      </div>

      <ul className="flex flex-col font-serif mt-14 md:mt-0">
        {itData.map((page) => (
          <li key={page.id}>
            <Link
              to={
                redirect
                  ? `/services/${redirect}#${page.slug}`
                  : `/services/${page.slug}`
              }
              className="group flex items-center justify-between  md:px-0 md:ml-10 text-2xl py-4 border-t transition-all border-t-slate-900/75 last:border-b last:border-b-slate-900/75 hover:bg-primary-500 hover:text-white hover:border-y-black hover:border-y "
            >
              <h2 className="capitalize font-bold pl-2">{page.title}</h2>

              <p className=" rotate-[130deg]  px-2">&larr;</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ITFeaturesSection;
