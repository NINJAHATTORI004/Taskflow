# Taskflow - Admin Task Assignment & Project Member Management

## Project Overview

Taskflow is a team task management application that enables administrators to:
- Create projects
- Manage project teams (add/remove members)
- Create and organize tasks in a Kanban board
- Assign tasks to team members
- Track task progress with status updates

## Features Implemented

### ✅ Phase 1: Admin Task Assignment (Completed in Previous Session)
- Admin authentication with JWT
- Kanban board with drag-and-drop
- Task assignment modal with team member selection
- Role-based UI visibility (Admin-only features)
- Task status updates (Todo → In Progress → Done)

### ✅ Phase 2: Project Management & Member Management (Current)
- Project creation by admins
- Team member management (add/remove members)
- Member list display with avatars and details
- Project-level team collaboration
- Persistent member data in MongoDB

## Technology Stack

### Frontend
- **React 19.0.0** - Modern UI framework with concurrent rendering
- **Vite 8.0.10** - Fast build tool with HMR
- **React Router 6.32.1** - Client-side navigation
- **Axios 1.7.9** - HTTP client with JWT interceptor
- **Tailwind CSS 3.4.1** - Utility-first styling

### Backend
- **Node.js + Express 4.21.2** - REST API server
- **MongoDB Atlas** - Cloud database
- **JWT** - Secure authentication
- **Middleware Pattern** - Auth and Admin role validation

### Deployment
- **Vercel** - Frontend hosting (automatic deployments from GitHub)
- **Railway** - Backend hosting (automatic deployments)
- **GitHub** - Version control and CI/CD integration

## End-to-End Workflow

### Step 1: Account Creation

#### Create Admin Account
```
1. Navigate to /signup
2. Enter details:
   - Name: Admin User
   - Email: admin@example.com
   - Password: AdminPass123!
   - Role: Admin (Full access)
3. Account created, auto-logged in
4. Redirected to Dashboard
```

#### Create Member Accounts
```
1. Logout from admin account
2. Navigate to /signup
3. Create first member:
   - Name: Team Member 1
   - Email: member1@example.com
   - Password: MemberPass123!
   - Role: Member (Can update tasks)
4. Copy Member ID from localStorage:
   - Open DevTools → Console
   - Run: JSON.parse(atob(localStorage.getItem('token').split('.')[1])).user.id
   - Save this ID
5. Repeat for additional members
```

### Step 2: Project Creation

```
1. Login as admin
2. Go to Dashboard
3. Click "+ New Project" button
4. Fill in project details:
   - Project Name: "Q3 Website Redesign"
   - Description: "Redesign company website with new branding"
5. Click "Create project"
6. Project appears in "Your Projects" grid
7. Click project to view details page
```

### Step 3: Member Management

```
1. In project detail page, scroll to "Team Members" section
2. Click "+ Add Member" button
3. Modal opens with "Add Team Member" form
4. Enter member's user ID (obtained in Step 1)
5. Click "Add Member"
6. Member appears in team list with:
   - Avatar (first letter of name)
   - Full name
   - Email address
   - Remove button (trash icon)
7. Repeat for additional members
8. To remove member: Click trash icon, confirm removal
```

### Step 4: Task Creation

```
1. In project detail page, TaskBoard section shows task columns:
   - Todo (left)
   - In Progress (center)
   - Done (right)
2. Create task (method depends on implementation):
   - Via API request: POST /api/tasks/:projectId
   - Via UI button (if implemented)
3. Task appears in "Todo" column
```

### Step 5: Task Assignment

```
1. Hover over task in Kanban board
2. "Assign" button appears (admin-only, 50% opacity)
3. Click "Assign" button
4. Assignment modal opens with:
   - "Assign to:" label
   - Dropdown of project team members
5. Select member to assign task
6. Task shows assignee's name/avatar
7. Member can now update task status
```

### Step 6: Task Management

```
1. Drag task between columns:
   - Drag from "Todo" → "In Progress"
   - Drag from "In Progress" → "Done"
   - Changes persist in database
2. Members see updated task status
3. Admins can reassign tasks or drag to different status
```

## User Roles and Permissions

### Admin Role
- ✅ Create projects
- ✅ Add/remove team members
- ✅ Create tasks
- ✅ Assign tasks to members
- ✅ Update task status
- ✅ View all project tasks

### Member Role
- ❌ Cannot create projects
- ❌ Cannot add/remove members
- ❌ Cannot create tasks
- ❌ Cannot assign tasks
- ✅ Can view assigned tasks
- ✅ Can update task status (drag-and-drop)

## API Endpoints

### Authentication
```
POST /api/auth/register
Body: { name, email, password, role }
Response: { token, user }

POST /api/auth/login
Body: { email, password }
Response: { token, user }
```

### Projects
```
GET /api/projects
Auth: Required
Response: Array of projects (created by or member of)

POST /api/projects
Auth: Required (Admin only)
Body: { name, description, teamMembers }
Response: { _id, name, description, createdBy, teamMembers }

PUT /api/projects/:id/members
Auth: Required (Admin only)
Body: { userId }
Response: Updated teamMembers array

DELETE /api/projects/:id/members/:memberId
Auth: Required (Admin only)
Response: Updated teamMembers array
```

### Tasks
```
GET /api/tasks/:projectId
Auth: Required
Response: Array of tasks

POST /api/tasks
Auth: Required (Admin only)
Body: { projectId, title, description, status, assignee }
Response: Created task

PUT /api/tasks/:id/assign
Auth: Required (Admin only)
Body: { userId }
Response: Updated task with assignee

PUT /api/tasks/:id
Auth: Required
Body: { status, ... }
Response: Updated task
```

## Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (Admin | Member),
  createdAt: Date
}
```

### Project Collection
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  createdBy: ObjectId (User ref),
  teamMembers: [ObjectId] (User refs),
  createdAt: Date
}
```

### Task Collection
```javascript
{
  _id: ObjectId,
  projectId: ObjectId (Project ref),
  title: String,
  description: String,
  status: String (Todo | In Progress | Done),
  assignee: ObjectId (User ref),
  createdBy: ObjectId (User ref),
  createdAt: Date
}
```

## Local Development Setup

### Prerequisites
- Node.js 16+
- MongoDB Atlas account
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/NINJAHATTORI004/Taskflow.git
cd Taskflow

# Backend setup
cd server
npm install
cp .env.example .env
# Edit .env with MongoDB URI and JWT secret
npm run dev

# Frontend setup (in new terminal)
cd client-vite
npm install
npm run dev

# Access application
# Frontend: http://localhost:5174
# Backend API: http://localhost:5000
```

### Environment Variables

**.env (server)**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskflow
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
NODE_ENV=development
```

## Testing Checklist

- [ ] User can create admin account
- [ ] User can create member accounts
- [ ] Admin can login and see dashboard
- [ ] Admin can create project
- [ ] Admin can add members to project
- [ ] Admin can remove members from project
- [ ] Admin can create tasks
- [ ] Admin can assign tasks to members
- [ ] Task assignment modal shows correct members
- [ ] Member can login and see assigned tasks
- [ ] Member can update task status via drag-and-drop
- [ ] Task status changes persist after refresh
- [ ] Unauthorized access returns 401/403

## Deployment Instructions

### Deploy to Vercel (Frontend)

```bash
# 1. Ensure code is pushed to GitHub
git add .
git commit -m "Add member management feature"
git push origin main

# 2. Vercel auto-deploys on push
# Check: https://github.com/NINJAHATTORI004/Taskflow/deployments

# 3. Verify deployment
# Visit: https://taskflow-frontend-three-kappa.vercel.app
```

### Deploy to Railway (Backend)

```bash
# 1. Ensure code is pushed to GitHub
# 2. Railway auto-deploys on push
# 3. Verify deployment via Railway dashboard
# Backend URL: https://taskflow-backend-production-8d5e.up.railway.app
```

## Files Modified in This Session

1. **client-vite/src/components/projects/Project.jsx**
   - Added Team Members UI section
   - Added member management modal
   - Added add/remove member handlers
   - Lines modified: ~150 lines added

2. **client-vite/src/services/projectService.js**
   - Added `addMember()` method
   - Added `removeMember()` method
   - Lines modified: ~15 lines added

## Demo Workflow (2-5 minutes)

### What to Show:
1. **Login** (20 sec)
   - Show login page
   - Admin credentials
   - Dashboard appears with 0 projects

2. **Create Project** (30 sec)
   - Click "+ New Project"
   - Fill name and description
   - Submit → Project appears in dashboard

3. **Add Members** (40 sec)
   - Click on project
   - Show "Team Members" section
   - Click "+ Add Member"
   - Enter member ID
   - Click "Add Member"
   - Show member appears in list

4. **Create Task** (30 sec)
   - Show empty TaskBoard
   - Create task (if UI implemented) or show via API
   - Task appears in "Todo" column

5. **Assign Task** (30 sec)
   - Hover over task
   - Click "Assign" button
   - Select member from dropdown
   - Task shows assignee

6. **Verify Member View** (30 sec)
   - Logout
   - Login as member
   - Show member sees task
   - Drag task to "In Progress"

Total Duration: ~3 minutes

## Key Features Highlights

✨ **Drag-and-Drop Task Management** - Intuitive Kanban board interface
👥 **Team Collaboration** - Add multiple members to projects
🔐 **Role-Based Access** - Admin and Member roles with specific permissions
🔄 **Real-Time Updates** - Tasks persist immediately
📱 **Responsive Design** - Works on desktop and mobile
🎨 **Modern UI** - Tailwind CSS with gradient backgrounds

## Support & Documentation

- **Frontend Code**: `client-vite/src/`
- **Backend Code**: `server/`
- **API Documentation**: See API Endpoints section above
- **Database**: MongoDB Atlas (cloud)

## Future Enhancements

1. User search/autocomplete for member selection
2. Project settings and visibility options
3. Task comments and activity feed
4. Email notifications for task assignments
5. Task priority and due dates
6. Progress analytics and reporting
7. Team permissions and task visibility levels
8. Bulk task operations

---

## Quick Start Command

```bash
# Terminal 1: Backend
cd server && npm run dev

# Terminal 2: Frontend
cd client-vite && npm run dev

# Open http://localhost:5174 in browser
```

**Built with ❤️ using React, Node.js, and MongoDB**
