import { TodoContext } from "../context/TodoContext";
import { useUpdateStatus } from "../hooks/useUpdateStatus";
import React from "react";

function StatusButtons() {
  const { isChecked, setChecked, userId } = React.useContext(TodoContext);
  const mutation = useUpdateStatus(userId);

  return (
    isChecked.length >= 1 && (
      <div className="flex flex-row bg-green-700  p-4 gap-2 fixed top-222 z-50">
        <button
          type="button"
          className="w-fit p-2 bg-[#96b08e] text-white hover:shadow-xl rounded-sm"
          onClick={async () => {
            const idsToUpdate = isChecked;
            setChecked([]);
            for (let id of idsToUpdate) {
              await mutation.mutate({ id, status: "COMPLETED" });
            }
          }}
        >
          Complete
        </button>
        <button
          type="button"
          className="w-fit p-2 bg-[#96b08e] text-white hover:shadow-xl rounded-sm"
          onClick={async () => {
            const idsToUpdate = isChecked;
            setChecked([]);
            for (let id of idsToUpdate) {
              await mutation.mutate({ id, status: "PENDING" });
            }
          }}
        >
          InComplete
        </button>
      </div>
    )
  );
}

export default StatusButtons;
