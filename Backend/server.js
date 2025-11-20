const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const VALID_USERS = [
  { email: "george@hotmail.com", password: "123" },
  { email: "anna@gmail.com", password: "456" },
  { email: "test@example.com", password: "789" }
];

const loginAttempts = [];

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  loginAttempts.push({ email, password });

  const user = VALID_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    return res.json({ message: "Login successful", loginAttempts });
  }

  return res.status(400).json({ message: "Invalid email or password", loginAttempts });
});

app.get("/logins", (req, res) => {
  res.json(loginAttempts);
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  const existingUser = VALID_USERS.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  VALID_USERS.push({ email, password });

  loginAttempts.push({ email, password,  action: "signup" });

  return res.json({ message: "Signup successful", users: VALID_USERS });
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
