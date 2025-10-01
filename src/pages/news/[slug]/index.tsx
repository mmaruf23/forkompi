import Hero from "@/components/ui/hero";
import NewsCard from "@/components/ui/news_card";
import { dummy_newses } from "@/lib/dummy";
import type { News } from "@/types/db";
import { formatDate } from "@/utils/time";
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
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, debitis ad. Impedit necessitatibus voluptatum blanditiis, itaque nemo voluptatem ut laudantium.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo sed reiciendis consequuntur quis voluptate magni nostrum odit nobis. Distinctio?",
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
        descp={formatDate(new Date(dummyNews.published_at))}
        imageSrc={dummyNews.thumbnail_url}
      />

      <div className="relative px-60 my-20">
        <div className="flex flex-col items-center">
          <div className="w-sm h-2.5 bg-red-700"></div>
          <h2 className="text-6xl mt-10">{dummyNews.subtitle}</h2>
        </div>
        <div className="mt-20 relative w-full h-[750px]">
          <Image
            src={dummyNews.thumbnail_url}
            alt="Image of News"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <div className="mt-4 bottom-0 left-0 flex justify-between items-center w-full">
          <div className="flex items-center gap-4 text-red-500 py-4 rounded-sm transition">
            <Link className="hover:scale-120 transition-transform" href="www.instagram.com">
              <FaInstagram size={60} />
            </Link>
            <Link className="hover:scale-120 transition-transform" href="www.tiktok.com">
              <FaTiktok size={50} />
            </Link>
            <Link className="hover:scale-120 transition-transform" href="www.gmail.com">
              <SiGmail size={60} />
            </Link>
            <Link className="hover:scale-120 transition-transform" href="www.telegram.com">
              <FaTelegramPlane size={60} />
            </Link>
            <Link className="hover:scale-120 transition-transform" href="www.youtube.com">
              <FaYoutube size={60} />
            </Link>
            <Link className="hover:scale-120 transition-transform" href="www.twitter.com">
              <FaXTwitter size={60} />
            </Link>
            <Link className="hover:scale-120 transition-transform" href="www.facebook.com">
              <FaFacebook size={60} />
            </Link>
          </div>
          <p className="text-2xl">{formatDate(new Date(dummyNews.published_at))}</p>
        </div>
        <div className="mt-20">
          {dummyNews.content.split("\n").map((c, i) => (
            <p key={i} className="text-3xl mt-10">
              {c}
            </p>
          ))}
        </div>
      </div>
      <div className="my-40 px-20">
        <div className="w-sm h-3 bg-red-700"></div>
        <h2 className="text-6xl mt-10">Kabar Berita</h2>
        <div className="mt-20 flex gap-8">
          {dummy_newses.map((n, i) => (
            <NewsCard {...n} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
