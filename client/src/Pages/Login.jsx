import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  
  const authVerify = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const payload = {
      email: mail,
      password: pass,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });
      if(!response.ok) {
        throw new Error("Failed to register");
      }
      const data = await response.json();
      // console.log(`Login successful ${data.user.email}`);
      // console.log(`Login successful ${data.user.id} ${data.user.name} ${data.user.email}`);
      // console.log(`Login successful ${data.token}`);
      // console.log(`Login successful ${data.email}`);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      console.log("Login successful", JSON.stringify(data.user));
      navigate("/dashboard"); 
    }
    catch (err) {
      console.log(`login failed ${err}`);      
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Login to your Jobify account
        </p>

        {/* Form */}
        <form onSubmit={authVerify}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value = {mail}
              onChange={(e)=>setMail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value = {pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Login   
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don’t have an account?</span>{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
