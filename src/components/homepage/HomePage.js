import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const HomePage = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <form className="py-16 px-4">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Check In and Check Out
            </label>
            <Datepicker
              inputClassName={
                "w-full py-2 px-2 col-span-2 rounded-xl bg-purple-200 items-center"
              }
              separator={"to"}
              placeholder={"Check In and Check Out"}
              primaryColor={"purple"}
              value={value}
              onChange={handleValueChange}
              showShortcuts={false}
              readOnly={true}
            />
          </div>
          <div>
            <label
              for="helper-text"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Jumlah Kamar
            </label>
            <input
              type="text"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-purple-300 block w-full p-2.5 "
              placeholder="Jumlah Kamar"
            ></input>
          </div>
          <div className="flex justify-center">
            <button className="w-full bg-purple-300 rounded-xl font-medium text-lg text-white hover:bg-purple-700 hover:text-purple-300 hover:shadow-xl hover:scale-105 ease-in-out duration-300">
              PESAN
            </button>
          </div>
        </div>
      </form>
      <div>
        <h1 className="font-medium md:text-4xl text-3xl">FORM PESANAN</h1>
        <form className="p-16">
          <div className="p-2">
            <label className="pr-20">Nama Pemesan</label>
            <input
              type="text"
              placeholder="write your Name"
              className="p-2.5"
            />
          </div>
          <div className="p-2">
            <label className="pr-[155px]">Email</label>
            <input
              type="text"
              placeholder="write your Email"
              className="p-2.5"
            />
          </div>
          <div className="p-2">
            <label className="pr-[85px]">No Handphone</label>
            <input
              type="text"
              placeholder="write your Handphone"
              className="p-2.5"
            />
          </div>
          <div className="p-2">
            <label className="pr-[112px]">Nama tamu</label>
            <input
              type="text"
              placeholder="write your tamu name"
              className="p-2.5"
            />
          </div>
          <div className="p-2">
            <label className="pr-[107px]">Tipe Kamar</label>
            <select id="countries" className="p-2.5 text-gray-400">
              <option selected>Pilih Tipe Kamar</option>
              <option value="US">Standard Room</option>
              <option value="CA">Superior Room</option>
              <option value="FR">Deluxe Room</option>
            </select>
          </div>
          <button className="w-full flex justify-center items-center p-4 mt-4">
            <div className="p-4 bg-purple-300 rounded-xl text-white hover:bg-purple-600 hover:text-purple-300 hover:scale-105 hover:shadow-xl ease-in-out duration-300">Konfirmasi Pesanan</div>
          </button>
        </form>
      </div>
      <div className="pt-[1rem] flex flex-col justify-center items-center">
        <h1 className="md:text-4xl text-3xl mb-5">TENTANG KAMI</h1>
        <p>
          Lepaskan diri Anda ke Hotel Hebat, dikelilingi oleh keindahan pegunungan yang indah, danau, dan bawah menghijau.
          Nikmati sore yang hangat dengan berenang di kolam renang dengan pemandangan matahari terbenam yang memukau,
          Kid's Club yang luas menawarkan beragam fasilitas dan kegiatan anak-anak yang akan melengkapi kenyamanan keluarga.
          Convention Center kami dilengkapi pelayanan lengkap dengan ruang konvensi terbesar di Bandung mampu mengakomodasi
          hingga 3.000 delegasi. Manfaatkan ruang penyelenggara konvensi M.I.C.E ataupun mewujudkan acara pernikahan adat yang mewah.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
