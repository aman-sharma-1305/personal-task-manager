import { useState, useEffect } from "react";
import axios from "axios";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const API = "http://localhost:5001/api/tasks";

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);

      const response = await axios.get(API);

      setTasks(response.data);
      setError("");
    } catch (error) {
      setError("Failed to load tasks.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add Task
  const addTask = async (task) => {
    try {
      await axios.post(API, task);

      setMessage("✅ Task added successfully");

      fetchTasks();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setError("Failed to add task.");
      console.error(error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/${id}`);

      setMessage("🗑️ Task deleted");

      fetchTasks();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setError("Failed to delete task.");
      console.error(error);
    }
  };

  // Toggle Complete
  const toggleTask = async (task) => {
    try {
      await axios.put(`${API}/${task.id}`, {
        completed: !task.completed,
      });

      fetchTasks();
    } catch (error) {
      setError("Failed to update task.");
      console.error(error);
    }
  };

  // Edit Task
  const editTask = async (id, updatedTask) => {
    try {
      await axios.put(
        `${API}/${id}`,
        updatedTask
      );

      setMessage("✏️ Task updated");

      fetchTasks();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setError("Failed to update task.");
      console.error(error);
    }
  };

  // Filter Tasks
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "active") {
        return !task.completed;
      }

      if (filter === "completed") {
        return task.completed;
      }

      return true;
    })
    .filter((task) =>
      task.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  // Statistics
  const activeCount = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>🚀 TaskFlow</h1>

        <p>
          Organize your work and stay productive
        </p>
      </div>

      {/* Notifications */}
      {message && (
        <div className="success">
          {message}
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {/* Statistics */}
      <div className="stats">
        <span>
          ✅ Active: {activeCount}
        </span>

        <span>
          ✔️ Completed: {completedCount}
        </span>
      </div>

      {/* Search */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* Filter */}
      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      {/* Add Task Form */}
      <TaskForm addTask={addTask} />

      {/* Loading / Empty / Tasks */}
      {loading ? (
        <div className="loading">
          Loading Tasks...
        </div>
      ) : filteredTasks.length === 0 ? (
        <div className="empty">
          No Tasks Found 🚀
        </div>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />
      )}

      {/* Footer */}
      <footer className="footer">
        Built with React + Node.js + JSON
      </footer>
    </div>
  );
}

export default App;