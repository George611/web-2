import { useContext, useState } from "react";
import { UserContext } from "../components/User_Context";

const Main = () => {
  const { users, setUsers } = useContext(UserContext); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleAddUser = () => {
    if (!firstName || !lastName) return;
    const newUser = {
      email: firstName, 
      password: lastName,
    };
    setUsers([...users, newUser]); 
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">100/100 Midterm</h2>

 
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-gray-400 px-2 py-1 rounded"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <table className="border-collapse border border-gray-400 shadow-lg">
        <thead className="bg-blue-200">
          <tr>
            <th className="border border-gray-400 px-6 py-3 text-center">Email</th>
            <th className="border border-gray-400 px-6 py-3 text-center">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
            >
              <td className="border border-gray-400 px-6 py-2 text-center">{user.email}</td>
              <td className="border border-gray-400 px-6 py-2 text-center">{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;

