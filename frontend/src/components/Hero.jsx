import React from "react";
import image from "../assets/Hero.jpg";
const Hero = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center py-5">
        <h1 className="text-xl md:text-2xl font-bold">Fund 𝕏 Ray</h1>
        <ul className="flex items-center space-x-5 text-xs md:text-base">
          <li>Features</li>
          <li>Trending</li>
          <li>Projects</li>
        </ul>
        <button className="bg-yellow-400 px-5 py-2 rounded-xl text-xs md:text-base">Register</button>
      </nav>
      <div className="h-[500px] relative">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-md relative"
        />
        
      <div className="absolute bottom-5 w-full">
        <div className=" bg-white w-11/12 xl:w-4/5 m-auto grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
        <div className=" flex flex-col space-y-2 ">
          <label htmlFor="location">Location</label>
          <input type="text" placeholder="India" className="outline-0 text-xs"/>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="property">Project Type</label>
          <input type="text" placeholder="property" className="outline-0 text-xs"/>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="price">Owner</label>
          <input type="text" placeholder="Vimal" className="outline-0 text-xs"/>
        </div>
        <div>
          <button className="bg-yellow-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full">Search</button>
        </div>
        </div>
       
      </div>
      </div>

    </div>
  );
};

export default Hero;
