import React from "react";

const Hero = () => {
  // miringin bagian bawahnya pake clip-path(polygon)? atau mask-clip ? atau ? ahh gak ah
  return (
    <div className="relative flex justify-center items-center w-full h-svh bg-no-repeat bg-cover bg-[url(/hero-backgroud-resize.png)]">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="z-20 text-red-700">
        <h1 className="uppercase text-center text-7xl font-bold mb-5">forkompi</h1>
        <h1 className="">Forum Komunikasi Mahasiswa Poltekes Kemenkes Se-Indonesia</h1>
      </div>
    </div>
  );
};

export default Hero;
