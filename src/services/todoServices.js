import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// GET all todos
export const getTodos = async (userId, status) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASEURL}/todos?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

// POST create todo
export const createTodo = async (todo, userId) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_BASEURL}/todos`, { todo, userId });
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

// PUT update todo
export const updateTodo = async (id, todo) => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_BASEURL}/todos/${id}`, { todo });
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// DELETE todo
export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_BASEURL}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

export const updateStatus = async (id, status) => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_BASEURL}/todos/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error("Error updating status:", error);
    throw error;
  }
};
