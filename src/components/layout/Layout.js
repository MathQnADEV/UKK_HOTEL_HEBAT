import React, { useEffect, useState } from "react";
import { MENU_LIST } from "../constant";
import { useRouter } from "next/router";
import Dash from "../Dash";
import Footer from "../Footer";

const Layout = ({ children }) => {

  const [color, setColor] = useState()
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeColor)
  })

  const router = useRouter();

  const handleChangePath = (path) => {
    router.push(path);
  };

  return (
    <main className="bg-[url('../asset/img/hotelBG1.jpeg')] bg-scroll object-fill h-screen w-screen relative">
      <nav className="w-full fixed top-0 z-50">
        {/* <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-24"> */}
        <div
          className={
            color
              ? "max-w-[1240px] mx-auto px-4 flex justify-between items-center h-24 backdrop-blur-md duration-300"
              : "max-w-[1240px] mx-auto px-4 flex justify-between items-center h-24"
          }
        >
          <h1 className="font-bold md:text-4xl text-3xl sm:text-2xl text-purple-300">
            Hotel Hebat
          </h1>
          <ul className="flex text-white">
            {MENU_LIST.map((menu, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleChangePath(menu.path)}
                  className="m-4 p-2 bg-purple-400 rounded-md cursor-pointer hover:bg-purple-700 hover:text-purple-300 hover:scale-105 ease-in-out duration-300"
                >
                  {menu.menu}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <Dash />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
