import React from "react";

import "./TaskForm.css";
import Tag from "./Tag";
const TaskForm = ({ setTasks }) => {
  const [taskData, SetTaskData] = React.useState({
    task: "",
    status: "to do",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    SetTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      SetTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      SetTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const hanleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]);
    SetTaskData({
      task: "",
      status: "to do",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={hanleSubmit}>
        <input
          type="text"
          className="task_input"
          value={taskData.task}
          placeholder="Enter your task"
          onChange={handleChange}
          name="task"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              className="task_status"
              value={taskData.status}
              onChange={handleChange}
              name="status"
            >
              <option value="to do">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
