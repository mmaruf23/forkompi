import Hero from "@/components/ui/hero";
import ImageShadowed from "@/components/ui/image_shadow";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-[200svh] w-full">
      {/* ahehehe sorry */}
      <Hero />
      <div className="flex gap-5 justify-center items-center w-full h-full">
        <ImageShadowed
          src="/hero-backgroud-resize.png"
          value={-16}
          width={300}
          color={"yellow"}
          height={250}
        />
        <ImageShadowed
          src="/hero-backgroud-resize.png"
          value={16}
          width={300}
          color={"blue"}
          height={250}
        />
      </div>
    </div>
  );
};

export default HomePage;
