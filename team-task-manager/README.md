# Team Task Manager

A lightweight team productivity system with real-time task ownership, role-based workflows, and actionable dashboards.

## Features
- ✅ Authentication (JWT)
- 👥 Role-based access (Admin/Member)
- 📋 Project & Task Management
- 📊 Dashboard insights
- 🎯 Kanban board with drag-and-drop functionality
- 🚨 Overdue task highlighting
- 🛡️ Secure API endpoints
- 📱 Responsive design with Tailwind CSS

## Tech Stack
- **Frontend:** React 19, Vite, Tailwind CSS, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **API Client:** Axios

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Live Demo
[Link to be added after deployment]

## API Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/projects` - Get all projects for user
- `POST /api/projects` - Create new project (Admin only)
- `PUT /api/projects/:id/members` - Add member to project (Admin only)
- `DELETE /api/projects/:id/members/:memberId` - Remove member from project (Admin only)
- `POST /api/tasks` - Create new task (Admin only)
- `GET /api/tasks/project/:projectId` - Get tasks for a project
- `PUT /api/tasks/:id/status` - Update task status
- `PUT /api/tasks/:id/assign` - Assign task to user (Admin only)

## Setup Instructions

### 1. Clone the repository
```bash
git clone <repository-url>
cd team-task-manager
```

### 2. Backend Setup
```bash
cd server
npm install

# Create a .env file from .env.example
cp .env.example .env

# Update .env with your MongoDB URI and JWT Secret
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
# JWT_SECRET=your_secret_key

# Start the backend server
npm start
# or for development with auto-reload
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup (in a new terminal)
```bash
cd client-vite
npm install

# Create a .env file from .env.example
cp .env.example .env

# Start the frontend development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/team-task-manager
JWT_SECRET=your_jwt_secret_key_change_this_in_production
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Project Structure
```
team-task-manager/
├── server/
│   ├── config/          # Configuration files
│   ├── controllers/     # Business logic
│   ├── middleware/      # Auth and admin middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── index.js         # Server entry point
│   └── package.json
│
└── client-vite/
    ├── src/
    │   ├── components/  # React components
    │   ├── pages/       # Page components
    │   ├── services/    # API service calls
    │   ├── utils/       # Utility functions
    │   ├── App.jsx      # Main app with routing
    │   └── main.jsx     # Entry point
    ├── public/          # Static files
    ├── index.html
    └── package.json
```

## Usage

### First Time Setup
1. Register a new account on the signup page
2. Choose your role (Admin or Member)
3. Login with your credentials

### As an Admin
- Create new projects
- Add/remove team members from projects
- Create tasks
- Assign tasks to team members
- View all tasks across projects

### As a Team Member
- View assigned projects
- See tasks assigned to you
- Update task status by dragging tasks on the Kanban board
- View project dashboard with task statistics

## Features

### Dashboard
- 📊 Quick overview of task statistics
- 📉 Total tasks, completed tasks, and overdue tasks
- 🔗 Quick links to all your projects

### Kanban Board
- 📋 Three columns: Todo, In Progress, Done
- 🎯 Drag and drop tasks between columns
- 🚨 Red highlighting for overdue tasks
- 👤 Task assignment information

### Error Handling
- User-friendly error messages
- Loading states for async operations
- Validation for form inputs
- Proper HTTP error handling

## Future Improvements
- 📝 Activity log (who updated what and when)
- 📊 Progress bar per project
- 🔔 Real-time notifications
- 💬 Comments on tasks
- 📎 File attachments
- 🏷️ Task labels and priorities
- ⏰ Time tracking
- 📧 Email notifications
- 🔍 Advanced search and filtering
- 📈 Analytics and reporting

## Deployment

### Backend Deployment (e.g., Railway, Heroku)
1. Set environment variables on deployment platform
2. Push code to repository
3. Connect deployment service to GitHub
4. Deploy automatically

### Frontend Deployment (e.g., Vercel, Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set `VITE_API_URL` to production backend URL

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the ISC License - see the package.json file for details.

## Support
For issues and questions, please open an issue on the GitHub repository.

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or check MongoDB Atlas credentials
- Verify `MONGO_URI` in `.env` is correct

### Frontend Can't Connect to Backend
- Check if backend is running on `http://localhost:5000`
- Verify `VITE_API_URL` in frontend `.env` matches backend URL
- Check browser console for CORS errors

### Token Expiration
- Tokens expire after 1 hour by default (3600 seconds)
- User will be redirected to login page automatically
- Clear localStorage if having persistent issues

## Security Notes
- Never commit `.env` files to version control
- Change JWT_SECRET in production
- Use HTTPS in production
- Implement rate limiting for production
- Add input sanitization for production
