import React from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn icon={Todo} title="Todo" />
        <TaskColumn icon={Doing} title="Doing" />
        <TaskColumn icon={Done} title="Done" />
      </main>
    </div>
  );
}

export default App;
