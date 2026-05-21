import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:5000/api/todos";

// GET all todos
export const getTodos = async (userId, status) => {
  try {
    const response = await axios.get(`${API_URL}?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

// POST create todo
export const createTodo = async (todo, userId) => {
  try {
    const response = await axios.post(API_URL, { todo, userId });
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

// PUT update todo
export const updateTodo = async (id, todo) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { todo });
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// DELETE todo
export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

export const updateStatus = async (id, status) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error("Error updating status:", error);
    throw error;
  }
};
