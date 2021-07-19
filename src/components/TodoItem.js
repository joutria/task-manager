import trash from "../img/trash.png";

function TodoItem({ obj, remover, updater }) {
  return (
    <>
      <div className="listObject" key={obj.id}>
        <div className="task">{obj.task}</div>
        <div className="student">Student: {obj.student}</div>
        <div className="complete">
          <input
            key={obj.id}
            type="checkbox"
            className="switch"
            checked={obj.isCompleted}
            onChange={(e) => {
              const dt = {
                task: obj.task,
                student: obj.student,
                isCompleted: e.target.checked,
              };
              updater(dt, obj.id);
            }}
          />
          {obj.isCompleted ? "Completed" : "Incomplete"}
        </div>
        <div className="buttons">
          <button
            className="delete"
            key={obj.id}
            onClick={() => remover(obj.id)}
          >
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
