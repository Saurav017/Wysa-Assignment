import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderTitle from './HeaderTitle';
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa"; // Hamburger menu icon

function Sidebar({ onUserSelect }) {
  const [users, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [activeUserId, setActiveUserId] = useState(null); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Control sidebar visibility

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    const response = await axios.get(`https://dummyjson.com/users?limit=10&skip=${page * 10}`);
    setUser(response.data.users);
  };

  const filteredUsers = users.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSelect = (user) => {
    setActiveUserId(user.id); 
    onUserSelect(user);
    setIsSidebarOpen(false); // Close sidebar on user selection (for mobile)
  };

  return (
    <div className="relative z-50">
      {/* Hamburger Icon for Mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden p-2 fixed top-4 left-4 z-50 bg-[#55a9e5] text-white rounded shadow-md"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-[#D7E1EB] overflow-hidden transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:w-64`}
      >
        <HeaderTitle title="Users List" />

        {/* Search Input */}
        <div className="relative w-full px-4">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 my-4 block bg-white rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300 pl-10"
          />
          <AiOutlineSearch className="absolute top-1/2 left-8 transform -translate-y-1/2 text-[#55a9e5] pointer-events-none" />
        </div>

        {/* Users List */}
        <ul className="overflow-y-auto h-[calc(100vh-200px)] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => handleUserSelect(user)}
              className={`py-[12px] px-4 border-b-2 border-b-[#bdcfdd] cursor-pointer ${
                activeUserId === user.id ? 'bg-[#7DA0BE] text-white' : 'hover:bg-[#7DA0BE]'
              }`}
            >
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>

        {/* Pagination Buttons */}
        <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-between">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className={`p-2 rounded ${
              page === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#7DA0BE] text-white hover:bg-[#7DA0BE]'
            }`}
          >
            ←
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="p-2 bg-[#7DA0BE] text-white rounded hover:bg-[#7DA0BE]"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
