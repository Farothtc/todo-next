export function Task(props) {
  return (
    <>
      <div className="card bg-base-300 shadow-xl ">
        <div className="card-body flex-row items-center justify-center">
          <p>{props.id + "."}</p>
          <p>{props.todoText}</p>
          <button className="btn btn-outline btn-info">Edit</button>
          <button className="btn btn-outline btn-error">Delete</button>
        </div>
      </div>
    </>
  );
}
