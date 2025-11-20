
import { useState, useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { UserContext } from "./User_Context";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [openErrorPopup, setOpenErrorPopup] = useState(false);
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const [emailValue, setEmailValue] = useState(""); 
  const [passwordValue, setPasswordValue] = useState("");

  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    const savedCredentials = localStorage.getItem("rememberMeCredentials");
    if (savedCredentials) {
      const parsed = JSON.parse(savedCredentials);
      setEmailValue(parsed.email || "");
      setPasswordValue(parsed.password || "");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        setOpenErrorPopup(true);
        return;
      }

      const credentials = { email, password };
      localStorage.setItem("rememberMeCredentials", JSON.stringify(credentials));

      setUsers([...users, { email, password }]); 
      onLogin();

      setSuccessMsg("Credentials saved for next login!");
      setOpenSuccessPopup(true);
    } catch (err) {
      setError("Server error");
      setOpenErrorPopup(true);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Snackbar
        open={openErrorPopup}
        autoHideDuration={3000}
        onClose={() => setOpenErrorPopup(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" onClose={() => setOpenErrorPopup(false)}>
          {error}
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSuccessPopup}
        autoHideDuration={3000}
        onClose={() => setOpenSuccessPopup(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" onClose={() => setOpenSuccessPopup(false)}>
          {successMsg}
        </Alert>
      </Snackbar>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-100">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-100 mt-4">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-white"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{" "}
          <button onClick={() => navigate("/signup")} className="text-indigo-400 font-semibold hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
