import { useState } from "react";

function TaskForm({ addTask }) {

  const [title, setTitle] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    addTask({
      title,
      description,
      dueDate,
    });

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form
      className="task-form"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;