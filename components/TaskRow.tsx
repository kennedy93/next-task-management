import React from "react";
import DeleteDialog from "@/components/DeleteDialog";
import ActionDialog from "./ActionDialog";
import Link from "next/link";

interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskRowProps {
  task: Task;
  onTaskCompleted: (
    id: string
  ) => Promise<{ success: boolean; message: string }>;
  onDelete: (id: string) => Promise<{ success: boolean; message: string }>;
}

const TaskRow = ({ task, onTaskCompleted, onDelete }: TaskRowProps) => {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="px-4 py-3">{task.title}</td>
      <td className="px-4 py-3">{task.description}</td>
      <td className="px-4 py-3 text-center">
        {task.completed ? (
          <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
            Completed
          </span>
        ) : (
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
            In Progress
          </span>
        )}
      </td>
      <td className="px-4 py-3 flex space-x-2 justify-center">
        <Link
          href={`/tasks/${task._id}/edit`}
          className="bg-blue-600 text-white py-1 px-3 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Edit
        </Link>

        {task.completed === false ? (
          <ActionDialog
            id={task._id.toString()}
            title="Complete"
            message="Are you sure you want to complete this task?"
            action={onTaskCompleted}
          />
        ) : (
          <button
            type="button"
            className="bg-gray-400 text-white py-1 px-3 rounded-lg text-sm"
            disabled
          >
            Complete
          </button>
        )}
        <DeleteDialog id={task._id.toString()} action={onDelete} />
      </td>
    </tr>
  );
};

export default TaskRow;
