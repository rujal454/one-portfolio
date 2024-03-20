import React from 'react';
import page from "../assets/main2.jpg";

const Home = () => {
  return (
    <div className='flex h-screen relative' style={{ backgroundImage: `url(${page})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='absolute inset-0 bg- ml-10 h-80 w-2/6 mt-40 border-8 border-[rgb(71,106,43)] bg-[rgb(247,255,230)]' >
        <div className='text-[rgb(71,106,43)] font-bold text-2xl font-spacing-tight mt-16 ml-8'>
     
      
        Our Mission is to recycle medicines, thereby redying the medical waste and at the same time reducing the medical costs incurred by the under privileged community
        </div>
      </div>
      <div className='bg-transparent absolute left-40 h-1/2 w-3/4 mt-36  shadow-lg '>
        <div className='text-xl text-end text-[rgb(71,106,43)] font-semibold mt-20 mr-80'>
          OUR STORY
        </div>
        <div className='absolute left-96   font-' >We often are left over with surplus medicines. Many a times, we do not consume all the medicines from a bottle or a strip and then are faced with a dilemma as to what to do with them. On the other hand there are several people who are in need of such expensive medicines in the course of their treatment, but cant afford to buy these.
          <br></br> <br></br> ShareMeds was brainchild of three young girls: Rhea, Rujal and Diya. They understood the dilemma faced by those who had surplus medicines as well as those who are medicine deficit. They devised a technique to bridge the gap -- they would collect surplus and donate to the deficit areas.</div>
      </div>
    </div>
  );
};

export default Home;
