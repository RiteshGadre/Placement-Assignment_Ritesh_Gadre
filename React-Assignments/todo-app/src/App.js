import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function todoRducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        { id: uuidv4(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    case "DELETE":
      return todos.filter((item) => item.id !== action.payload);
    case "EDIT":
      return todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    default:
      break;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoRducer, [], () => {
    const localValue = JSON.parse(localStorage.getItem("TODOS"));
    return localValue ? localValue : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    if (isEdit) {
      dispatch({ type: "EDIT", payload: { id: isEdit.id, text: newTodo } });
      setIsEdit(null);
    } else {
      dispatch({ type: "ADD", payload: newTodo });
      setNewTodo("");
    }
    setNewTodo("");
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleEdit = (item) => {
    setNewTodo(item.text);
    setIsEdit(item);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto max-w-lg">
      <div className="flex items-center gap-3 mb-5 w-full mt-10">
        <input
          className="p-3 text-black w-full rounded-sm outline-none "
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your task...."
        />
        <span
          onClick={handleAddTodo}
          className="py-3 px-5 cursor-pointer rounded-sm  bg-blue-500 text-white"
        >
          {isEdit ? "Save" : "Add"}
        </span>
      </div>

      <ul className="flex flex-col gap-3">
        {todos.length <= 0 && (
          <div className="text-red-200 uppercase text-center text-xl">
            There is No todo task here...
          </div>
        )}

        {todos.map((item) => (
          <li
            key={item.id}
            className="flex justify-between p-3 items-center rounded-md hover:bg-black hover:bg-opacity-30 transition-all"
          >
            <div className="flex justify-between gap-3 items-center flex-1">
              <input
                checked={item.completed}
                onChange={() => handleToggle(item.id)}
                className="w-6 h-6"
                type="checkbox"
              />
              <span
                className={`${item.completed ? "line-through" : ""} flex-1 text-white font-bold text-xl`}
              >
                {item.text}
              </span>
            </div>

            <div className=" flex items-center gap-3">
              <span
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer w-8 h-8 flex items-center justify-center bg-red-100 rounded-full text-red-500"
              >
                <AiFillDelete size={20}></AiFillDelete>
              </span>
              <span
                onClick={() => handleEdit(item)}
                className="cursor-pointer w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-500"
              >
                <AiFillEdit size={20}></AiFillEdit>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default App;