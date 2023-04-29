"use client";

import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/register', {
        name, 
        email, 
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-20">
          <form
            className="border border-secondary rounded-2xl p-4"
            onSubmit={submitHandler}
          >
            <h1 className="mb-6 font-bold flex justify-center underline decoration-wavy">Register</h1>

            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6">
              <input
                placeholder="Name"
                type="text"
                id="name_field"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6">
              <input
                placeholder="email"
                type="email"
                id="email_field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6">
              <input
                placeholder="Password"
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
              Register
            </button>
          </form>
    </div>
  );
};

export default Register;