import Hero from "@/components/ui/hero";
import type { News } from "@/types/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const dummyNews: News = {
  id: 1,
  title: "Dummy News",
  subtitle: "Dummy subtitle",
  slug: "dummy-slug",
  thumbnail_url: "/news_image_background2.jpg",
  content:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, debitis ad. Impedit necessitatibus voluptatum blanditiis, itaque nemo voluptatem ut laudantium.",
  author_id: 1,
  status: "published",
  published_at: "2025-09-30T13:58:27.579Z",
  created_at: "2025-09-30T13:58:27.579Z",
  updated_at: "2025-09-30T13:58:27.579Z",
};

const NewsDetailPage = () => {
  return (
    <div className="min-h-[200svh] w-full">
      <Hero
        title={dummyNews.title}
        descp={new Date(dummyNews.published_at).toLocaleDateString("id-ID")} // todo : ubah format tanggal ex: Selasa, 30 September 2025
        imageSrc={dummyNews.thumbnail_url}
      />

      <div className="my-20 flex flex-col items-center px-60">
        <div className="w-sm h-2.5 bg-red-700"></div>
        <h2 className="text-6xl mt-10">{dummyNews.subtitle}</h2>
        <div className="mt-10 relative w-full h-[700px]">
          <Image src={dummyNews.thumbnail_url} alt="Image of News" fill className="" />
          <div className="absolute bottom-0 left-0 translate-y-full flex justify-between w-full">
            <div className="flex items-center gap-4 text-red-500 py-4 rounded-sm transition">
              <Link className="hover:scale-120 transition-transform" href="www.instagram.com">
                <FaInstagram size={30} />
              </Link>
              <Link className="hover:scale-120 transition-transform" href="www.tiktok.com">
                <FaTiktok size={25} />
              </Link>
              <Link className="hover:scale-120 transition-transform" href="www.gmail.com">
                <SiGmail size={30} />
              </Link>
              <Link className="hover:scale-120 transition-transform" href="www.telegram.com">
                <FaTelegramPlane size={30} />
              </Link>
              <Link className="hover:scale-120 transition-transform" href="www.youtube.com">
                <FaYoutube size={30} />
              </Link>
              <Link className="hover:scale-120 transition-transform" href="www.twitter.com">
                <FaXTwitter size={30} />
              </Link>
              <Link className="hover:scale-120 transition-transform" href="www.facebook.com">
                <FaFacebook size={30} />
              </Link>
            </div>
            <div className="flex justify-end items-center">
              {new Date(dummyNews.published_at).toLocaleDateString("id-ID")}
              {/* // todo : ubah format tanggal ex: Selasa, 30 September 2025 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
