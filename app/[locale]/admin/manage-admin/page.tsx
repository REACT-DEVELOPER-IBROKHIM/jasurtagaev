"use client";
import React, { useEffect } from "react";
import { FiTrash } from "react-icons/fi";

const ManageAdmin = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
        }
      });
  }, []);

  return (
    <div>
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
                <button className="bg-[red] text-white p-2">
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAdmin;
