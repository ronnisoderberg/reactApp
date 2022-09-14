import React, { useState } from "react";

import Form from "../components/Form";
import Todo from "../components/Todo";

export  function TodoPage() {
  const [todo, setTodo] = useState([]);

  const [formInput, setFormInput] = useState("");

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput !== "") {
      const date = new Date().toLocaleDateString();
      const newTask = {
        date: date,
        task: formInput,
        completed: false,
      };
      setTodo([...todo, newTask]);
      setFormInput("");
    }
  };

  const handleComplete = (index) => {
    const newTasks = [...todo];
    if (newTasks[index].completed === false) {
      newTasks[index].completed = true;
    } else {
      newTasks[index].completed = false;
    }
    setTodo(newTasks);
  };

  const handleRemove = (index) => {
    const newTasks = [...todo];
    newTasks.splice(index, 1);
    setTodo(newTasks);
  };

  return (
    <div className="test">
        <Form
          formInput={formInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Todo
          tasks={todo}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
        />
      </div>
  );
}

