// eslint-disable-next-line no-unused-vars
import React from 'react'
import { GiGearStickPattern } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { MdLocalMall } from "react-icons/md";
import { MdLocalFlorist } from "react-icons/md";

const About = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      <div className="flex md:space-x-10 space-x-4">
        <div className="mt-10 space-y-4 ">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <GiGearStickPattern size={"1.8rem"} />
            <h1 className="text-xl font-bold">Hardware project</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <FaLaptopCode size={"1.8rem"} />
            <h1 className="text-xl font-bold">Software Project</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdLocalMall size={"1.8rem"} />
            <h1 className="text-xl font-bold">Search Nearby PRs.</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdLocalFlorist size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good Services</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-1/2 space-y-5">
        <h1 className="text-6xl font-bold">
          Know <span className="text-yellow-400">About us</span>{" "}
        </h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          consequuntur iusto voluptas dolorem possimus, atque eum omnis dolores
          cumque autem saepe molestias sapiente ipsa facere suscipit adipisci,
          ab quasi repudiandae doloremque doloribus? Delectus, dolorem quaerat.
        </p>
        <button className="px-5 py-2 rounded-md bg-yellow-400">
          Read more
        </button>
      </div>
    </div>
  );
}

export default About