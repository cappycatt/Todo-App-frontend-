import lvl2 from "../assets/lvl2.png";
import lvl1 from "../assets/lvl1.gif";
import lvl3 from "../assets/lvl3.png";
import NotFound from "../assets/NotFound.png";
import NthgTodo from "../assets/NthgTodo.gif";

export function Messages({ todos,pendingTodo }) {
  if (!todos || todos.length === 0) {
    return (
      <div className="w-250 p-60 text-4xl">
        <img
          className="h-50 border-r-2"
          src={NthgTodo}
          alt="Owl says nothing todo?"
        />
        Nothing<span className="text-green-700"> to do </span>today
      </div>
    );
  }
  if (pendingTodo.length === 0) {
    return (
      <div className="w-250 p-60 text-4xl">
        <img className="h-50" src={NotFound} alt="Owl says nthg to be found" />
        <p className="align-center p-10">
          No <span className="text-green-700">to do</span> found
        </p>
      </div>
    );
  }
  if (pendingTodo.length >= 1 && pendingTodo.length <= 2) {
    return (
      <div className="w-250 p-60 text-4xl">
        <img className="h-50" src={lvl1} alt="lil" />
        <p className="align-center">
          <span className="text-amber-200 p-10">
            <b>Level:</b> Easy
            <br />
          </span>
          Looks like u have {pendingTodo.length} task
        </p>
      </div>
    );
  }
  if (pendingTodo.length >= 3 && pendingTodo.length <= 7) {
    return (
      <div className="w-250 p-60 text-4xl">
        <img className="h-50" src={lvl2} alt="mid" />
        <p className="align-center">
          <span className="text-amber-700 p-10">
            <b>Level:</b> Medium
            <br />
          </span>
          Woah! you have {pendingTodo.length} todos
        </p>
      </div>
    );
  }
  if (pendingTodo.length >= 8) {
    return (
      <div className="w-250 p-60 text-4xl">
        <img className="h-50" src={lvl3} alt="mild" />
        <p className="align-center">
          <span className="text-red-500 p-10">
            <b>Level:</b> hard
            <br />
          </span>
          <b>Suggestion:</b> Move fast!! u have got {pendingTodo.length} tasks
        </p>
      </div>
    );
  }

  return null;
}
