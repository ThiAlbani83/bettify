import React from "react";
import Card from "./Card";
import { cardData } from "../../utils/cardData.js";
import Title from "../Title.jsx";
import { HiArrowRight, HiPhone } from "react-icons/hi";

const OurWorks = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-20 max-w-7xl 2xl:mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <Title title="Nossos serviços" />

          {/* Optional subtitle */}
          <div className="mt-6 sm:mt-8 max-w-3xl mx-auto">
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed px-4">
              Soluções inovadoras e estratégicas para impulsionar seu negócio ao
              próximo nível
            </p>
          </div>
        </div>

        {/* Cards Grid - Uniform Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 auto-rows-fr">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 h-full"
            >
              <div className="h-full min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[380px] flex">
                <Card
                  title={card.title}
                  description={card.description}
                  index={index}
                  className="flex-1 h-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Ver todos os serviços
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-md">
              <span className="flex items-center justify-center gap-2">
                <HiPhone className="w-5 h-5" />
                Fale conosco
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse hidden lg:block" />
    </section>
  );
};

export default OurWorks;
