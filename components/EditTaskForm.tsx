import React from "react";
import { updateTask } from "@/actions/TaskAction";

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

const EditTaskForm = ({ task }: { task: Task }) => {
  const updateTaskById = updateTask.bind(null, task._id.toString());

  return (
    <>
      <form
        action={updateTaskById}
        id="updateTaskForm"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          id="taskTitle"
          name="title"
          defaultValue={task.title}
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          placeholder="Task Title"
          required
        />
        <textarea
          id="taskDescription"
          name="description"
          defaultValue={task.description}
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500"
          placeholder="Task Description"
        ></textarea>
        <select
          id="taskCompleted"
          name="completed"
          className="border border-gray-300 rounded-lg p-2 "
          defaultValue={task.completed.toString()}
          required
        >
          <option value="true">Completed</option>
          <option value="false">In Progress</option>
        </select>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Update Task
        </button>
      </form>
    </>
  );
};

export default EditTaskForm;
