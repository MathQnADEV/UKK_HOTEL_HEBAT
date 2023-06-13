import React from 'react'
import Image from 'next/image'
import StandarRoom from '@/asset/img/standar.webp'

const Kamar = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-1 bg-white">
      <div className="py-[4rem] font-bold md:text-4xl text-xl">
        <h1>Tipe Kamar</h1>
      </div>
      <div className="pb-[4rem] grid grid-cols-1 gap-8">
        <div className="w-full h-[100%] shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
          <Image src={StandarRoom} className="object-cover w-full h-[75%]" />
          <h1 className="pt-2 font-bold md:text-3xl text-2xl">Tipe Superior</h1>
          <p>Fasilitas</p>
          <p>Kamar Berukuran 32 m2</p>
          <p>Kamar mandi shower</p>
          <p>Coffe Maker</p>
          <p>AC</p>
          <p>LED TV 40 Inch</p>
        </div>
        <div className="w-full h-[100%] shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
          <Image src={StandarRoom} className="object-cover w-full h-[75%]" />
          <h1 className="pt-2 font-bold md:text-3xl text-2xl">Tipe Deluxe</h1>
          <p>Fasilitas</p>
          <p>Kamar Berukuran 45 m2</p>
          <p>Kamar mandi shower dan Bath Tub</p>
          <p>Coffe Maker</p>
          <p>Sofa</p>
          <p>LED TV 40 Inch</p>
          <p>AC</p>
        </div>
      </div>
    </div>
  )
}

export default Kamar