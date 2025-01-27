"use client";
import React, { useTransition } from "react";

const DeleteDialog = ({
  id,
  title = 'Delete',
  action,
}: {
  id: string;
  title?: string;
  action: (id: string) => Promise<{ success: boolean; message: string }>;
}) => {
  const [isPending, startTransition] = useTransition();

  const handleDeleteClick = () => {
    startTransition(async () => {
      const confirmed = window.confirm(
        "Are you sure you want to delete this task?"
      );
  
      if (!confirmed) return;
      
      const res = await action(id);

      if (!res.success) {
        console.log(res.message);
      } else {
        console.log(res.message);
      }
    });
  };

  return (
    <button
      type="button"
      className="bg-red-600 text-white py-1 px-3 rounded-lg text-sm hover:bg-red-700 transition"
      disabled={isPending}
      onClick={handleDeleteClick}
    >
      {title}
    </button>
  );
};

export default DeleteDialog;
