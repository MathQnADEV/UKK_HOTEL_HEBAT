import React from "react";
import Typed from "react-typed";

const Dash = () => {
  return (
    <div className="max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center text-center">
      <p className="text-purple-300 font-bold p2">
        STAY VACATION WITH BEST HOTEL
      </p>
      <h1 className="md:text-7xl sm:text-5xl text-6xl font-bold py-6 text-white">
        UNWIND IN STYLE
      </h1>
      <div className="flex justify-center items-center">
        <p className="md:text-4xl sm:text-2xl text-3xl font-bold py-2 text-white">
          Best Hotel
        </p>
        <Typed
          className="text-white ml-2 md:text-4xl sm:text-2xl text-3xl font-bold"
          strings={["Bliss", "Experience"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </div>
  );
};

export default Dash;
