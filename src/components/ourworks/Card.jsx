import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, description, index, className = "" }) => {
  return (
    <div
      className={`
      bg-white rounded-2xl shadow-lg hover:shadow-xl 
      transition-all duration-300 border border-gray-100
      p-6 sm:p-8 flex flex-col justify-between
      backdrop-blur-sm
      ${className}
    `}
    >
      {/* Card Header */}
      <div className="flex-shrink-0 mb-4 sm:mb-6">
        {/* Icon or Number Badge */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
          <span className="text-white font-bold text-lg sm:text-xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
          {title}
        </h3>
      </div>

      {/* Card Content - Flexible */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Card Footer - Always at bottom */}
        <div className="flex-shrink-0">
          <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-primary font-semibold hover:text-secondary transition-colors duration-300">
            Saiba mais
            <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
