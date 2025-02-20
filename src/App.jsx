import React from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";
import "./App.css";

const oldTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = React.useState(JSON.parse(oldTasks) || []);

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          icon={Todo}
          title="Todo"
          tasks={tasks}
          status="to do"
          handleDelete={handleDelete}
        />
        <TaskColumn
          icon={Doing}
          title="Doing"
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          icon={Done}
          title="Done"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
