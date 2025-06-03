import React, { useState, useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        flex items-center justify-between 
        w-full transition-all duration-300 ease-in-out
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20
        ${
          isScrolled
            ? "py-4 bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10"
            : "py-6 lg:py-8 bg-transparent"
        }
      `}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white flex items-start gap-1 tracking-widest font-bold">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Bettify
          </span>
          <span className="text-xs sm:text-sm text-gray-400 font-normal mt-1">
            TM
          </span>
        </h1>
      </div>

      {/* Menu Section */}
      <div className="flex items-center">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
