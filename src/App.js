import React, { useEffect, useState } from 'react';
import Sidebar from './components/SideBar';
import UserDetails from './components/UserDetails';
import TodoList from './components/ToDoList';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setTabIndex(0);
  };

 

  const handleToast = (message, severity) => {
    setToast({ open: true, message, severity });
    setTimeout(() => setToast({ ...toast, open: false }), 3000); // Auto-hide toast
  };

  return (
    <div className="flex font-inter min-h-screen">
      {/* Sidebar */}
      <Sidebar onUserSelect={handleUserSelect} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-8 lg:ml-64">
        {selectedUser ? (
          <>
            {/* Tabs */}
            <div className="flex mt-[5.5rem]">
              <button
                className={`px-4  font-semibold ${tabIndex === 0 ? 'border-b-2 border-[#8bc5ec] text-[#71b8e9]' : ''}`}
                onClick={() => setTabIndex(0)}
              >
                User Details
              </button>
              <button
                className={`px-4  font-semibold ${tabIndex === 1 ? 'border-b-2 border-[#8bc5ec] text-[#71b8e9]' : ''}`}
                onClick={() => setTabIndex(1)}
              >
                To-Dos
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {tabIndex === 0 && (
                <>
                <UserDetails user={selectedUser} onUserUpdate={handleUserSelect} showToast={handleToast} />
                </>
             
              )}
              {tabIndex === 1 && (
                <TodoList userId={selectedUser.id} showToast={handleToast} />
              )}
            </div>
          </>
        ) : (
          <h2 className="text-xl text-center mt-[100px]">Please select a user from the sidebar.</h2>
        )}
      </div>

      {/* Toast Notification */}
      {toast.open && (
        <div
          className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-md text-white ${
            toast.severity === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default App;
