import { MissionVisionData } from "@/constants/MissionVisionData";
import ContainerLayout from "@/Layout/ContainerLayout";

const MissionVisionSection = () => {
  return (
    <ContainerLayout>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
        {MissionVisionData.map((data, index) => (
          <section
            key={index}
            className="bg-gray-100 shadow-md group hover:shadow-lg transition-all"
          >
            <div className="relative">
              <img
                src={data.image}
                alt={`image for ${data.title}`}
                className="w-full h-96 object-cover blur-sm group-hover:blur-none transition-all"
              />

              <div className="w-full h-full absolute-center bg-primary-500 opacity-[.5] group-hover:opacity-[.2] transition-all"></div>

              <p className="absolute-center z-3 text-4xl text-white font-serif font-bold">
                {data.title}
              </p>

              <img
                src={data.icon}
                alt={`icon for ${data.title}`}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-40 p-6 bg-primary-400 rounded-full object-contain border-4 border-gray-200"
              />
            </div>

            <div className="mt-20 p-4">
              <p className="text-center mx-8 md:text-lg">{data.description}</p>
            </div>
          </section>
        ))}
      </div>
    </ContainerLayout>
  );
};

export default MissionVisionSection;
