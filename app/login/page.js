
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    localStorage.setItem("ideatest-login", "true");

    alert("Login successful!");

    router.push("/submit");
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">

        <h1 className="mb-2 text-center text-3xl font-bold text-blue-600">
          IdeaTest
        </h1>

        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="mt-5 text-center text-gray-700">
          New user? Registration will be added later.
        </p>

        <p className="mt-4 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </p>

      </div>
    </main>
  );
}
