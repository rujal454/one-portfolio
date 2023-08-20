import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center"
    >
      <div className="flex flex-col p-4 max-w-screen-lg ">
        <div className=" text-center md:text-left  md:pt-5 md:mt-7 pb-10 mb-8 pt-7 ">
          <p className="  text-3xl sm:text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500 text-gray-30 ">
            About
          </p>
        </div>

        <p className=" sm:text-xl md:text-2xl text-gray-300  md:pt-1 md:mt-2  ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>

        <br />

        <p className="sm:text-xl md:text-2xl text-gray-300  pt-3  md:pt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p>
      </div>
    </div>
  );
};

export default About;
