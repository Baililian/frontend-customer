import type { Route } from "./+types/signup";
import { Form, Link } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign Up - Waterland Resort" },
    { name: "description", content: "Create your Waterland Resort account." },
  ];
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen pt-28 bg-linear-to-br from-sky-50 to-sky-100 flex items-center justify-center px-4 relative">

      <Header />

      <Link 
        to="/" 
        className="absolute top-32 left-6 px-4 py-2 text-sky-600"
      >
        ← Back to Home
      </Link>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-sky-800 mb-8">
          Create Account
        </h2>
        
        <Form method="post" className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-600"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-sky-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
          >
            Sign Up
          </button>
        </Form>
        
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}