# DEMO VIDEO SCRIPT - Team Task Manager
# Duration: 2-5 minutes
# Record at: http://localhost:5173 or your live URL

================================================================================
DEMO VIDEO SCRIPT (2-5 MINUTES)
================================================================================

INTRO (10 seconds):
"Hi! I'm demonstrating the Team Task Manager - a full-stack web application 
that allows teams to create projects, assign tasks, and track progress with 
role-based access control."

================================================================================
PART 1: USER SIGNUP & AUTHENTICATION (30 seconds)
================================================================================

ACTION: Go to signup page
NARRATE: "First, let me show you the signup process. Users can create an 
account with their name, email, password, and select their role - Admin or 
Member."

ACTION: Fill signup form:
- Name: "John Admin"
- Email: "john.admin@company.com"
- Password: "SecurePass123"
- Role: "Admin"

ACTION: Click "Sign up" button

NARRATE: "The form validates all inputs and securely stores the password 
with bcryptjs encryption. After signup, the user is redirected to login."

ACTION: On login page, enter credentials:
- Email: "john.admin@company.com"
- Password: "SecurePass123"

ACTION: Click "Sign in"

NARRATE: "Authentication uses JWT tokens stored securely in the browser. 
The token is automatically sent with every API request for seamless user 
experience."

================================================================================
PART 2: DASHBOARD OVERVIEW (20 seconds)
================================================================================

ACTION: Navigate to dashboard

NARRATE: "After login, users see their personalized dashboard with real-time 
statistics. We can see:
- Total Tasks: number of all tasks assigned to projects
- Completed Tasks: tasks with 'Done' status
- Overdue Tasks: tasks past their due date
- Project List: all projects the user is part of"

ACTION: Scroll down to show projects section

NARRATE: "The dashboard provides a quick overview of all your projects and 
tasks at a glance."

================================================================================
PART 3: PROJECT & TASK MANAGEMENT (60 seconds)
================================================================================

ACTION: Click on a project or show project creation

NARRATE: "As an Admin, I can create new projects. Projects are containers 
for related tasks and have team members assigned to them."

ACTION: Show project page with task board

NARRATE: "Here's the main project page. The interface shows a Kanban board 
with three columns: Todo, In Progress, and Done. This visual system helps 
track task progress."

ACTION: Show tasks in different statuses

NARRATE: "I can see tasks in different stages. Red-highlighted tasks are 
overdue. This visual indicator helps team members prioritize work."

ACTION: Drag a task from "Todo" to "In Progress"

NARRATE: "Tasks can be dragged between columns to update their status. 
This is a quick way to reflect current work status."

ACTION: Drag another task to "Done"

NARRATE: "Moving a task to 'Done' marks it as complete. The dashboard will 
automatically update the 'Completed Tasks' count."

ACTION: If possible, show task details (click on a task)

NARRATE: "Each task has details like title, description, assignee, and 
due date. Admins can assign tasks to specific team members and set deadlines."

================================================================================
PART 4: ROLE-BASED ACCESS CONTROL (40 seconds)
================================================================================

ACTION: Click Logout button

NARRATE: "The JWT token is cleared from the browser when logging out. 
Now let me create a different user with Member role to show how role-based 
access works differently."

ACTION: Go back to signup

NARRATE: "I'll create a Member account now."

ACTION: Create new account:
- Name: "Sarah Member"
- Email: "sarah.member@company.com"
- Password: "SecurePass123"
- Role: "Member"

ACTION: Sign up and login

NARRATE: "As a Member, I have limited permissions. Members cannot:
- Create new projects
- Add/remove team members
- Create new tasks
- Assign tasks to others

Members can only:
- View projects they're assigned to
- Update task status (move tasks between columns)
- View project information"

ACTION: Try to create a project (show that it's disabled/restricted)

NARRATE: "As you can see, only Admin users have the option to create 
projects. This role-based access control ensures proper governance and 
prevents unauthorized actions."

ACTION: Show task status update as Member

NARRATE: "Members can still contribute by updating task status as they 
work. This keeps everyone on the same page about progress."

================================================================================
PART 5: TECHNICAL FEATURES (30 seconds)
================================================================================

ACTION: Open browser developer console (F12)

NARRATE: "Let me show some technical features working behind the scenes. 
The application:

1. Uses JWT authentication - the token is stored in localStorage
2. Makes REST API calls to the backend
3. Validates all form inputs before submission
4. Shows real-time error messages
5. Handles loading states during API calls
6. Uses MongoDB for persistent data storage"

ACTION: Show Network tab with API calls

NARRATE: "You can see the API calls being made to:
- /api/auth/login - for authentication
- /api/projects - to fetch projects
- /api/tasks - to fetch and update tasks

Each request includes the JWT token in the headers for authorization."

ACTION: Close developer console

================================================================================
PART 6: RESPONSIVE DESIGN & ERROR HANDLING (20 seconds)
================================================================================

ACTION: Try submitting a form with invalid data

NARRATE: "The application includes proper form validation. Try entering an 
invalid email or leaving required fields empty - you'll see clear error messages."

ACTION: Resize browser to show mobile responsiveness

NARRATE: "The interface is fully responsive and works great on desktop, 
tablet, and mobile devices. The layout adapts automatically for different 
screen sizes."

================================================================================
PART 7: DATABASE & DATA PERSISTENCE (15 seconds)
================================================================================

ACTION: Logout and login again

NARRATE: "All data is persisted in MongoDB Atlas, our cloud database. 
When I log back in, all my projects and tasks are still there. The database 
maintains proper relationships between:
- Users and their accounts
- Projects and team members
- Tasks and their assignments
- Task status history"

================================================================================
PART 8: SUMMARY & LIVE URL (20 seconds)
================================================================================

NARRATE: "To summarize, the Team Task Manager includes:

✅ Complete authentication system with role-based access
✅ Project and task management
✅ Real-time dashboard with statistics
✅ Kanban board with drag-and-drop
✅ Secure JWT authentication
✅ MongoDB cloud database
✅ Responsive design
✅ Production-ready deployment

The application is now deployed and accessible at:
[SHOW LIVE URL]

You can test it with:
- Admin Account: admin@test.com / password123
- Member Account: member@test.com / password123

Or create your own account right now!

The source code is available on GitHub:
https://github.com/NINJAHATTORI004/Taskflow

Thank you for watching!"

================================================================================
RECORDING TIPS
================================================================================

✅ Test all features before recording
✅ Use a calm, clear voice
✅ Speak at a steady pace
✅ Don't rush - take time to explain each feature
✅ Show errors and validation messages
✅ Mention the technology stack
✅ Display the GitHub repository URL
✅ Share the live URL at the end
✅ Keep video between 2-5 minutes
✅ Use screen recording software (OBS, Loom, etc.)
✅ Include audio explanation
✅ Show successful operations and error handling
✅ Demonstrate role-based differences

RECORDING SOFTWARE OPTIONS:
- OBS Studio (Free, Windows/Mac/Linux)
- Loom (Free, Browser-based)
- ScreenFlow (Mac)
- Camtasia (Windows/Mac)
- Bandicam (Windows)

FILE FORMAT:
- Supported: MP4, MOV, AVI, MKV
- Size limit: Max 1 GB
- Quality: 1080p HD recommended
- Audio: Clear and audible

UPLOAD LOCATION:
- Google Forms will ask for this in submission

================================================================================
ALTERNATIVE SHORTER DEMO (2 minutes)
================================================================================

INTRO: "Team Task Manager - Full Stack App"

PART 1 - SIGNUP/LOGIN (20 sec):
- Show signup process
- Show login process
- Mention JWT authentication

PART 2 - MAIN FEATURES (60 sec):
- Dashboard with stats
- Project and tasks
- Kanban board with drag-and-drop
- Show overdue task highlighting
- Show Admin creating task
- Show Member updating status

PART 3 - SUMMARY (20 sec):
- List features
- Show live URL
- GitHub repository
- Thank you

================================================================================
KEY POINTS TO MENTION
================================================================================

✅ Full-stack development (React + Node.js)
✅ NoSQL database (MongoDB)
✅ REST APIs with proper error handling
✅ JWT-based authentication
✅ Role-based access control
✅ Real-time dashboard
✅ Production-ready code
✅ Deployed on Railway/Vercel
✅ Responsive design
✅ Data persistence

================================================================================
COMMON QUESTIONS TO ADDRESS IN DEMO
================================================================================

Q: How does authentication work?
A: Users sign up with email/password. Password is securely hashed. When 
logging in, we verify credentials and generate a JWT token that's stored 
in the browser.

Q: How are users differentiated?
A: During signup, users select Admin or Member role. The backend checks 
this role on protected endpoints.

Q: How is data persistent?
A: We use MongoDB Atlas cloud database. All data is stored there and 
remains available after logout/login.

Q: How does role-based access work?
A: Middleware checks user role on protected endpoints. Admin users have 
access to project/task creation. Members can only update status.

Q: Is it secure?
A: Yes! We use bcryptjs for password hashing, JWT for authentication, 
proper validation, CORS for security, and cloud database backups.

Q: Can it scale?
A: Yes! The architecture supports scaling. We use MongoDB Atlas (auto-scaling), 
REST APIs (stateless), and can add more servers.

================================================================================
END OF SCRIPT
================================================================================
