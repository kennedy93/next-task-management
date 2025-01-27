import connectDB from "@/config/database";
import {deleteTask, taskCompleted} from "@/actions/TaskAction";
import Task from "@/models/Task";
import React from "react";
import TaskRow from "@/components/TaskRow";

const TaskListPage = async () => {
  await connectDB();
  const tasks = await Task.find({});

  return (
    <>
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">My Tasks</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Title
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600">
                  Description
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">
                  Status
                </th>
                <th className="px-4 py-2 text-sm font-semibold text-gray-600 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskRow key={task._id} task={task} onTaskCompleted={taskCompleted} onDelete={deleteTask} />
                // <tr key={task._id} className="border-t hover:bg-gray-50">
                //   <td className="px-4 py-3">{task.title}</td>
                //   <td className="px-4 py-3">{task.description}</td>
                //   <td className="px-4 py-3 text-center">
                //     {task.completed === false ? (
                //       <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                //         In Progress
                //       </span>
                //     ) : (
                //       <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                //         Completed
                //       </span>
                //     )}
                //   </td>
                //   <td className="px-4 py-3 flex space-x-2 justify-center">
                //     <Link
                //       href={`/tasks/${task._id}/edit`}
                //       className="bg-blue-600 text-white py-1 px-3 rounded-lg text-sm hover:bg-blue-700 transition"
                //     >
                //       Edit
                //     </Link>

                //     {task.completed === false ? (
                //       <ActionDialog
                //         id={task._id.toString()}
                //         title="Complete"
                //         message="Are you sure you want to complete this task?"
                //         action={taskCompleted}
                //       />
                //     ) : (
                //       <button
                //         type="button"
                //         className="bg-gray-400 text-white py-1 px-3 rounded-lg text-sm"
                //         disabled
                //       >
                //         Complete
                //       </button>
                //     )}
                //     <DeleteDialog
                //       id={task._id.toString()}
                //       action={deleteTask}
                //     />
                //   </td>
                // </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default TaskListPage;
