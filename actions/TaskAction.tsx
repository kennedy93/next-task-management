"use server";

import connectDB from "@/config/database";
import Task from "@/models/Task";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

export async function addTask(formData: FormData) {
  await connectDB();
  const taskData = {
    title: formData.get("title"),
    description: formData.get("description"),
    completed: false,
  };
  const task = new Task(taskData);
  await task.save();

  revalidatePath("/", "layout");

  redirect("/tasks");
}

export async function updateTask(
  taskId: string,
  formData: FormData
): Promise<void> {
  await connectDB();

  const taskData = {
    title: formData.get("title"),
    description: formData.get("description"),
    completed: formData.get("completed"),
  };

  const updatedTask = await Task.findByIdAndUpdate(taskId, taskData);

  revalidatePath("/", "layout");

  redirect("/tasks");
}

export async function deleteTask(
  taskId: string
): Promise<{ success: boolean; message: string }> {
  try {
    await connectDB();

    const task = Task.findById(taskId);
    if (!task) throw new Error("Task Not Found");

    await task.deleteOne();

    revalidatePath("/tasks");

    return {
      success: true,
      message: "Task deleted successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function taskCompleted(
  taskId: string
): Promise<{ success: boolean; message: string }> {
  try {
    await connectDB();

    await Task.findByIdAndUpdate(taskId, { completed: true });

    revalidatePath("/tasks");

    return {
      success: true,
      message: "Task Completed",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Utility function for error formatting
function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}
