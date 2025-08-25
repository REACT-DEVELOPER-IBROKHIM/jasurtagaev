"use client";

import Button from "@/utils/components/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/auth/login", user);
      console.log("response", response);
      router.push("/");
    } catch (error: any) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="max-w-[350px] w-full bg-white p-6 rounded-lg shadow-primary flex flex-col items-center"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl mb-8">Login</h1>
        <div className="w-full">
          <label className="text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 mb-4"
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label className="text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 p-2 mb-4"
            onChange={handleChange}
          />
        </div>
        <button
          disabled={loading}
          className="bg-m-button text-white w-full p-3 cursor-pointer hover:bg-primary-dark disabled:opacity-50"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
