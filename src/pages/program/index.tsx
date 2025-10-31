import Hero from "@/components/ui/hero";
import React from "react";

const programs = [
  {
    title: "Program 1",
    image: "/Kegiatan1.jpg",
    desc: "Deskripsi singkat program, misalnya program ini adalah program unggulan forkompi yang dilaksanakan setiap tahunnya bla bla bla",
  },
  {
    title: "Program 2",
    image: "/Kegiatan2.jpg",
    desc: "Deskripsi singkat program, misalnya program ini adalah program unggulan forkompi yang dilaksanakan setiap tahunnya bla bla bla",
  },
  {
    title: "Program 3",
    image: "/Kegiatan3.jpg",
    desc: "Deskripsi singkat program, misalnya program ini adalah program unggulan forkompi yang dilaksanakan setiap tahunnya bla bla bla",
  },
  {
    title: "Program 4",
    image: "/Kegiatan4.jpg",
    desc: "Deskripsi singkat program, misalnya program ini adalah program unggulan forkompi yang dilaksanakan setiap tahunnya bla bla bla",
  },
  {
    title: "Program 5",
    image: "/Kegiatan5.jpg",
    desc: "Deskripsi singkat program, misalnya program ini adalah program unggulan forkompi yang dilaksanakan setiap tahunnya bla bla bla",
  },
  {
    title: "Program 6",
    image: "/Kegiatan6.jpg",
    desc: "Deskripsi singkat program, misalnya program ini adalah program unggulan forkompi yang dilaksanakan setiap tahunnya bla bla bla",
  },
];

const ProgranPage = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Hero
        title="program"
        descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, tenetur."
        imageSrc="/Program.JPG"
      />

      <div className="px-4 sm:px-14 pb-10">
        <div className="my-5 sm:my-10">
          <div className="w-32 sm:w-64 h-2 bg-red-600 mb-4"></div>
          <h2 className="text-4xl sm:text-6xl mt-6 text-black">Program Kerja Unggulan</h2>
        </div>

        {/* Table Section */}
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
          {programs.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col justify-center items-center h-50 hover:h-55 bg-center bg-cover bg-black/50 bg-blend-overlay hover:bg-black/30 transition-all relative overflow-hidden"
              style={{ backgroundImage: `url('${p.image}')` }}
            >
              <h1 className="text-white text-2xl font-bold transition-all">{p.title}</h1>
              <p className="text-white text-center px-10 text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgranPage;
