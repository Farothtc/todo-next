"use client";
import { useState } from "react";

export function Task(props) {
  const [editText, setEditText] = useState([]);
  const [editTask, setEditTask] = useState(props.todoText);

  console.log(editTask);

  const handleEdit = () => {
    if (editText.trim()) {
      setEditTask(editText);
      setEditText("");
    }
  };
  return (
    <>
      <div className="card bg-base-300 shadow-xl ">
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
                    className="btn btn-outline btn-success"
                    onClick={() => handleEdit()}
                  >
                    Apply
                  </button>
                  <button className="btn btn-outline btn-error">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
          <button className="btn btn-outline btn-error">Delete</button>
        </div>
      </div>
    </>
  );
}
