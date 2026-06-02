function TaskCard({
  task,
  onDelete,
  onToggle,
}) {

  const overdue =
    task.dueDate &&
    !task.completed &&
    new Date(task.dueDate) <
      new Date();

  return (
    <div
      className={`task-card
      ${overdue ? "overdue" : ""}
      ${task.completed ? "completed" : ""}
      `}
    >
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        📅 Due Date:
        {" "}
        {task.dueDate
          ? task.dueDate
          : "No Due Date"}
      </p>

      <p>
        Status:
        {" "}
        {task.completed
          ? "✅ Completed"
          : "⏳ Active"}
      </p>

      <div className="task-actions">

        <button
          onClick={() =>
            onToggle(task)
          }
        >
          {task.completed
            ? "Mark Active"
            : "Mark Complete"}
        </button>

        <button
          onClick={() =>
            onDelete(task.id)
          }
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;