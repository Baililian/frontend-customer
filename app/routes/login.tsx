import type { Route } from "./+types/login";
import { Form, Link, redirect, useActionData } from "react-router";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Waterland Resort" },
    { name: "description", content: "Login to your Waterland Resort account." },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "admin@waterland.com" && password === "123456") {
    return redirect("/dashboard");
  }

  return { error: "Invalid email or password" };
}

export default function Login() {
  const data = useActionData();
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
          Welcome Back
        </h2>

        <Form method="post" className="space-y-6">

          {data?.error && (
            <p className="text-red-500 text-sm text-center">
              {data.error}
            </p>
          )}

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
            Sign In
          </button>
        </Form>
        
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-sky-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}