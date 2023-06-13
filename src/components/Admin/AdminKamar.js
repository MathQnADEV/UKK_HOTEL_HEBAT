import React from "react";
import { JUMLAH_KAMAR } from "../constant";

const AdminKamar = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4">
      <div className="flex flex-col h-screen gap-5">
        <div className="mx-auto w-full h-[11%] shadow-md rounded p-8 mt-[110px] mb-10">
          <h1 className="md:text-7xl sm:text-5xl text-6xl font-bold py-6 text-white">
            Edit Jumlah Kamar
          </h1>
        </div>
        <div className="bg-white mx-auto w-full h-auto rounded-xl">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 mt-3">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Tipe Kamar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jumlah Kamar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {JUMLAH_KAMAR.map((name, index) => {
                  return (
                    <tr class="bg-white border-b" key={index}>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {name.TipeKamar}
                      </td>
                          <td class="px-6 py-4">{name.JumlahKamar}</td>
                          <td class="px-6 py-4">{name.Aksi}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminKamar;
