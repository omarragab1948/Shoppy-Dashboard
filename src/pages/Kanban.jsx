import React, { useState, useContext } from "react";
import Header from "../components/Header";
import shortid from "shortid";
import { StateContext } from "../contexts/ContextProvider";
const Kanban = () => {
  const { currentColor } = useContext(StateContext);
  const [showInput, setShowInput] = useState({
    todo: false,
    progress: false,
    done: false,
  });
  const toggleInput = (column) => {
    setShowInput((prevShowInput) => ({
      ...prevShowInput,
      [column]: !prevShowInput[column],
    }));
  };

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([{ id: shortid.generate(), inputValue }, ...todos]);
    setInputValue("");
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const [inputValue2, setInputValue2] = useState("");
  const [todos2, setTodos2] = useState([]);
  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleAddTodo2 = () => {
    setTodos2([{ id: shortid.generate(), inputValue2 }, ...todos2]);
    setInputValue2("");
  };
  const handleDeleteTodo2 = (id) => {
    setTodos2(todos2.filter((todo) => todo.id !== id));
  };
  const [inputValue3, setInputValue3] = useState("");
  const [todos3, setTodos3] = useState([]);
  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
  };

  const handleAddTodo3 = () => {
    setTodos3([{ id: shortid.generate(), inputValue3 }, ...todos3]);
    setInputValue3("");
  };
  const handleDeleteTodo3 = (id) => {
    setTodos3(todos3.filter((todo) => todo.id !== id));
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <div className="flex dark:bg-secondary-dark-bg bg-gray-200 h-screen flex-wrap flex-col sm:flex-row sm:justify-center md:justify-around text-black font-semibold">
        <div
          id="todo"
          className=" bg-white dark:bg-secondary-dark-bg rounded-2xl h-fit my-4  flex flex-col items-center px-4 sm:px-3 py-2 justify-between mx-auto  w-4/6 md:w-5/12 lg:w-1/4"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <div className="flex justify-between w-full dark:text-white my-2">
            <h3>To Do</h3>
            <button onClick={() => toggleInput("todo")}>+</button>
          </div>
          {showInput.todo && (
            <>
              <input
                type="text"
                id="todo"
                placeholder="Type here"
                value={inputValue}
                onChange={handleInputChange}
                className="input input-bordered w-full my-3 max-w-xs bg-white text-black border-solid border-1 border-black"
              />
              <button
                onClick={handleAddTodo}
                className="test btn btn-xs text-white font-bold border-none sm:btn-sm md:btn-md "
                style={{ backgroundColor: currentColor }}>
                Add a Task
              </button>
              <ul className="my-4 w-full">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="my-3 h-16 rounded-md px-1"
                    style={{ backgroundColor: currentColor }}>
                    <li className="flex justify-between items-center h-full">
                      <span className="items-center text-white font-bold text-center">
                        {todo.inputValue}
                      </span>
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        className="text-xs font-bold bg-red-600 text-white rounded py-1 px-2">
                        Delete
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
        <div
          className="progress h-fit dark:bg-secondary-dark-bg bg-white rounded-2xl  my-4  flex flex-col items-center px-4 sm:px-3 py-2 justify-between mx-auto  w-4/6 md:w-5/12 lg:w-1/4"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <div className="flex justify-between w-full dark:text-white my-2">
            <h3>In Progress</h3>
            <button onClick={() => toggleInput("progress")}>+</button>
          </div>
          {showInput.progress && (
            <>
              <input
                type="text"
                id="progress"
                value={inputValue2}
                onChange={handleInputChange2}
                placeholder="Type here"
                className="input input-bordered w-full my-3 max-w-xs bg-white text-black border-solid border-1 border-black "
              />
              <button
                onClick={handleAddTodo2}
                className="btn btn-xs text-white font-bold border-none sm:btn-sm md:btn-md "
                style={{ backgroundColor: currentColor }}>
                Add a Task
              </button>
              <ul className="my-4 w-full">
                {todos2.map((todo) => (
                  <div
                    key={todo.id}
                    className="my-3 h-16 rounded-md px-1"
                    style={{ backgroundColor: currentColor }}>
                    <li className="flex justify-between items-center h-full">
                      <span className="items-center text-center text-white">
                        {todo.inputValue2}
                      </span>
                      <button
                        onClick={() => handleDeleteTodo2(todo.id)}
                        className="text-xs rounded font-bold bg-red-600 text-white py-1 px-2">
                        Delete
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
        <div
          className="done bg-white dark:bg-secondary-dark-bg rounded-2xl  my-4 h-fit flex flex-col items-center  px-4 sm:px-3 py-2 justify-between mx-auto  w-4/6 md:w-5/12 lg:w-1/4"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <div className="flex justify-between dark:text-white w-full my-2">
            <h3>Done</h3>
            <button onClick={() => toggleInput("done")}>+</button>
          </div>
          {showInput.done && (
            <>
              <input
                type="text"
                id="done"
                onChange={handleInputChange3}
                value={inputValue3}
                placeholder="Type here"
                className="input input-bordered w-full my-3 max-w-xs bg-white text-black border-solid border-1 border-black"
              />
              <button
                onClick={handleAddTodo3}
                className="btn btn-xs text-white font-bold border-none sm:btn-sm md:btn-md"
                style={{ backgroundColor: currentColor }}>
                Add a Task
              </button>
              <ul className="my-4 w-full">
                {todos3.map((todo) => (
                  <div
                    key={todo.id}
                    className="my-3 h-16 rounded-md px-1"
                    style={{ backgroundColor: currentColor }}>
                    <li className="flex justify-between items-center h-full">
                      <span className="items-center text-center text-white">
                        {todo.inputValue3}
                      </span>
                      <button
                        onClick={() => handleDeleteTodo3(todo.id)}
                        className="text-xs rounded font-bold bg-red-600 text-white py-1 px-2">
                        Delete
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kanban;
