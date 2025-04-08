import { useState } from "react";

export function SignInPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-black">
      <div
        className={`relative w-[768px] max-w-full min-h-[480px] overflow-hidden rounded-3xl shadow-2xl ${
          isActive ? "active" : ""
        }`}
      >
        {/* SIGN-UP FORM */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-8 backdrop-blur-lg bg-white/10 transition-all duration-500 ${
            isActive ? "translate-x-full opacity-100 z-10" : "opacity-0 -z-10"
          }`}
        >
          <h1 className="text-2xl font-bold text-500">Create Account</h1>
          <div className="flex gap-3 my-4">
            <a href="#" className="text-white text-xl">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-md w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-md w-full"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-6 rounded-lg transition shadow-md">
            Sign Up
          </button>
        </div>

        {/* SIGN-IN FORM */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center p-8 backdrop-blur-lg bg-white/10 transition-all duration-500 ${
            isActive ? "-translate-x-full opacity-0 -z-10" : "opacity-100 z-10"
          }`}
        >
          <h1 className="text-2xl font-bold text-orange-500">Sign In</h1>
          <div className="flex gap-3 my-4">
            <a href="#" className="text-white text-xl">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="text-white text-xl">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-md w-full"
          />
          <a href="#" className="text-orange-400 text-sm mb-4">
            Forgot Your Password?
          </a>
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-6 rounded-lg transition shadow-md">
            Sign In
          </button>
        </div>

        {/* TOGGLE PANEL */}
        <div className="absolute top-0 left-1/2 w-1/2 h-full flex items-center justify-center text-center bg-orange-500 text-white transition-all duration-500">
          <div className="w-3/4">
            {isActive ? (
              <>
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                <p className="text-sm mt-2 mb-4">
                  Enter your personal details to sign in
                </p>
                <button
                  onClick={() => setIsActive(false)}
                  className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                <p className="text-sm mt-2 mb-4">
                  Register with your details to start
                </p>
                <button
                  onClick={() => setIsActive(true)}
                  className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
