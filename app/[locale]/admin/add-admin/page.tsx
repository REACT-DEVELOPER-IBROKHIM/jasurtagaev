"use client";
import React, { FormEvent, useState } from "react";

const AddAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
    email: "",
    password: "",
  });

  const handleCreateNewAdmin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    fetch("/api/users/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("New admin created successfully");
          setNewAdmin({ email: "", password: "" });
        } else {
          alert(data.error || "Something went wrong");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleCreateNewAdmin} className="flex flex-col items-start gap-4">
      <div className="flex w-full gap-4">
        <input
          className="border-grey border-[1px] flex-1 outline-0 h-[30px] indent-2"
          type="email"
          required
          value={newAdmin.email}
          placeholder="Email"
          onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
        />
        <input
          className="border-grey border-[1px] flex-1 outline-0 h-[30px] indent-2"
          type="password"
          required
          placeholder="New Password"
          value={newAdmin.password}
          onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
        />
      </div>
      <button className="bg-primary text-white p-2 cursor-pointer" disabled={loading}>
        {loading ? "Creating..." : "Create new admin"}
      </button>
    </form>
  );
};

export default AddAdmin;
