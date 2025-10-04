import type { NewsResponse } from "@/types/response";
import { formatDate } from "@/utils/time";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiShare } from "react-icons/hi";

const NewsCard = ({
  title,
  subtitle,
  content,
  thumbnail_url,
  slug,
  published_at,
}: NewsResponse) => {
  return (
    <div
      className="bg-red-700 
      w-full sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] 
      rounded-br-4xl rounded-tl-4xl overflow-hidden shadow-lg"
    >
      {/* Image with fixed ratio for consistency */}

      <Link href={`/news/${slug}`}>
        <div className="w-full aspect-[4/3] relative">
          <Image
            src={thumbnail_url}
            alt="IMAGE"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 320px, 400px"
          />
        </div>
      </Link>

      <div className="p-4 md:p-5 lg:p-6 text-white/80 flex flex-col gap-3">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white line-clamp-2">
          {title}
        </p>
        <p className="text-sm md:text-base lg:text-lg line-clamp-4">{subtitle}</p>
        <p className="text-sm md:text-base lg:text-lg line-clamp-2">{content}</p>

        <div className="flex-grow flex justify-between items-end pt-4 text-xs sm:text-sm md:text-base">
          <HiShare className="text-white text-lg md:text-xl lg:text-2xl" />
          <p>{formatDate(new Date(published_at))}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
