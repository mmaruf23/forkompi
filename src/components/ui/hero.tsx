import React from "react";

type HeroProps = {
  title: string;
  descp: string;
  imageSrc: string;
};

const Hero = ({ title, descp, imageSrc }: HeroProps) => {
  return (
    <div className="bg-white">
      <div
        className="relative flex justify-center items-center w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen bg-no-repeat bg-cover bg-bottom"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 0 95%)",
          backgroundImage: `url('${imageSrc}')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-red-700/50"></div>

        {/* Content */}
        <div className="z-20 text-white px-4 sm:px-6 md:px-12 text-center">
          <h1 className="uppercase font-bold mb-4 text-3xl sm:text-4xl md:text-6xl">{title}</h1>
          <h2 className="font-semibold text-base sm:text-lg md:text-xl">{descp}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
