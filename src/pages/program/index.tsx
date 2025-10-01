import Hero from "@/components/ui/hero";
import React from "react";

const ProgranPage = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Hero
        title="program"
        descp="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, tenetur."
        imageSrc="/image3.jpg"
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
              <tr className="bg-white text-black">
                <th className="border-2 border-red-700 px-4 py-2">
                  Nama Kegiatan <br /> (Program Kerja)
                </th>
                <th className="border-2 border-red-700 px-4 py-2">Bidang</th>
                <th className="border-2 border-red-700 px-4 py-2">
                  Pelaksanaan Kegiatan <br /> (Bulan)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}
              <tr className="bg-red-700 text-white">
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Ramadhan Berkah
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Pemas
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Maret
                </td>
              </tr>

              {/* 2 */}
              <tr className="bg-red-700 text-white">
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Ramadhan Berkah
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Pemas
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Maret
                </td>
              </tr>

              {/* 3 */}
              <tr className="bg-red-700 text-white">
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Ramadhan Berkah
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Pemas
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Maret
                </td>
              </tr>

              {/* 4 */}
              <tr className="bg-red-700 text-white">
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Ramadhan Berkah
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Pemas
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Maret
                </td>
              </tr>

              {/* 5 */}
              <tr className="bg-red-700 text-white">
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Ramadhan Berkah
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Pemas
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Maret
                </td>
              </tr>

              {/* 6 */}
              <tr className="bg-red-700 text-white">
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Ramadhan Berkah
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Pemas
                </td>
                <td className="border-x-2 border-x-red-700 border-y-2 border-y-white px-4 py-2">
                  Maret
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgranPage;
