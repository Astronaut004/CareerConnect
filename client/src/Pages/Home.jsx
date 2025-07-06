import React from 'react'

const Home = () => {
  return (
    <div className="w-full h-screen bg-slate-800 overflow-x-hidden flex">
      {/* Left Side */}
      <div className="h-full w-1/2 flex justify-center items-center">
        <div className="w-3/4">
          <img src="/images/1.png" alt="Job Search" className="rounded-md shadow-lg mb-6" />
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
            Apply now to get your <span className="text-yellow-400">Dream Job</span>
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-blue-500 h-full w-1/2 flex flex-col justify-center items-center text-center space-y-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Welcome to <span className="text-yellow-300">Jobify</span>
        </h1>
        <p className="text-lg text-white opacity-90 px-4">
          Find your dream job or hire the best talents with us.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Login
          </button>
          <button className="bg-yellow-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-yellow-500 transition">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
