import React, { useState } from 'react';
import page from "../assets/login.jpg";
import LoginPage from './loginc';
import Login from './login'; // Imported Login component

const Campaign = () => {
  const [redirect, setRedirect] = useState(false);
  const [pageToRedirect, setPageToRedirect] = useState(null);

  const handleDonateClick = () => {
    setPageToRedirect('donate');
    setRedirect(true);
  };

  const handleCollaborateClick = () => {
    setPageToRedirect('collaborate');
    setRedirect(true);
  };

  if (redirect) {
    if (pageToRedirect === 'donate') {
      return <LoginPage />;
    } else if (pageToRedirect === 'collaborate') {
      return <Login />; // Using the Login component here
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-red"
      style={{ backgroundImage: `url(${page})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="text-7xl font-bold text-center text-[rgb(247,255,230)]">
        DO YOU WANT TO DONATE OR COLLABORATE WITH US
      </div>
      
      <button 
        className="font-bold py-4 px-6 w-1/3 text-xl rounded-lg mt-16 text-[rgb(71,106,43)] bg-[rgb(247,255,230)]"
        onClick={handleDonateClick}
      >
        Donate
      </button>
      
      <button 
        className="font-bold py-4 px-6 w-1/3 text-xl rounded-lg mt-8 text-[rgb(71,106,43)] bg-[rgb(247,255,230)]"
        onClick={handleCollaborateClick}
      >
        Collaborate
      </button>
      
    </div>
  );
}

export default Campaign;
