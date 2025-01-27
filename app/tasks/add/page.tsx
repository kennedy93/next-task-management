'use client';
import React from "react";
import TaskAddForm from "@/components/TaskAddForm";

const NewTaskPage = () => {
  return (
    <>
      <section className="bg-white rounded-lg shadow p-6 mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add a New Task</h2>
        <TaskAddForm />
      </section>
    </>
  );
};

export default NewTaskPage;
