"use client";
import React, { FormEvent, useState } from "react";

const AddAdmin = () => {
  const [newAdmin, setNewAdmin] = useState({
    email: "",
    password: "",
  });

  const handleCreateNewAdmin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      });
  };

  return (
    <form onSubmit={handleCreateNewAdmin}>
      <input
        className="border-gray border-2"
        type="email"
        required
        value={newAdmin.email}
        onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
      />
      <input
        className="border-gray border-2"
        type="password"
        required
        value={newAdmin.password}
        onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
      />
      <button>Create new admin</button>
    </form>
  );
};

export default AddAdmin;
