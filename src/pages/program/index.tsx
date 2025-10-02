import Hero from "@/components/ui/hero";
import React from "react";

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
          <h2 className="text-4xl sm:text-6xl mt-6 text-black">Program Kerja Forkompi</h2>
        </div>
        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="border border-white px-4 py-2">
                  Nama Kegiatan <br /> (Program Kerja)
                </th>
                <th className="border border-white px-4 py-2">Bidang</th>
                <th className="border border-white px-4 py-2">
                  Pelaksanaan Kegiatan <br /> (Bulan)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-700 text-white">
                <td className="border border-white px-4 py-2">Ramadhan Berkah</td>
                <td className="border border-white px-4 py-2">Pemas</td>
                <td className="border border-white px-4 py-2">Maret</td>
              </tr>
              {[...Array(7)].map((_, i) => (
                <tr key={i} className="bg-red-700 text-white">
                  <td className="border border-white px-4 py-6"></td>
                  <td className="border border-white px-4 py-6"></td>
                  <td className="border border-white px-4 py-6"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgranPage;
