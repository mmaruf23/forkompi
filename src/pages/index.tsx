import Hero from "@/components/ui/hero";
import ImageShadowed from "@/components/ui/image_shadow";
import React from "react";
import imagePath from "@/static/hero-background-1.png";
import { FaInstagram, FaTiktok, FaTelegramPlane, FaYoutube, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/ui/footer";

const HomePage = () => {
  return (
    <div className="h-[200svh] w-full">
      {/* Hero */}
      <div className="relative">
        <Hero
          title="forkompi"
          descp="Forum Komunikasi Mahasiswa Poltekkes Kemenkes Se Indonesia."
        />

        {/* Button at the bottom center of Hero */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-red-700 text-white px-6 py-4 rounded-sm shadow-lg transition">
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
      </div>

      {/* Tentang Kami Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full h-auto bg-white px-10 py-16">
        {/* Left Text */}
        <div className="md:w-1/2">
          <div className="w-64 h-2 bg-red-600 mb-4"></div>
          <h2 className="text-5xl font-bold mb-7 text-black">Tentang Kami</h2>
          <p className=" text-gray-700 leading-relaxed mb-4 text-lg">
            <span className="font-semibold text-black">FORKOMPI</span> adalah Forum Komunikasi
            Mahasiswa Politeknik Kesehatan Se-Indonesia. Sejak didirikan pada tahun 2004, kami telah
            berkomitmen untuk menjadi wadah sinergi antar Poltekkes Kemenkes se-Indonesia, dengan
            tujuan utama meningkatkan kapabilitas dan revitalisasi sesuai dengan nilai-nilai
            Pancasila dan Tri Dharma perguruan tinggi.
          </p>
          <p className=" text-gray-700 leading-relaxed mb-4 text-lg">
            Di FORKOMPI, kami memahami pentingnya interaksi yang efektif antar anggota untuk
            mencapai tujuan bersama. Oleh karena itu, kami berupaya keras untuk meningkatkan
            komunikasi antar Poltekkes Kemenkes Se-Indonesia, memfasilitasi kolaborasi yang lebih
            baik dalam berbagai bidang kesehatan.
          </p>
          <p className=" text-gray-700 leading-relaxed text-lg w-full">
            Reformasi menjadi inti dari perjalanan kami. Kami tidak hanya ingin menjadi sebuah
            forum, tetapi juga sebuah organisasi yang mampu menciptakan perubahan yang signifikan.
            Melalui reformasi terus-menerus, kami berusaha untuk memperbaiki diri, mengikuti
            perkembangan zaman, dan menjadi agen perubahan yang positif dalam lingkup Poltekkes
            Kemenkes se-Indonesia.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center pt-10">
          <ImageShadowed src={imagePath} value={-16} width={300} color={"red"} height={250} />
        </div>
      </div>

      {/** Visi Forkompi */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full h-auto bg-white px-10 py-16">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <ImageShadowed src={imagePath} value={-16} width={300} color={"yellow"} height={250} />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2">
          <div>
            <div className="flex justify-end">
              <div className="w-64 h-2 bg-red-600 mb-4"></div>
            </div>
            <h2 className="text-right text-5xl font-bold mb-7 text-black">Visi Forkompi</h2>
            <p className="text-right text-gray-700 leading-relaxed mb-4 text-lg">
              Visi kami adalah meningkatkan sinergi kapabilitas, serta revitalisasi antar Poltekkes
              Kemenkes Se- Indonesia sesuai Pancasila dan Tri dharma perguruan tinggi.
            </p>
          </div>
        </div>
      </div>

      {/** Misi Forkompi */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full h-auto bg-white px-10 py-16">
        {/* Left Text */}
        <div className="md:w-1/2">
          <div>
            <div className="w-64 h-2 bg-red-600 mb-4"></div>
            <h2 className="text-left text-5xl font-bold mb-7 text-black">Misi Forkompi</h2>
            <span className="text-left text-gray-700 leading-relaxed mb-4 text-lg">
              Misi kami adalah memberdayakan remaja untuk menjalani masa transisi mereka dengan
              sehat dan bahagia. Kami berkomitmen untuk:
              <ul className="list-disc list-inside">
                <li>Memberikan informasi yang akurat dan terpercaya.</li>
                <li>Menyediakan dukungan untuk masalah kesehatan fisik dan mental.</li>
                <li>Membangun komunitas yang mendukung pertumbuhan positif remaja.</li>
              </ul>
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <ImageShadowed src={imagePath} value={-16} width={300} color={"green"} height={250} />
        </div>
      </div>

      {/** Kegiatan Forkompi */}
      <div className="flex flex-col w-full h-auto bg-white px-10 py-16 justify-center">
        <div className="flex flex-col items-center">
          <div className="w-64 h-2 bg-red-600 mb-4"></div>
          <h2 className="text-5xl font-bold mb-12 text-black text-center">Kegiatan Forkompi</h2>
        </div>

        {/* Top row */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <Image
                src="/hero-background-1.png"
                alt="Gallery 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/hero-background-1.png"
                alt="Gallery 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/hero-background-1.png"
                alt="Gallery 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <Image
                src="/hero-background-1.png"
                alt="Gallery 1"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="col-span-1">
              <Image
                src="/hero-background-1.png"
                alt="Gallery 2"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
