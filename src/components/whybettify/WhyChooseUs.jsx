import React from "react";
import Title from "../Title";
import { HiDesktopComputer } from "react-icons/hi";
import { Gi3dStairs, GiTechnoHeart } from "react-icons/gi";
import { PiTreeStructureBold } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";
import computer from "../../assets/computer.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: HiDesktopComputer,
      title: "Desenvolvimento ágil e seguro",
      description:
        "Metodologias modernas que garantem entregas rápidas sem comprometer a qualidade.",
    },
    {
      icon: Gi3dStairs,
      title: "Entregas escaláveis e sustentáveis",
      description: "Soluções pensadas para crescer junto com seu negócio.",
    },
    {
      icon: GiTechnoHeart,
      title: "Alinhamento entre tecnologia e usabilidade",
      description:
        "Equilibrio perfeito entre inovação tecnológica e experiência do usuário.",
    },
    {
      icon: PiTreeStructureBold,
      title: "Arquitetura preparada para o futuro",
      description:
        "Infraestrutura robusta e flexível para as demandas de amanhã.",
    },
    {
      icon: BiSupport,
      title: "Suporte técnico e evolutivo",
      description:
        "Acompanhamento contínuo e evolução das suas soluções digitais.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      {/* Content Container */}
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 max-w-6xl 2xl:mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <Title title="Inovação com Propósito" />

          <div className="mt-4 sm:mt-6 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed px-4">
              Transformamos ideias em soluções digitais que fazem a diferença
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Features List */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-5">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-xl hover:bg-white/20 hover:shadow-md transition-all duration-300"
                  >
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="text-white text-lg sm:text-xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-base md:text-lg font-semibold text-gray-200 mb-1 sm:mb-2 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                <img
                  src={computer}
                  alt="Tecnologia e inovação - Bettify"
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
                      100+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Projetos
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
                      5+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">Anos</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Suporte
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
