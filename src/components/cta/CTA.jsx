import React from "react";
import Title from "../Title";

const CTA = () => {
  return (
    <div className="py-10 mx-5 sm:mx-10 md:mx-16 lg:mx-40 xl:mx-60 rounded-2xl flex flex-col gap-10 items-center mt-10">
      <Title title={"Tem um projeto em mente? A gente desenvolve com você."} />
      <button className="bg-gradient-to-r from-primary via-primary to-secondary px-4 py-3 rounded-2xl text-black font-semibold max-w-[450px]">
        Solicitar orçamento personalizado
      </button>
    </div>
  );
};

export default CTA;
