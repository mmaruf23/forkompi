"use client";

import Hero from "@/components/ui/hero";
import ImageShadowed from "@/components/ui/image_shadow";
import React, { useRef } from "react";
import { FaInstagram, FaTiktok, FaTelegramPlane, FaYoutube, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "framer-motion";

/**
 * Reusable fade-up component
 */
const FadeUpSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-svh w-full bg-white">
      {/* Hero */}
      <div className="relative">
        <Hero
          title="forkompi"
          descp="Forum Komunikasi Mahasiswa Poltekkes Kemenkes Se Indonesia."
          imageSrc="/assets/images/Home.JPG"
        />
        {/* Button at the bottom center of Hero */}{" "}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-red-700 text-white px-6 py-4 rounded-sm shadow-lg transition">
          {" "}
          <Link className="hover:scale-120 transition-transform" href="www.instagram.com">
            {" "}
            <FaInstagram size={30} />{" "}
          </Link>{" "}
          <Link className="hover:scale-120 transition-transform" href="www.tiktok.com">
            {" "}
            <FaTiktok size={25} />{" "}
          </Link>{" "}
          <Link className="hover:scale-120 transition-transform" href="www.gmail.com">
            {" "}
            <SiGmail size={30} />{" "}
          </Link>{" "}
          <Link className="hover:scale-120 transition-transform" href="www.telegram.com">
            {" "}
            <FaTelegramPlane size={30} />{" "}
          </Link>{" "}
          <Link className="hover:scale-120 transition-transform" href="www.youtube.com">
            {" "}
            <FaYoutube size={30} />{" "}
          </Link>{" "}
          <Link className="hover:scale-120 transition-transform" href="www.twitter.com">
            {" "}
            <FaXTwitter size={30} />{" "}
          </Link>{" "}
          <Link className="hover:scale-120 transition-transform" href="www.facebook.com">
            {" "}
            <FaFacebook size={30} />{" "}
          </Link>{" "}
        </div>{" "}
      </div>

      {/* Tentang Kami Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full bg-white px-6 sm:px-10 py-10 sm:py-16">
        {/* Left Text */}
        <FadeUpSection delay={0.2}>
          <div id="about" className="md:w-1/2 text-justify">
            <div className="w-32 sm:w-64 h-2 bg-red-600 mb-4"></div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-black">Tentang Kami</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
              <span className="font-semibold text-black">FORKOMPI</span> adalah Forum Komunikasi
              Mahasiswa Politeknik Kesehatan Se-Indonesia. Sejak didirikan pada tahun 2004, kami
              telah berkomitmen untuk menjadi wadah sinergi antar Poltekkes Kemenkes se-Indonesia,
              dengan tujuan utama meningkatkan kapabilitas dan revitalisasi sesuai dengan
              nilai-nilai Pancasila dan Tri Dharma perguruan tinggi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
              Di FORKOMPI, kami memahami pentingnya interaksi yang efektif antar anggota untuk
              mencapai tujuan bersama. Oleh karena itu, kami berupaya keras untuk meningkatkan
              komunikasi antar Poltekkes Kemenkes Se-Indonesia, memfasilitasi kolaborasi yang lebih
              baik dalam berbagai bidang kesehatan.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Reformasi menjadi inti dari perjalanan kami. Kami tidak hanya ingin menjadi sebuah
              forum, tetapi juga sebuah organisasi yang mampu menciptakan perubahan yang signifikan.
              Melalui reformasi terus-menerus, kami berusaha untuk memperbaiki diri, mengikuti
              perkembangan zaman, dan menjadi agen perubahan yang positif dalam lingkup Poltekkes
              Kemenkes se-Indonesia.
            </p>
          </div>
        </FadeUpSection>

        {/* Right Image */}
        <FadeUpSection delay={0.4}>
          <div className="md:w-1/2 flex justify-end pt-6 md:pt-10">
            <ImageShadowed src="/assets/images/Tentang1.JPG" value={-16} color={"red"} />
          </div>
          <div className="md:w-1/2 hidden justify-end pt-6 md:pt-20 sm:flex">
            <ImageShadowed src="/assets/images/Tentang2.JPG" value={-16} color={"yellow"} />
          </div>
        </FadeUpSection>
      </div>

      {/* Visi Forkompi */}
      <FadeUpSection delay={0.2}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full bg-white px-6 sm:px-10 py-10 sm:py-25">
          {/* Left Image */}

          <div className="md:w-1/2 flex justify-center">
            <ImageShadowed src="/assets/images/Visi.JPG" value={-16} color={"yellow"} />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2">
            <div>
              <div className="flex justify-end">
                <div className="w-32 sm:w-64 h-2 bg-red-600 mb-4"></div>
              </div>
              <h2 className="text-3xl sm:text-5xl text-right font-bold mb-6 text-black">
                Visi Forkompi
              </h2>
              <p className="text-right text-gray-700 leading-relaxed text-base sm:text-lg">
                Visi kami adalah meningkatkan sinergi kapabilitas, serta revitalisasi antar
                Poltekkes Kemenkes Se- Indonesia sesuai Pancasila dan Tri dharma perguruan tinggi.
              </p>
            </div>
          </div>
        </div>
      </FadeUpSection>

      {/* Misi Forkompi */}
      <FadeUpSection delay={0.2}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full bg-white px-6 sm:px-10 py-10 sm:py-30">
          {/* Left Text */}
          <div className="md:w-1/2">
            <div>
              <div className="w-32 sm:w-64 h-2 bg-red-600 mb-4"></div>
              <h2 className="text-3xl sm:text-5xl text-left font-bold mb-6 text-black">
                Misi Forkompi
              </h2>
              <span className="text-left text-gray-700 leading-relaxed text-base sm:text-lg">
                Misi kami adalah memberdayakan remaja untuk menjalani masa transisi mereka dengan
                sehat dan bahagia. Kami berkomitmen untuk:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Memberikan informasi yang akurat dan terpercaya.</li>
                  <li>Menyediakan dukungan untuk masalah kesehatan fisik dan mental.</li>
                  <li>Membangun komunitas yang mendukung pertumbuhan positif remaja.</li>
                </ul>
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center pt-6 md:pt-0">
            <ImageShadowed src="/assets/images/Misi.JPG" value={-16} color={"green"} />
          </div>
        </div>
      </FadeUpSection>
    </div>
  );
};

export default HomePage;
