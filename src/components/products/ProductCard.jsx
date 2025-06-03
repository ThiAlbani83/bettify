import React from "react";
import { HiCheckCircle, HiArrowRight } from "react-icons/hi";

const ProductCard = ({
  title,
  image,
  description,
  features,
  conclusion,
  isReversed = false,
}) => {
  return (
    <div
      className={`
      grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center
      bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl 
      transition-all duration-500 p-4 sm:p-6 md:p-8
      border border-gray-100/50
      ${isReversed ? "lg:grid-flow-col-dense" : ""}
    `}
    >
      {/* Image Section */}
      <div
        className={`
        relative group overflow-hidden rounded-xl
        ${isReversed ? "lg:col-start-2" : ""}
      `}
      >
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={`${title} - Produto Bettify`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Product Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
          Produto Premium
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`
        space-y-4 sm:space-y-5 md:space-y-6
        ${isReversed ? "lg:col-start-1" : ""}
      `}
      >
        {/* Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {title}
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-2 sm:space-y-3">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
            Principais funcionalidades:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm sm:text-base text-gray-600"
              >
                <HiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 sm:p-5">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
            {conclusion}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
            Saiba mais
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105">
            Ver demonstração
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
