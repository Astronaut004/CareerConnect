import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userstore"; 
const Register = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
 const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);
  
  const authHandle = async (e) => {
    e.preventDefault(); // Prevent page reload

    const payload = {
      name: name,
      email: mail,
      password: pass,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }
      const data = await response.json();

     setUser(data.user.id, data.token); // Store user ID and token in Zustand store


      console.log(`Registration successful: ${data}`);
      navigate("/login");
    } catch (error) {
      console.log(`Registration error: ${error}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="bg-amber-100 p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-4">
          🚀 Create Your Account
        </h2>
        <p className="text-center text-stone-600 mb-6">
          Join Jobify and land your dream job today!
        </p>

        {/* Form */}
        <form onSubmit={authHandle}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-stone-700 font-semibold mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-stone-700 font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-stone-700 font-semibold mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold shadow-md transition"
          >
            ✅ Register
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 text-center">
          <span className="text-stone-600">Already have an account?</span>{" "}
          <Link
            to="/login"
            className="text-amber-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
