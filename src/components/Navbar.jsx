import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import LoginPage from "./loginc"; 

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false); 

  
  const toggleLoginPage = () => {
    setShowLoginPage(!showLoginPage);
    setNav(false); 
  };

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About Us",
    },
    {
      id: 3,
      link: "Login",
    },
    {
      id: 4,
      link: "Our Campaign",
    },
    {
      id: 5,
      link: "contact",
    },
    {
     
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[rgb(71,106,43)] bg-transparent fixed z-50">
      <div>
        <h1 className="text-4xl font-signature ml-2 text-gray-375 "></h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, onClick }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-#F5FFE4 hover:scale-105 duration-200"
          >
            {onClick ? (
              <span onClick={onClick}>{link}</span>
            ) : (
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[rgb(71,106,43)] md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
          {links.map(({ id, link, onClick }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {onClick ? (
                <span onClick={onClick}>{link}</span>
              ) : (
                <Link 
                  onClick={() => setNav(false)} // Close the navbar when navigating to other pages
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Render LoginPage if showLoginPage is true */}
      {showLoginPage && <LoginPage />}
    </div>
  );
};

export default NavBar;
