import { useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoContainer({ info, setInfo, read, remove, update, getTasks }) {

  async function remover(id) {
    const obj = await remove(id);
    getTasks();
    return obj;
  }

  async function updater(dt, id) {
    const obj = await update(dt, id);
    getTasks();
    return obj;
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="TodoContainer">
      <h2>Task list</h2>
      {info &&
        info.todos.map((obj) => (
          <TodoItem obj={obj} remover={remover} updater={updater} />
        ))}
    </div>
  );
}

export default TodoContainer;
