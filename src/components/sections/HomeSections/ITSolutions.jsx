import { Link } from "react-router-dom";
import Button from "../../common/Button";
import data from "@/constants/data.json";
import ContainerLayout from "@/Layout/ContainerLayout";

const ITSolutions = () => {
  return (
    <section className="bg-gradient-to-r from-primary-500 to-primary-300 text-white py-16">
      <ContainerLayout>
        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
          Our Corporate Advisory
        </h1>
        <p className="font-sans md:text-xl">Crafted to Perfection.</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {data[2].subItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-6 flex flex-col justify-between gap-4 rounded-md bg-primary-600 shadow-sm hover:bg-[#eff3f5] hover:text-primary-500 hover:shadow-sm transition-all group hover:scale-[1.02] overflow-hidden "
            >
              <h2 className="text-2xl md:text-4xl font-bold capitalize font-serif mb-1">
                {item.title}
              </h2>

              <p className="font-sans md:text-md line-clamp-3 mb-8">
                {item.description}
              </p>

              <Link to={`/services/${item.slug}`}>
                <Button
                  type="secondary"
                  styles={
                    "w-fit text-white border-white text-lg px-4 py-3 group-hover:bg-primary-500"
                  }
                >
                  Learn more
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </ContainerLayout>
    </section>
  );
};

export default ITSolutions;
