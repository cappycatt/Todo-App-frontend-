import { TodoContext } from "../context/TodoContext.jsx";
import DisplayCard from "../DisplayCard.jsx";
import AddRow from "../components/AddRow.jsx";
import React from "react";
import Search from "../components/search.jsx";
import StatusButtons from "../buttons/StatusButtons.jsx";
import { useMemo } from "react";
import { Messages } from "../components/Messages.jsx";
import { useAddTodo } from "../hooks/useAddTodo.js";
import { useLoadTodo } from "../hooks/useLoadTodo.js";

function TodoList() {
   const [search, setSearch] = React.useState("");
  const userId = localStorage.getItem("userId");
  const { data: todos, isLoading, error } = useLoadTodo(userId);
   const {
     isAddOpen,
     setAddOpen   } = React.useContext(TodoContext);
  const searchValue = search.replaceAll(" ", "").toLowerCase();
  const pendingTodo = useMemo(() => {
      return todos?.filter((todo) => todo.status === "PENDING");
  }, [todos]);

  let filteredTodo = search
    ? todos?.filter((todo) =>
        todo.todo.replaceAll(" ", "").toLowerCase().includes(searchValue),
      )
    : todos;

  return (
    <div className="bg-[#96b08e] min-h-screen">
      <p className="font-bold font-mono text-{#96b08e} text-shadow-green-700 text-8xl pt-10 pl-10">
        ToDo App
      </p>
      <span className="text-4xl ml-25 text-gray-100">
        Complete your tasks, the fun way.
      </span>
      <div className="flex flex-row gap-20">
        <Messages
          todos={todos}
          pendingTodo={pendingTodo}
        />
        <div className="flex flex-col items-center gap-y-4 p-4">
          <div className=" overflow-hidden p-6 rounded-sm w-150 bg-[#3b5038] shadow-lg mb-40">
            <div className="text-white text-4xl text-center font-extrabold">
              Let's lock in today!
              <hr className="w-90 justify-self-center" />
            </div>
            <Search />
             <div>
              {isAddOpen === true && <AddRow useAddTodo={ useAddTodo } setAddOpen={setAddOpen} />}
              {filteredTodo?.map((item, i) => (
                <DisplayCard i={i} key={item.id} todo={item} />
              ))} 
            </div>
          </div>
        </div>
      </div>
      <StatusButtons />
    </div>
  );
}

export default TodoList;
