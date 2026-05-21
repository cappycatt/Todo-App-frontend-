import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import TodoList from "../pages/TodoList";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/todo" element={<ProtectedRoute element={<TodoList/>}/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default AppRoutes;
