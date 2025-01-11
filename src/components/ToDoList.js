import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoInput from "./ToDosDetails/ToDoInput";
import TodoItems from "./ToDosDetails/ToDoItems";

function TodoList({ userId, showToast }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [userId]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users/${userId}/todos`
      );
      setTodos(
        response.data.todos.map((todo) => ({ ...todo, isSynced: true }))
      );
    } catch (error) {
      showToast("Failed to fetch To-Dos.", "error");
    }
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() === "") {
      showToast("To-Do cannot be empty!", "error");
      return;
    }

    const newTask = {
      id: Date.now(),
      todo: newTodo,
      completed: false,
      addedDate: new Date().toLocaleDateString(),
      isSynced: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTask]);

    try {
      const response = await axios.post("https://dummyjson.com/todos/add", {
        todo: newTodo,
        userId: userId,
        completed: false,
      });
      setTodos((prevTodos) =>
        prevTodos.map((task) =>
          task.id === newTask.id
            ? { ...newTask, id: response.data.id, isSynced: true }
            : task
        )
      );
      showToast("To-Do item added!", "success");
    } catch (error) {
      showToast(
        "Failed to sync with server, but task was added locally.",
        "error"
      );
    }

    setNewTodo("");
  };

  const handleDeleteTodo = async (id, isSynced) => {

    console.log(isSynced)
    if (isSynced) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      showToast("Locally added To-Do deleted!", "success");
      return;
    }

    try {
      await axios.delete(`https://dummyjson.com/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      showToast("To-Do item deleted!", "success");
    } catch (error) {
      showToast("Failed to delete To-Do item.", "error");
    }
  };

  const handleEditTodo = (id, todo) => {
    setEditId(id);
    setEditValue(todo);
  };

  const handleSaveEdit = async (id, isSynced) => {
    const updatedDate = new Date().toLocaleDateString();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: editValue, updatedDate } : todo
    );

    console.log("UPDATED TODOS: ", updatedTodos)
    setTodos(updatedTodos);
    setEditId(null);


    
    if (!isSynced) {
      try {
        await axios.put(`https://dummyjson.com/todos/${id}`, {
          todo: editValue,
          updatedDate,
        });
        showToast("To-Do item updated!", "success");
      } catch (error) {
        showToast("Failed to update To-Do item.", "error");
      }
    } else {
      showToast("Locally updated To-Do.", "success");
    }
  };

  return (
    <div>
      <TodoInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />

      <TodoItems
        todos={todos}
        setTodos={setTodos}
        editId={editId}
        editValue={editValue}
        setEditValue={setEditValue}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleSaveEdit={handleSaveEdit}
        showToast={showToast}
      />
    </div>
  );
}

export default TodoList;
