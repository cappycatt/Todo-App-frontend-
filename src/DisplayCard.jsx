import React from "react";
import { MdFileDownloadDone } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { TodoContext } from "./context/TodoContext";
import { useUpdateTodo } from "./hooks/useUpdateTodo";
import { useDeleteTodo } from "./hooks/useDeleteTodo";

function DisplayCard({ todo, i }) {
  const { isChecked, setEditingId, editingId, handleCheckboxChange, userId } =
    React.useContext(TodoContext);
    const updateMutation = useUpdateTodo(userId);
  const deleteMutation = useDeleteTodo(userId);
  const [editValue, setEditValue] = React.useState(todo.todo);

  const handleUpdateTodo = () => {
    updateMutation.mutate({ id: todo.id, todo: editValue });
    setEditValue("");
    setEditingId(null);
  };

  return (
    <div className="text-xl w-full shadow-xl rounded-sm bg-gray-100 flex flex-row gap-x-7 p-4 mb-2 hover:-translate-y-1 hover:scale-102">
      <input
        type="checkbox"
        className="accent-green-600"
        checked={isChecked.includes(todo.id)}
        onChange={() => handleCheckboxChange(todo.id)}
      />
      {editingId === todo.id ? (
        <input
          className="w-full p-2 font-lora border border-gray-400 rounded-sm overflow-scroll outline-hidden"
          name="editTodo"
          id="editTodo"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <div
          className={`w-full font-lora overflow-hidden ${todo.status === "COMPLETED" ? "line-through text-gray-400" : ""}`}
        >
          {todo.todo}
        </div>
      )}

      <div className="w-30 inline-flex">
        <button
          disabled={todo.status === "COMPLETED"}
          onClick={() =>
            editingId === todo.id ? handleUpdateTodo() : setEditingId(todo.id)
          }
          className={`${todo.status === "COMPLETED" ? "text-gray-400" : "bg-gray-50"} p-2 rounded-sm shadow-sm  hover:shadow-xl`}
        >
          {editingId === todo.id ? <MdFileDownloadDone /> : <FaRegEdit />}
        </button>
        &ensp;
        <button
          onClick={() =>
            editingId === todo.id
              ? setEditingId(null)
              : deleteMutation.mutate(todo.id)
          }
          className="p-2 rounded-sm shadow-sm bg-gray-50 hover:shadow-xl"
        >
          {editingId === todo.id ? <MdCancel /> : <AiTwotoneDelete />}
        </button>
      </div>
    </div>
  );
}

export default DisplayCard;
