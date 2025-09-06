import Image from "next/image";
import React from "react";
import { HiShare } from "react-icons/hi";

type NewsCardProps = {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  published_at: string;
};

const NewsCard = ({ title, subtitle, content, image, published_at }: NewsCardProps) => {
  return (
    <div className="bg-red-700 w-sm rounded-br-4xl rounded-tl-4xl overflow-hidden">
      <Image className="object-cover" src={image} alt="IMAGE" width={400} height={400} />
      <div className="p-6 text-white/80 flex flex-col gap-2">
        <p className="text-3xl text-white">{title}</p>
        <p className="line-clamp-6">{subtitle}</p>
        <p className="line-clamp-2">{content}</p>
        <div className="flex-grow flex justify-between items-end pt-6">
          <HiShare className="text-white text-2xl" />
          <p>{published_at}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
