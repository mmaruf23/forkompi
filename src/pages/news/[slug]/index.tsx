import Hero from "@/components/ui/hero";
import NewsCard from "@/components/ui/news_card";
import NewsCardSkeleton from "@/components/ui/news_card_skeleton";
import { usePostDispatch, usePostState } from "@/hooks";
import { fetchAllNews, fetchNewsBySlug } from "@/services/client.service";
import type { NewsResponse } from "@/types/response";
import { formatDate } from "@/utils/time";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const NewsDetailPage = () => {
  const router = useRouter();

  const [newsResponse, setNewsResponse] = useState<NewsResponse | undefined>(undefined);
  const { posts } = usePostState();
  const dispatch = usePostDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const result = await fetchAllNews();
        if (result.success) dispatch({ type: "FETCH_SUCCESS", payload: result.data! });
      } catch (e) {
        console.error(e);
        dispatch({ type: "FETCH_ERROR", payload: "Gagal memuat postingan." });
      }
    };

    if (posts.length === 0) {
      fetchData();
    }

    const slug = router.query.slug as string;
    setNewsResponse(undefined);
    const news = posts.find((p) => p.slug === slug);
    if (news) {
      setNewsResponse(news);
    } else {
      fetchNewsBySlug(slug).then((res) => {
        if (res.success) {
          setNewsResponse(res.data);
        }
      });
    }
  }, [dispatch, posts, posts.length, router.query.slug]);
  return (
    <div className="min-h-[200svh] w-full bg-white text-black">
      {newsResponse ? (
        <Hero
          title={newsResponse.title}
          descp={formatDate(new Date(newsResponse.published_at))}
          imageSrc={newsResponse.thumbnail_url}
        />
      ) : (
        // todo : bikin hero skeleton kalau mau
        <Hero
          title={"News"}
          descp={formatDate(new Date(2025, 1, 8))}
          imageSrc={"/assets/images/Home.JPG"}
        />
      )}

      <div className="relative px-60 my-20">
        <div className="flex flex-col items-center">
          <div className="w-sm h-2.5 bg-red-700"></div>
          <h2 className="text-6xl mt-10">{newsResponse?.subtitle || "---"}</h2>
        </div>
        <div className="mt-20 relative w-full aspect-[5/3]">
          {newsResponse ? (
            <Image
              src={newsResponse.thumbnail_url}
              alt="Image of News"
              fill
              className="object-cover object-bottom"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-md animate-pulse"></div>
          )}
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
          {newsResponse && (
            <p className="text-2xl">{formatDate(new Date(newsResponse.published_at))}</p>
          )}
        </div>
        <div className="mt-20">
          {newsResponse?.content.split("\n").map((c, i) => (
            <p key={i} className="text-3xl mt-10">
              {c}
            </p>
          ))}
        </div>
      </div>
      <div className="my-40 px-20">
        <div className="w-sm h-3 bg-red-700"></div>
        <h2 className="text-6xl mt-10">Kabar Berita</h2>
        <div className="mt-20 flex flex-wrap gap-8">
          {posts.length
            ? posts.map((n, i) => <NewsCard {...n} key={i} />)
            : Array(4)
                .fill(null)
                .map((v, i) => <NewsCardSkeleton key={i} />)}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
