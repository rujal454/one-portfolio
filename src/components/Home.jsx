import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left mt-12 sm:mt-3 md:mt-5 lg:mt-7">
            I'm a FrontEnd Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          A passionate Computer Science student with a strong interest in web development. Eager to translate my coding skills in to real-world solutions, I've been diving deep into front-end and back-end technologies, crafting user-friendly interfaces and dynamic web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like React, I'm excited about creating seamless online experiences.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-700 to-blue-500 cursor-pointer justify-center md:left-10 md:justify-start">

            
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-2/4 md:w-2/5 ml-4">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
