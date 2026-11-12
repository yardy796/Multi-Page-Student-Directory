"use client";

import { useState } from "react";

export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleAddTask(event) {
    event.preventDefault();
    const title = taskTitle.trim();

    if (!title) {
      setErrorMessage("Task title cannot be empty!");
      return;
    }

    const newTask = {
      id: `${Date.now()}-${title}`,
      title,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTaskTitle("");
    setErrorMessage("");
  }

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-xs uppercase tracking-widest text-sumi/50">
        Prefinal Lab Activity
      </p>
      <h1 className="mt-1 text-3xl font-bold">Interactive Task Tracker</h1>
      <p className="mt-2 text-sumi/60">
        Add tasks, mark them complete, or remove them from your list.
      </p>

      <form
        onSubmit={handleAddTask}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="task-title" className="sr-only">
          Task title
        </label>
        <input
          id="task-title"
          type="text"
          placeholder="Enter a task..."
          value={taskTitle}
          onChange={(event) => {
            setTaskTitle(event.target.value);
            if (errorMessage) {
              setErrorMessage("");
            }
          }}
          className="min-w-0 flex-1 border border-sumi/30 bg-kinari px-4 py-3 outline-none transition focus:border-shu"
        />
        <button
          type="submit"
          className="border border-sumi bg-sumi px-5 py-3 text-sm uppercase tracking-widest text-washi transition hover:bg-shu"
        >
          Add Task
        </button>
      </form>

      {errorMessage && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <h2 className="mb-4 mt-10 border-b border-sumi/20 pb-2 text-sm uppercase tracking-widest text-sumi/60">
        My Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="border-l-4 border-shu bg-kinari p-4 text-sumi/60">
          No tasks added yet. Start by creating one above!
        </p>
      ) : (
        <ul className="divide-y divide-sumi/20 border-y border-sumi/20">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between gap-4 py-4"
            >
              <button
                type="button"
                onClick={() => toggleTask(task.id)}
                className={`text-left transition hover:text-shu ${
                  task.completed ? "text-sumi/50 line-through" : ""
                }`}
              >
                {task.title}
              </button>
              <button
                type="button"
                onClick={() => deleteTask(task.id)}
                className="shrink-0 text-xs uppercase tracking-widest text-sumi/60 transition hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
