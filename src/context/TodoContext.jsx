import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { useLoadTodo } from "../hooks/useLoadTodo.js";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [isAddOpen, setAddOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isChecked, setChecked] = useState([]);
  const userId = localStorage.getItem("userId");
  const mutation = useLoadTodo(userId);
  const { user } = useContext(AuthContext);


   useEffect(() => {
    if (userId) {
      mutation.refetch();
    }
  }, [user]);
 
  const handleCheckboxChange = (id) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((index) => index !== id) : [...prev, id],
    );
  };

  return (
    <TodoContext.Provider
      value={{
        isAddOpen,
        setAddOpen,
        editingId,
        setEditingId,
        isChecked,
        setChecked,
        handleCheckboxChange,
        userId,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
