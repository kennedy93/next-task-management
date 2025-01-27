import EditTaskForm from "@/components/EditTaskForm";
import connectDB from "@/config/database";
import Task from "@/models/Task";
import { notFound } from "next/navigation";
import React from "react";

const updateTaskPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  await connectDB();
  const task = await Task.findById(id);

  if (!task) return notFound(); 

  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Update Task</h2>
        <EditTaskForm task={task}/>
      </section>
    </>
  );
};

export default updateTaskPage;
