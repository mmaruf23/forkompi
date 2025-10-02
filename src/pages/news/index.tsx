import Hero from "@/components/ui/hero";
import NewsCard from "@/components/ui/news_card";
import Image from "next/image";
import React from "react";
import { dummy_newses } from "../../lib/dummy";
import { HiShare } from "react-icons/hi";

const NewsPage = () => {
  return (
    <div className="min-h-svh w-full bg-white">
      <Hero
        title="news"
        descp="Lorem ipsum dolor sit amet, cons ctetur adipisicing elit. Cupiditate, tenetur."
        imageSrc="/news_image_background.jpg"
      />
      <div className="px-4 sm:px-14">
        <div className="my-10 sm:my-20">
          <div className="w-32 sm:w-64 h-2 bg-red-600 mb-4"></div>
          <h2 className="text-4xl sm:text-6xl mt-6 text-black">Kabar Berita</h2>
        </div>

        {/* News Blocks */}
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* News Block 1 */}
          <div className="flex flex-col sm:flex-row bg-red-700 w-full sm:w-[650px] h-auto sm:h-[435px]">
            <Image
              className="object-cover w-full sm:w-[55%] h-60 sm:h-auto"
              src={"/news_image_background2.jpg"}
              alt="IMAGE"
              width={400}
              height={400}
            />
            <div className="p-6 text-white/80 flex flex-col gap-5">
              <p className="text-2xl sm:text-3xl text-white line-clamp-2">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-base sm:text-xl line-clamp-9">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea, optio assumenda
                eum eius neque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea,
                optio assumenda eum eius neque? Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Minus ea, optio assumenda eum eius neque?
              </p>
              <div className="flex-grow flex justify-between items-end text-sm sm:text-base">
                <HiShare className="text-white text-xl sm:text-2xl" />
                <p>Senin, 24 April 2025</p>
              </div>
            </div>
          </div>

          {/* News Block 2 (hidden on mobile) */}
          <div className="hidden sm:block relative w-full sm:w-[650px] h-[300px] sm:h-[435px] overflow-hidden">
            <Image
              className="absolute inset-0 w-full h-full object-cover"
              src={"/image3.jpg"}
              alt="IMAGE"
              width={400}
              height={400}
            />
            <div className="absolute bottom-0 bg-black/70 text-white/80 h-[40%] p-4 sm:p-6">
              <p className="text-lg sm:text-2xl text-white">Lorem ipsum dolor sit amet.</p>
              <p className="text-sm sm:text-md mt-2 sm:mt-4 line-clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sunt sapiente eligendi
                nihil doloremque magni iusto ratione ut quis dolorum? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ea sunt sapiente eligendi nihil doloremque magni iusto
                ratione ut quis dolorum?
              </p>
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="sm:mt-40 grid sm:grid-cols-2 grid-cols-2 mt-20 lg:grid-cols-4 gap-4 sm:gap-8">
          {dummy_newses.map((n, i) => (
            <NewsCard {...n} key={i} />
          ))}
        </div>

        {/* Footer link */}
        <div className="my-10 sm:my-20 flex justify-center items-center">
          <p className="text-red-600 text-xl sm:text-2xl underline">Berita Lainnya</p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
