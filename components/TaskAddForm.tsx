import React from "react";
import { addTask } from "@/actions/TaskAction";

const TaskAddForm = () => {
  return (
    <>
      <form action={addTask} id="addTaskForm" className="flex flex-col gap-4">
        <input
          type="text"
          id="taskTitle"
          name="title"
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          placeholder="Task Title"
          required
        />
        <textarea
          id="taskDescription"
          name="description"
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          placeholder="Task Description"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default TaskAddForm;
