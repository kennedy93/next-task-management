import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <LoadingSpinner />
        <p className="mt-4 text-lg font-medium text-gray-700">
          Loading, Please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
