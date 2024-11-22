"use client";
import { Task } from "./components/Task";
import { useState } from "react";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    if (todoText) {
      setTasks((prevTask) => [...prevTask, todoText]);
      setTodoText("");
    }
  };

  return (
    <>
      <main className="main-all">
        <div className="container mx-auto">
          <div className="text-wrapper flex justify-center absolute inset-0 gap-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs entered-text"
              onChange={(el) => setTodoText(el.target.value)}
            />
            <button onClick={handleClick} className="btn btn-outline">
              Add Task
            </button>
          </div>
          <div className="new-task text-center flex justify-center absolute inset-0 gap-3">
            {tasks.map((task, index) => (
              <Task key={index} todoText={task} id={index + 1} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
