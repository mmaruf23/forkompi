"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type WilayahKey = "Wilayah I" | "Wilayah II" | "Wilayah III" | "Wilayah IV" | "Wilayah V";

const dataWilayah: Record<WilayahKey, { logo: string; desc: string }[]> = {
  "Wilayah I": [
    { logo: "/assets/images/w1-1.png", desc: "Poltekkes Kemenkes Palembang" },
    { logo: "/assets/images/w1-2.png", desc: "Poltekkes Kemenkes Padang" },
    { logo: "/assets/images/w1-3.png", desc: "Poltekkes Kemenkes Medan" },
    { logo: "/assets/images/w1-4.png", desc: "Poltekkes Kemenkes Aceh" },
    { logo: "/assets/images/w1-5.png", desc: "Poltekkes Kemenkes Bengkulu" },
    { logo: "/assets/images/w1-6.png", desc: "Poltekkes Kemenkes Tanjung Pinang" },
    { logo: "/assets/images/w1-7.png", desc: "Poltekkes Kemenkes Riau" },
    { logo: "/assets/images/w1-8.png", desc: "Poltekkes Kemenkes Jambi" },
    { logo: "/assets/images/w1-9.png", desc: "Poltekkes Kemenkes Tanjung Karang" },
    { logo: "/assets/images/w1-10.png", desc: "Poltekkes Kemenkes Pangkal Pinang" },
  ],
  "Wilayah II": [
    { logo: "/assets/images/w2-1.png", desc: "Poltekkes Kemenkes Jakarta I" },
    { logo: "/assets/images/w2-2.png", desc: "Poltekkes Kemenkes Jakarta II" },
    { logo: "/assets/images/w2-3.png", desc: "Poltekkes Kemenkes Jakarta III" },
    { logo: "/assets/images/w2-4.png", desc: "Poltekkes Kemenkes Banten" },
    { logo: "/assets/images/w2-5.png", desc: "Poltekkes Kemenkes Tasikmalaya" },
    { logo: "/assets/images/w2-6.jpeg", desc: "Poltekkes Kemenkes Bandung" },
    { logo: "/assets/images/w2-7.jpeg", desc: "Poltekkes Kemenkes Semarang" },
    { logo: "/assets/images/w2-8.jpg", desc: "Poltekkes Kemenkes Surakarta" },
    { logo: "/assets/images/w2-9.jpg", desc: "Poltekkes Kemenkes Yogyakarta" },
  ],
  "Wilayah III": [
    { logo: "/assets/images/w3-1.png", desc: "Poltekkes Kemenkes Malang" },
    { logo: "/assets/images/w3-2.png", desc: "Poltekkes Kemenkes Surabaya" },
    { logo: "/assets/images/w3-3.jpg", desc: "Poltekkes Kemenkes Denpasar" },
    { logo: "/assets/images/w3-4.png", desc: "Poltekkes Kemenkes Mataram" },
    { logo: "/assets/images/w3-5.png", desc: "Poltekkes Kemenkes Kupang" },
  ],
  "Wilayah IV": [
    { logo: "/assets/images/w4-1.jpg", desc: "Poltekkes Kemenkes Kaltim" },
    { logo: "/assets/images/w4-2.jpg", desc: "Poltekkes Kemenkes Pontianak" },
    { logo: "/assets/images/w4-3.png", desc: "Poltekkes Kemenkes Palangkaraya" },
    { logo: "/assets/images/w4-4.jpg", desc: "Poltekkes Kemenkes Banjarmasin" },
  ],
  "Wilayah V": [
    { logo: "/assets/images/w5-1.png", desc: "Poltekkes Kemenkes Makassar" },
    { logo: "/assets/images/w5-2.png", desc: "Poltekkes Kemenkes Palu" },
    { logo: "/assets/images/w5-3.png", desc: "Poltekkes Kemenkes Jayapura" },
    { logo: "/assets/images/w5-4.png", desc: "Poltekkes Kemenkes Mamuju" },
    { logo: "/assets/images/w5-5.png", desc: "Poltekkes Kemenkes Manado" },
    { logo: "/assets/images/w5-6.jpeg", desc: "Poltekkes Kemenkes Ternate" },
    { logo: "/assets/images/w5-7.png", desc: "Poltekkes Kemenkes Kendari" },
    { logo: "/assets/images/w5-8.jpg", desc: "Poltekkes Kemenkes Gorontalo" },
    { logo: "/assets/images/w5-9.webp", desc: "Poltekkes Kemenkes Sorong" },
    { logo: "/assets/images/w5-10.jpg", desc: "Poltekkes Kemenkes Maluku" },
  ],
};

export default function WilayahForkompi() {
  const [selected, setSelected] = useState<WilayahKey>("Wilayah I");

  return (
    <section
      className="bg-gray-100 rounded-tr-3xl rounded-bl-3xl p-6 sm:p-10 relative overflow-hidden 
    mt-10 mb-10 
    sm:shadow-[20px_20px_0_0_#b91c1c] sm:mr-20"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-3">
        Wilayah Forkompi
      </h2>
      <div className="h-2 sm:h-3 bg-red-600 w-32 sm:w-40 mx-auto mb-8 rounded-full"></div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Logo Area */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 place-items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="contents"
            >
              {dataWilayah[selected].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center bg-white rounded-xl shadow p-4 sm:p-5 w-full max-w-[160px]"
                >
                  <div className="w-20 h-20 flex items-center justify-center mb-2">
                    <Image
                      src={item.logo}
                      alt={item.desc}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-black">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sidebar Wilayah */}
        <div className="flex flex-wrap lg:flex-col justify-center items-center gap-3">
          {Object.keys(dataWilayah).map((wil) => (
            <button
              key={wil}
              onClick={() => setSelected(wil as WilayahKey)}
              className={`px-5 py-2 rounded-full font-semibold transition text-sm sm:text-base ${
                selected === wil
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              {wil}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
