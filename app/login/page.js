"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from 'next-auth/react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async(e) => {
    e.preventDefault();

    try {
      const data = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
          <form
            className="border border-secondary rounded-2xl p-4"
            onSubmit={submitHandler}
          >
            <h1 className="text-emerald-700 mb-6 font-bold flex justify-center underline decoration-wavy">Login</h1>

            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6">
              <input
                placeholder="Enter your email"
                type="email"
                id="email_field"
                className=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your Password"
                type="password"
                id="password_field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mb-6 mt-4"
            >
              Sign in
            </button>

            <div className="text-center text-gray-400">
              <p>
                Not a member? <Link href="/register">Register</Link>
              </p>
            </div>
          </form>
    </div>
  );
};

export default Login;