import Image from "next/image";
import React from "react";
import { HiShare } from "react-icons/hi";

type NewsCardProps = {
  title: string;
  subtitle: string;
  image: string;
  published_at: string;
};

const NewsCard = ({ title, subtitle, image, published_at }: NewsCardProps) => {
  return (
    <div className="flex justify-center">
      <div
        className=" bg-red-700 
      w-full sm:w-[280px] lg:w-[280px] 
      rounded-br-4xl rounded-tl-4xl overflow-hidden"
      >
        {/* Image with fixed ratio for consistency */}
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={image}
            alt="IMAGE"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 320px, 400px"
          />
        </div>

        <div className="p-4 md:p-5 lg:p-6 text-white/80 flex flex-col gap-3">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white line-clamp-2">
            {title}
          </p>
          <p className="text-sm md:text-base lg:text-lg line-clamp-4">{subtitle}</p>

          <div className="flex-grow flex justify-between items-center pt-4 text-xs sm:text-sm md:text-base">
            <HiShare className="text-white text-sm lg:text-2xl" />
            <p>{published_at}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
