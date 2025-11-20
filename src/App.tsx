import { useState, useEffect } from "react";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";
import { UserProvider } from "./components/User_Context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
        <p className="text-3xl font-bold mb-2">Welcome</p>
        <p className="text-lg text-gray-300">Loading your app...</p>
        <div className="mt-6 w-12 h-12 border-4 border-white border-t-indigo-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <UserProvider>
      {isLoggedIn ? (
        <MainLayout
          onLogout={() => {
            setIsLoggedIn(false);
          }}
        />
      ) : (
        <AuthLayout onLogin={() => setIsLoggedIn(true)} />
      )}
    </UserProvider>
  );
}

export default App;
