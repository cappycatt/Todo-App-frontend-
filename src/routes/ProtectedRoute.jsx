import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ element }) {
const user  = localStorage.getItem('token');
if (!user) {
    return <Navigate to="/login"/>;
}
  return element;
}

export default ProtectedRoute