

Features
1. Authentication
login page that takes email and password , we save them in local storage for future login with a popup notification alert

Signup Page:
in signup page user create account using full name ,email and pwd, if registered successfully it takes us to login page and credentials are saved in local storage

2. Splash Screen:
we used splash screeem to show when the dashboard inilialized and when logged in also we used controlled timer and duration 

3. Main Layout

in the main Layout we used navbar sidebar main and footer including in a navbar a student i used popup/stepper
that pop notification and add student name and last name in a table 

4. Navbar
in the navbar we have home, student and login icon that takes us back to the login page usuing triggers and callback

5. User Table

in the user table it display student and here expectionally users and email since i used backend to fetech the email and password, dynamic updates usimg popup stepper , and styled in a very very very very normal table

6. Student Popup Stepper

Provides  stepper  to add students.
Collect student information first name, last name

8. Persistent Storage

LocalStorage is used to save login and signup credentials and stored in json format and credentials load when user revists

9. Notifications and Popups

Login success or failure.
Signup success or failure.

10. Styling and Design

Splash screen, popups, table, and button.

11. Backend Integration

Connects to a backend server for login and signup endpoints.
Sends POST requests to validate credentials or create new accounts.


12. Dependencies and Tools
React: Functional components and hooks useState, useEffect, useContext.
React Router Dom: For page navigation.
Material-UI: Popups, alerts, stepper/modal.
Tailwind CSS: Styling.
LocalStorage: Persistent credential storage.

Chatgpt link :https://chatgpt.com/share/691f4560-3854-800b-b5af-85f4545df39a
