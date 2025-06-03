import React from "react";

const Menu = () => {
  return (
    <div className="lg:flex items-center gap-10 text-white hidden">
      <ul className="flex items-center gap-4">
        <li className="cursor-pointer hover:text-primary transition-all duration-300">
          Início
        </li>
        <li>|</li>
        <li className="cursor-pointer hover:text-primary transition-all duration-300y">
          Soluções
        </li>
        <li>|</li>
        <li className="cursor-pointer hover:text-primary transition-all duration-300">
          Inovação
        </li>
        <li>|</li>
        <li className="cursor-pointer hover:text-primary transition-all duration-300">
          Contato
        </li>
      </ul>
      <button className="bg-gradient-to-r from-primary via-primary to-secondary px-4 py-1 rounded-2xl text-black font-semibold">
        Solicite seu Sistema
      </button>
    </div>
  );
};

export default Menu;
