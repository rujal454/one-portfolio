import React from "react";
import page from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fullscreen text-red"
      style={{ backgroundImage: `url(${page})`, backgroundSize: 'cover' }}
    >
      <div className="flex flex-col pt-14 max-w-screen-lg mx-auto text-red h-screen text-center md:text-left mb-10">
        <div className="pb-5 md:pt-10 md:mt-7">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500 text-[rgb(71,106,43)]">
            Contact Us
          </p>
          <p className="py-4 pb-3 text-[rgb(71,106,43)]">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/navvepwa"
            method="POST"
            className="flex flex-col w-full md:w-1/2 md:pt-10 md:mt-15 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-[rgb(71,106,43)] rounded-md text-red focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-[rgb(71,106,43)] rounded-md text-red focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2  border-[rgb(71,106,43)] rounded-md text-red focus:outline-none"
            ></textarea>
            <button className="text-red bg-[rgb(71,106,43)] w-1/2 mx-auto mt-8">
                SUBMIT
              </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
