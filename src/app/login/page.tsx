import React from 'react';
import FilterSection from '../filter/page';
import Image from 'next/image';
import icon from '../Images/icons.png';

function Login() {
  return (
    <>
    <div>

    <FilterSection
        textTitle="My Account"
        textNavigation="Home . Pages"
        pageName=" My Account"
        className="hidden"
      />
    </div>
      

      <div className="flex justify-center items-center  py-10">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-4xl font-bold text-center mb-4">Login</h2>
          <p className="text-gray-600 text-center pb-6">Please login using account details below</p>
          <form className="space-y-4">
            {/* Username Input */}
            <div className="space-y-1">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Create Account Prompt */}
            <div className="text-center text-gray-600 mt-4">
              <span>
                Don not have an account?{' '}
                <a href="#" className="text-color hover:underline">
                  Create one
                </a>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-color text-white font-semibold rounded-lg hover:opacity-90 mt-6"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Brand Icons Section */}
      <div className="flex justify-center items-center mt-14">
        <Image
          src={icon}
          alt="brands-img"
          width={904}
          height={93}
          className="cursor-pointer"
        />
      </div>
    </>
  );
}

export default Login;
