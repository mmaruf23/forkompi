import Hero from "@/components/ui/hero";
import ImageShadowed from "@/components/ui/image_shadow";
import React from "react";
import imagePath from "@/static/hero-background-1.png";

const HomePage = () => {
  return (
    <div className="h-[200svh] w-full">
      {/* ahehehe sorry */}
      <Hero
        title="forkompi"
        descp="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit."
        image="/hero-background-2.png"
      />
      <div className="flex gap-5 justify-center items-center w-full h-full">
        <ImageShadowed src={imagePath} value={-16} width={300} color={"yellow"} height={250} />
        <ImageShadowed src={imagePath} value={16} width={300} color={"blue"} height={250} />
      </div>
    </div>
  );
};

export default HomePage;
