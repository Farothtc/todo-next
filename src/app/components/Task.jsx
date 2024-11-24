"use client";
import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export function Task(props) {
  const [editText, setEditText] = useState("");
  const [editTask, setEditTask] = useState(props.todoText);

  const handleEdit = () => {
    if (editText.trim()) {
      setEditTask(editText);
      setEditText("");
    }
  };

  const deleteAnimation = () => {
    anime({
      targets: `#card-${props.id}`, // Target the specific task card
      scale: [1, 0], // Shrink the card
      opacity: [1, 0], // Fade out
      duration: 500,
      easing: "easeInQuad",
      complete: () => props.handleDelete(props.id), // Call the delete function after animation
    });
  };

  useEffect(() => {
    anime({
      targets: `#card-${props.id}`, // Class of the new task card
      translateX: [-100, 0], // Slide in from the left
      opacity: [0, 1], // Fade in
      duration: 500,
      easing: "easeOutQuad",
    });
  }, [props.todoText]);

  return (
    <>
      <div className="card bg-base-300 shadow-xl " id={`card-${props.id}`}>
        <div className="card-body flex-row items-center justify-center">
          <p>{props.id + "."}</p>
          <p>{editTask}</p>
          <button
            className="btn btn-outline btn-info"
            onClick={() =>
              document.getElementById(`modal-${props.id}`).showModal()
            }
          >
            Edit
          </button>
          <button
            className="btn btn-outline btn-error"
            onClick={() => deleteAnimation()}
          >
            Delete
          </button>
        </div>
      </div>
      <dialog
        id={`modal-${props.id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Please type your edit</h3>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs centered-text mt-3"
            onChange={(el) => setEditText(el.target.value)}
          />
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-outline btn-success me-3"
                onClick={() => handleEdit()}
              >
                Apply
              </button>
              <button className="btn btn-outline btn-error">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
