import { useRouter } from "next/router";
import React from "react";

const DashAdmin = () => {
  const router = useRouter();

  const handleChangePath = (path) => {
    router.push(path);
  };

  return (
    <div className="max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center items-center">
      <h1 className="font-bold md:text-7xl text-3xl sm:text-2xl text-purple-300 mb-10">
        Halo Admin Hotel Hebat
      </h1>
      <div>
        <button
          className="bg-purple-300 text-white p-3 px-7 rounded-lg m-5 hover:bg-purple-700 hover:text-purple-300 hover:shadow-2xl hover:scale-125 ease-in-out duration-300"
          onClick={() => handleChangePath("/adminkamar")}
        >
          Bagian Kamar
        </button>
        <button
          className="bg-purple-300 text-white p-3 px-7 rounded-lg m-5 hover:bg-purple-700 hover:text-purple-300 hover:shadow-2xl hover:scale-125 ease-in-out duration-300"
          onClick={() => handleChangePath("/adminfasilitas")}
        >
          Bagian Fasilitas
        </button>
      </div>
    </div>
  );
};

export default DashAdmin;
