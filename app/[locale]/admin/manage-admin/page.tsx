"use client";
import React, { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";

const ManageAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      });
  }, []);

  const handleDeleteUser = (userId: string) => {
    setLoading(true);
    fetch(`/api/users`, {
      method: "DELETE",
      body: JSON.stringify({ userId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          fetch("/api/users")
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                setUsers(data.data);
              }
            });
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-2xl bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left bg-primary text-white p-2">No</th>
              <th className="text-left bg-primary text-white p-2">Email</th>
              <th className="text-left bg-primary text-white border-l-gray-400 border-l-2 p-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => (
              <tr key={user._id}>
                <td className="p-2 border-b border-gray-200">{index + 1}</td>
                <td className="p-2 border-b border-gray-200">{user.email}</td>
                <td className="p-2 border-b border-gray-200">
                  <button
                    disabled={loading}
                    className="bg-[red] text-white p-2"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageAdmin;
