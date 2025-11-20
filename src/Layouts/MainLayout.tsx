import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StudentStepper from "../components/StudentStepper";

function MainLayout({ onLogout }) {
  const [isHidden, setIsHidden] = useState(false);
  const [loading, setLoading] = useState(true); 
  const title = "My App";
  const [openStudentStepper, setOpenStudentStepper] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center">
        <p className="text-3xl font-bold mb-4">Welcome back!</p>
        <p className="text-lg">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <div>
        <Navbar
          title={title}
          onSidebarHide={() => setIsHidden(!isHidden)}
          onLogout={onLogout}
          onOpenStudentStepper={() => setOpenStudentStepper(true)}
        />
        {/* Student Stepper Popup */}
        <StudentStepper
          open={openStudentStepper}
          onClose={() => setOpenStudentStepper(false)}
        />
      </div>

      <div className="grid grid-cols-7">
        <div className={isHidden ? "hidden" : "block"}>
          <Sidebar />
        </div>
        <div className="col-span-6">
          <Main />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
