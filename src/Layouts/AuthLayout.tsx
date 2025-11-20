import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useEffect } from "react";

function AuthLayout({onLogin}) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <div className="bg-gray-900 flex justify-center items-center h-screen">
        
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl font-extrabold 
  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent 
  drop-shadow-[0_0_10px_rgba(139,92,246,0.6)] hover:scale-105 transition-transform duration-300">
  My App
</div>

      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <Routes>
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default AuthLayout;
