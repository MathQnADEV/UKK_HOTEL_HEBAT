import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-gray-300">
            <div className="grid lg:grid-cols-3 gap-8">
                <div>
                    <h1 className="w-full mb-2 text-3xl text-purple-400">Hotel Hebat</h1>
                    <p>
                        Lepaskan diri Anda ke Hotel Hebat, dikelilingi oleh keindahan pegunungan yang indah, danau, dan bawah menghijau.
                        Nikmati sore yang hangat dengan berenang di kolam renang dengan pemandangan matahari terbenam yang memukau.
                    </p>
                    <div className="flex justify-start items-center my-6 gap-2">
                        <FaGithubSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                        <h6 className="font-medium">Rooms</h6>
                        <ul>
                            <li className="py-2 text-sm">Tipe Superior</li>
                            <li className="py-2 text-sm">Tipe Deluxe</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium">Fasilitas</h6>
                        <ul>
                            <li className="py-2 text-sm">Swimming Pool</li>
                            <li className="py-2 text-sm">Gym</li>
                            <li className="py-2 text-sm">Kid's Corner</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-medium">Fasilitas</h6>
                        <ul>
                            <li className="py-2 text-sm">Breakfast</li>
                            <li className="py-2 text-sm">Spa</li>
                            <li className="py-2 text-sm">Outdoor</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <h1>Copyrgith ©2023 MathQnADEV</h1>
            </div>
        </div>
    );
};

export default Footer;
