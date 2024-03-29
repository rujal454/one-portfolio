import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h- h-fullscreen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col pt-14 max-w-screen-lg mx-auto w-full text-white text-center md:text-left mb-10 ">
        <div className="pb-5 md:pt-10 md:mt-7  ">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
          <p className="py-4 pb-3 ">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 md:pt-10 md:mt-15"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-gray-800 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;