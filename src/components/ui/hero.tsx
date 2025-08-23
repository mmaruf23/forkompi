import React from "react";

type HeroProps = {
  title: string;
  descp: string;
  image: string;
};

const Hero = ({ title, descp, image }: HeroProps) => {
  return (
    <div
      className={`relative flex justify-center items-center w-full h-svh bg-no-repeat bg-cover bg-[url(${image})]`}
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 0 95%)" }}
    >
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="z-20 text-red-700">
        <h1 className="uppercase text-center text-7xl font-bold mb-5">{title}</h1>
        <h1 className="font-semibold">{descp}</h1>
      </div>
    </div>
  );
};

export default Hero;
