import Hero from "@/components/ui/hero";
import NewsCard from "@/components/ui/news_card";
import Image from "next/image";
import React from "react";
import { dummy_newses } from "../../lib/dummy";
import { HiShare } from "react-icons/hi";

const NewsPage = () => {
  return (
    <div className="min-h-svh w-full">
      <Hero
        title="news"
        descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, tenetur."
        imageSrc="/news_image_background.jpg"
      />
      <div className="px-14">
        <div className="my-20">
          <div className="w-sm h-3 bg-red-700"></div>
          <h2 className="text-6xl mt-10">Kabar Berita</h2>
        </div>
        <div className="flex justify-between gap-8">
          <div className="flex bg-red-700 w-[650px] h-[435px]">
            <Image
              className="object-cover w-[55%]"
              src={"/news_image_background2.jpg"}
              alt="IMAGE"
              width={400}
              height={400}
            />
            <div className="p-6 text-white/80 h-full flex flex-col gap-5">
              <p className="text-3xl text-white line-clamp-2">Lorem ipsum dolor sit amet.</p>
              <p className="text-xl line-clamp-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea, optio assumenda
                eum eius neque?
              </p>
              <p className="text-xl line-clamp-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, aperiam?
              </p>
              <div className="flex-grow flex justify-between items-end">
                <HiShare className="text-white text-2xl" />
                <p>Senin, 24 April 2025</p>
              </div>
            </div>
          </div>
          <div className="relative w-[650px] h-[435px] overflow-hidden">
            <Image
              className="absolute inset-0 -z-10 w-full h-full"
              src={"/image3.jpg"}
              alt="IMAGE"
              width={400}
              height={400}
            />
            <div className="absolute bottom-0 bg-black/70 text-white/80 h-[40%] p-6">
              <p className="text-2xl text-white">Lorem ipsum dolor sit amet.</p>
              <p className="text-md mt-4 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt sapiente eligendi
                nihil doloremque magni iusto ratione ut quis dolorum?
              </p>
              <p className="text-md mt-4 line-clamp-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, cupiditate.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-40 flex gap-8">
          {dummy_newses.map((n, i) => (
            <NewsCard {...n} key={i} />
          ))}
        </div>
        <div className="my-20 flex justify-center items-center">
          <p className="text-red-600 text-2xl underline">Berita Lainnya</p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
