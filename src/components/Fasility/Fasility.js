import React from "react";
import KolamRenang from "@/asset/img/kolamRenang.jpeg";
import Gym from '@/asset/img/gym.jpeg'
import kidsCorner from '@/asset/img/kidsCorner.png'
import breakfast from '@/asset/img/breakFast.jpeg'
import spa from '@/asset/img/spa.jpeg'
import outdoor from '@/asset/img/outdoor.jpeg'
import Image from "next/image";

const Fasility = () => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-1 bg-white">
            <div className="py-[4rem] font-bold md:text-4xl text-xl">
                <h1>Fasilitas</h1>
            </div>
            <div className="pb-[4rem] grid grid-cols-3 gap-8">
                <div className="w-full shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
                    <Image src={KolamRenang} className="w-full h-[80%]"/>
                    <p className="pt-2 font-bold md:text-xl text-lg">Swimming Pool</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="w-full shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
                    <Image src={Gym} className="w-full h-[80%]" />
                    <p className="pt-2 font-bold md:text-xl text-lg">Gym</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="w-full shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
                    <Image src={kidsCorner} className="w-full h-[80%]" />
                    <p className="pt-2 font-bold md:text-xl text-lg">Kid's Corner</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="w-full shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
                    <Image src={breakfast} className="w-full h-[80%]" />
                    <p className="pt-2 font-bold md:text-xl text-lg">Breakfast</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="w-full shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
                    <Image src={spa} className="w-full h-[80%]" />
                    <p className="pt-2 font-bold md:text-xl text-lg">Spa</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="w-full shadow-xl rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer">
                    <Image src={outdoor} className="w-full h-[80%]" />
                    <p className="pt-2 font-bold md:text-xl text-lg">Outdoor</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
        </div>
    );
};

export default Fasility;
