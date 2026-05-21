import React from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { useAddTodo } from "../hooks/useAddTodo.js";
import { TodoContext } from "../context/TodoContext.jsx";

function AddRow({ useAddTodo, setAddOpen}) {
  const {userId} = React.useContext(TodoContext);
  const [todoText, setTodoText] = React.useState("");
  const mutation = useAddTodo(userId);

  const handleAddTodo = () => {
    mutation.mutate( todoText, userId );
    setTodoText("");
    setAddOpen(false);
  }

  return (
    <div className="text-xl p-4 flex flex-row bg-gray-100 mb-2 rounded-sm gap-6">
      <span>+</span>
        <input
          type="text"
          className="p-2 rounded-sm w-full border"
          placeholder="add todo"
          name="add"
          htmlFor="add"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      <td  className="w-30">
        <button
          className="rounded-sm p-2 bg-gray-50 hover:shadow-xl shadow-sm"
          onClick={() => handleAddTodo()}
        >
         <MdFileDownloadDone />
        </button>
        &ensp;
        <button
          className="rounded-sm p-2 bg-gray-50 hover:shadow-xl shadow-sm"
          onClick={() => setAddOpen(false)}
        >
          <MdCancel /> 
        </button>
      </td>
    </div>
  );
}

export default AddRow;
