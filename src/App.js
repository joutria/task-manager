import "./App.css";
import { useState } from "react";
import { read, remove, update } from "./services/services";

import TodoContainer from "./components/TodoContainer";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [info, setInfo] = useState();
  function getTasks() {
    read().then((response) => setInfo(response));
  }

  return (
    <div className="App">
      <h1>Team Task Manager</h1>
      <CreateTodo setInfo={setInfo} read={read} getTasks={getTasks}/>
      <TodoContainer
        info={info}
        setInfo={setInfo}
        read={read}
        remove={remove}
        update={update}
        getTasks={getTasks}
      />
    </div>
  );
}

export default App;
