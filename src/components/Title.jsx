import React from "react";

const Title = ({ title }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-3xl text-gray-200">{title}</h2>
      <div className="w-12 h-2 bg-primary" />
    </div>
  );
};

export default Title;
