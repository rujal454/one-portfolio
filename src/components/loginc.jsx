import React from 'react';
import page from "../assets/login1.jpg";
function LoginPage() {
  return (
    <div className="flex justify-start items-center h-screen bg-gray-200" style={{ backgroundImage: `url(${page})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white shadow-md rounded-lg p-20  max-w-sm w-full" style={{ marginLeft: '96px' }}>
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-center"> {/* Centering the button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
