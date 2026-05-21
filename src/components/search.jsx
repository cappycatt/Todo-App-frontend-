import { BsSearch } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";
import React from "react";
import { IoMdAdd } from "react-icons/io";

function Search() {
  const { search, setSearch, isAddOpen, setAddOpen } =
    React.useContext(TodoContext);
  return (
    <div className="flex flex-row mt-10 mb-7 border border-emerald-400 bg-white rounded-sm">
      <BsSearch className="size-10 m-2 border-r-2 pr-2 border-green-600" />
      <div className="flex overflow-scrollborder w-full rounded-xl">
        <input
          className="outline-hidden w-full p-2 overflow-scroll"
          type="search"
          name="search"
          id="search"
          placeholder="search your todo.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <span>
        <button
          className="text-white bg-green-600  hover:bg-green-700 hover:shadow-xl p-4"
          onClick={() => setAddOpen(!isAddOpen)}
        >
          <IoMdAdd className="size-6" />
        </button>
      </span>
    </div>
  );
}

export default Search;
