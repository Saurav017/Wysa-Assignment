import React from "react";

function TodoInput({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <div className="mb-4 p-4">
      <input
        type="text"
        maxLength={150}
        placeholder="Add a new to-do..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="w-full p-4 border-2 rounded outline-none focus:border-[#71b8e9]"
      />
      <div className="flex justify-between items-center mt-4">
        <div className="space-x-2">
          <button
            onClick={() => setNewTodo("")}
            className="px-4 py-2 bg-white text-[#71b8e9] rounded border-2 border-[#71b8e9] hover:bg-[#71b8e9] hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleAddTodo}
            disabled={newTodo.trim() === ""}
            className={`px-4 py-2 rounded border-2 text-white ${
              newTodo.trim() === ""
                ? "bg-gray-300 border-gray-300 cursor-not-allowed"
                : "bg-[#71b8e9] border-[#71b8e9] hover:bg-[#55a9e5]"
            }`}
          >
            Add Task
          </button>
        </div>
        <div className="text-sm text-gray-500">{newTodo.length}/150</div>
      </div>
    </div>
  );
}

export default TodoInput;
