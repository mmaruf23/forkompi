"use client";

import Hero from "@/components/ui/hero";
import React, { useRef } from "react";
import { FaInstagram, FaTiktok, FaTelegramPlane, FaYoutube, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import ScrollLinked from "@/components/ui/slider";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import WilayahForkompi from "@/components/ui/wilayah";
import VideoProfile from "@/components/ui/video-profile";

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
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-green-700 text-white px-6 py-4 rounded-sm shadow-lg transition">
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

      {/* Wilayah Forkompi */}
      <WilayahForkompi />

      {/* Video Profile */}
      <VideoProfile />

      {/* Kegiatan Forkompi */}
      <FadeUpSection delay={0.2}>
        <div className="flex flex-col w-full bg-white px-6 sm:px-10 py-10 sm:py-16 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-32 sm:w-64 h-2 bg-red-600 mb-4"></div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-10 sm:mb-12 text-black text-center">
              Kegiatan Forkompi
            </h2>
          </div>

          {/* Bottom row */}
          <div className="flex w-full justify-center">
            <ScrollLinked />
          </div>
        </div>
      </FadeUpSection>
    </div>
  );
};

export default HomePage;
