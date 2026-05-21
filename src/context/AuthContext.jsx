import { createContext, useState, useEffect } from "react";
import { createUser, deleteUser, loginValidation } from "../services/AuthServices.jsx";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const tokens = await loginValidation(email, password);
      console.log(email, password);
      localStorage.setItem('token', tokens.token);
      localStorage.setItem('userId', tokens.userId);
      navigate('/todo');
    } catch (error) {
      console.error("Caught error:", error);
      setAuthError(error);
    }
  }
  const handleCreateUser = async (email, password, name) => {
    try {
      setLoading(true);
      setAuthError(null);
      const newUser = await createUser(email, password, name);
      if (newUser) {
        setUser(newUser);
      } 
      localStorage.setItem("userId", newUser.userId);
      localStorage.setItem("token", newUser.token);
      navigate('/todo');
    } catch (error) {
      console.error("Caught error:", error);
      setAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      setLoading(true);
      setAuthError(null);
      await deleteUser(id);
      alert("User deleted");
    } catch (error) {
      setAuthError(error);
      console.error("Failed to delete user:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        handleCreateUser,
        handleDeleteUser,
        loading,
        user,
        authError,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
