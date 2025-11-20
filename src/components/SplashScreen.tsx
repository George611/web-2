import React from "react";

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
      <p className="text-3xl font-bold mb-2">Welcome Back!</p>
      <p className="text-lg text-gray-300">Loading your dashboard...</p>
      <div className="mt-6 w-12 h-12 border-4 border-white border-t-indigo-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default SplashScreen;
