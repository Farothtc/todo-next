"use client";
import { Task } from "./components/Task";
import { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import Progress from "./components/Progress";

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

  // useEffect(() => {
  //   anime({
  //     targets: ".main-all",
  //     opacity: [0, 1], // Fade in
  //     translateY: [0, 20], // Move up slightly
  //     delay: anime.stagger(100), // Stagger each card by 100ms
  //     duration: 500,
  //     easing: "easeOutQuad",
  //   });
  // }, []);

  return (
    <>
      <main className="main-all text-center">
        <div className="container mx-auto">
          <div className="text-wrapper flex justify-center absolute inset-0 gap-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs centered-text"
              onChange={(el) => setTodoText(el.target.value)}
            />
            <button
              onClick={handleClick}
              className="btn btn-outline bg-base-300 text-gray-400"
            >
              Add Task
            </button>
          </div>
          {tasks.length === 0 && (
            <div className="greet-lonely text-xl lg:text-4xl md:text-3xl sm:text-2xl absolute inset-0 text-center text-white">
              Looks lonely here add some tasks to get started !
            </div>
          )}

          <div className="new-task text-center flex justify-center gap-3">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  todoText={task.text}
                  id={task.id}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          </div>
          {tasks.length > 0 ? "" : <Progress />}
        </div>
      </main>
    </>
  );
}
