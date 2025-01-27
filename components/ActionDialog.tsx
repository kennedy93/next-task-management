"use client";
import React, { useTransition } from "react";

const ActionDialog = ({
  id,
  title = 'Action',
  message = 'Are you sure you want to delete this task?',
  action,
}: {
  id: string;
  title?: string;
  message?: string;
  action: (id: string) => Promise<{ success: boolean; message: string }>;
}) => {
  const [isPending, startTransition] = useTransition();

  const handleActionClick = () => {
    startTransition(async () => {
      const confirmed = window.confirm(message);
  
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
      className="bg-green-600 text-white py-1 px-3 rounded-lg text-sm hover:bg-green-700 transition"
      disabled={isPending}
      onClick={handleActionClick}
    >
      {title}
    </button>
  );
};

export default ActionDialog;
