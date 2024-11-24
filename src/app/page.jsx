"use client";
import { Task } from "./components/Task";
import { useState } from "react";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskPosition, setTaskPosition] = useState(1);

  const handleClick = () => {
    if (todoText.trim()) {
      const newTask = {
        id: taskPosition,
        text: todoText,
      };
      setTasks((prevTask) => [...prevTask, newTask]);
      setTodoText("");
      setTaskPosition((prevTaskPosition) => prevTaskPosition + 1);
    }
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <main className="main-all">
        <div className="container mx-auto">
          <div className="text-wrapper flex justify-center absolute inset-0 gap-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs centered-text"
              onChange={(el) => setTodoText(el.target.value)}
            />
            <button onClick={handleClick} className="btn btn-outline">
              Add Task
            </button>
          </div>
          <div className="container mx-auto">
            <div className="new-task text-center flex justify-center absolute inset-0 gap-3">
              <div className="grid grid-cols-4 gap-4">
                {tasks.length === 0 ? (
                  <p className="text-4xl mt-20 absolute inset-0 text-center text-white">
                    Looks lonely here add some tasks to get started !
                  </p>
                ) : (
                  tasks.map((task) => (
                    <Task
                      key={task.id}
                      todoText={task.text}
                      id={task.id}
                      handleDelete={handleDelete}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
