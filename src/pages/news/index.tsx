import Hero from "@/components/ui/hero";
import React from "react";

const NewsPage = () => {
  return (
    <div className="h-[200svh] w-full">
      <Hero
        title="news"
        descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, tenetur."
        image="/hero-background-2.png"
      />
    </div>
  );
};

export default NewsPage;
