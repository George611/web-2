Overview

This project is a React-based dashboard designed for user (student) management. It includes authentication (login/signup), a splash screen, global state management, and a dynamic table to display and manage users. The app emphasizes UX-friendly features like popups, modals, and persistent storage.

Features
1. Authentication

Login Page: Users enter email and password to log in. Credentials are saved locally for future logins. Success and error notifications are displayed through popup alerts.

Signup Page: Users can create a new account by entering full name, email, and password. Successful registration redirects to the login page, and credentials are stored locally.

2. Splash Screen

A splash screen is shown when the dashboard initializes.

Displays a welcome message and loading indicator while the app prepares the main interface.

Duration and display are controlled using timers.

3. Main Layout

Core layout includes a Navbar, Sidebar, Main Content Area, and Footer.

Responsive grid layout organizes the dashboard efficiently.

Sidebar can be toggled to hide or show.

Includes integration with a student addition popup/stepper.

4. Navbar

Displays the application title.

Navigation links: Home, Add Student, Logout.

Add Student triggers a popup stepper to add new users to the table.

Logout triggers a callback to return to the login page.

5. User Table

Displays users/students with their email and password.

Dynamic updates when new users are added through either popup stepper or inline addition.

Styled using a table with alternating row colors for readability.

6. Student Popup Stepper

Provides a modal or stepper interface to add students.

Collects student information (first name, last name) and adds it to the global user table.

Integrated with the main layout for seamless UX.

7. Global State Management

React Context is used to manage user state globally across the application.

Users added are available in all components that consume the context.

Facilitates centralized updates and avoids prop-drilling.

8. Persistent Storage

LocalStorage is used to save login and signup credentials.

Data is stored in JSON format for easy retrieval.

Credentials are loaded automatically when the user revisits the login page.

9. Notifications and Popups

Popups inform users of:

Login success or failure.

Signup success or failure.

Adding a student.

Enhances UX and gives immediate feedback to user actions.

10. Styling and Design

Tailwind CSS is used for responsive and modern styling.

Splash screen, popups, table, and buttons follow a consistent theme.

Colors and typography are chosen for clarity and readability.

11. Backend Integration

Connects to a backend server for login and signup endpoints.

Sends POST requests to validate credentials or create new accounts.

Handles server responses to provide user feedback.

12. Dependencies and Tools

React: Functional components and hooks (useState, useEffect, useContext).

React Router Dom: For page navigation.

Material-UI: Popups, alerts, stepper/modal.

Tailwind CSS: Styling.

LocalStorage: Persistent credential storage.

13. User Flow

User opens the app → splash screen displays.

User navigates to Login or Signup page.

Credentials are saved to local storage.

Upon login, user is redirected to the dashboard.

Dashboard shows a table of users and provides the ability to add new students via a popup stepper.

Logout returns the user to the login page.

