import { useRef } from "react";
import { Link } from "react-router-dom";

export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 rounded-xl shadow-xl bg-white/70 backdrop-blur-sm border border-gray-200 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            ref={confirmPasswordRef}
            placeholder="Confirm Password"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <Link to='login'>
        <button className="mt-4 text-sm text-blue-600 hover:underline w-full text-center">
          Already have an account? Login
        </button>
        </Link>
      </div>
    </div>
  );
}
