import React from "react";
import { MdDeleteOutline, MdModeEditOutline, MdSave } from "react-icons/md";

function TodoItems({
  todos,
  editId,
  editValue,
  setEditValue,
  handleDeleteTodo,
  handleEditTodo,
  handleSaveEdit,
  setTodos,
}) {
  const formatDate = (dateString) => {
    const date = dateString ? new Date(dateString) : new Date();
    return new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="space-y-2 mx-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center p-4 rounded border-2 ${
            todo.completed
              ? "bg-green-100 border-green-500"
              : "bg-white border-[#71b8e9]"
          }`}
        >
          <input
            type="checkbox"
            className="mr-4 cursor-pointer accent-[#71b8e9]"
            checked={todo.completed}
            onChange={() =>
              setTodos((prevTodos) =>
                prevTodos.map((t) =>
                  t.id === todo.id ? { ...t, completed: !t.completed } : t
                )
              )
            }
          />
          <div className="flex-grow">
            {editId === todo.id ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="w-full p-2 border rounded outline-none focus:border-[#71b8e9]"
              />
            ) : (
              <p
                className={`font-medium ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.todo}
              </p>
            )}
            <p className="text-sm text-gray-500">
              {todo.updatedDate ? (
                <span> {formatDate(todo.updatedDate)}</span>
              ) : (
                <span>{formatDate(todo.addedDate)}</span>
              )}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {editId === todo.id ? (
              <button
                onClick={() => handleSaveEdit(todo.id, todo.isSynced)}
                className="text-[#71b8e9] hover:text-[#55a9e5] text-2xl"
              >
                <MdSave />
              </button>
            ) : (
              <button
                onClick={() => handleEditTodo(todo.id, todo.todo)}
                className="text-[#71b8e9] hover:text-[#55a9e5] text-2xl"
              >
                <MdModeEditOutline />
              </button>
            )}
            <button
              onClick={() => handleDeleteTodo(todo.id, todo.isSynced)}
              className="text-[#71b8e9] hover:text-[#55a9e5] text-2xl"
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItems;
