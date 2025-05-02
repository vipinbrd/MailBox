import { useRef } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h1>
        <form className="space-y-4">
          <input
            type="email"
            ref={emailRef}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-600 space-y-2">
          <div>
            Don’t have an account?{" "}
            <Link to="signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </div>
          <div>
            <Link to="forget" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
