# Member Management Feature - Implementation Guide

## Feature Overview
The Member Management feature allows administrators to add and remove team members from projects. Members can then be assigned tasks within those projects.

## Implementation Status

### ✅ Completed Components

#### 1. Frontend UI Components
- **Team Members Section**: Displays current team members in a responsive grid layout
- **Add Member Modal**: Dialog form for adding members to a project
- **Member Cards**: Shows member details (name, email) with remove button
- **Error Handling**: Displays user-friendly error messages

#### 2. API Integration
- `projectService.addMember()` - Adds a member to a project
- `projectService.removeMember()` - Removes a member from a project
- Both methods use Axios interceptor for automatic JWT authentication

#### 3. State Management
- `showAddMember` - Controls modal visibility
- `memberEmail` - Stores user ID input (for testing)
- `allUsers` - Available for future user list functionality

#### 4. Event Handlers
- `handleAddMember(userId)` - Calls API and refreshes project data
- `handleRemoveMember(memberId)` - Removes member with confirmation

### 📁 Modified Files

1. **client-vite/src/components/projects/Project.jsx**
   - Added member management state variables
   - Added Team Members UI section
   - Added member modal and form
   - Added add/remove handlers

2. **client-vite/src/services/projectService.js**
   - Added `addMember(projectId, userId)` method
   - Added `removeMember(projectId, memberId)` method

## Test Accounts

Create these accounts for testing:

### Admin Account
- Email: `admin@example.com`
- Password: `AdminPass123!`
- Role: Admin

### Member Account #1
- Email: `member1@example.com`
- Password: `MemberPass123!`
- Role: Member

### Member Account #2
- Email: `member2@example.com`
- Password: `MemberPass123!`
- Role: Member

## Testing Workflow

### Step 1: Create Admin Account
1. Navigate to Signup page
2. Fill in admin details
3. Select **Admin (Full access)** role
4. Create account

### Step 2: Create Member Accounts
1. Log out from admin account
2. Navigate to Signup page
3. Create first member account
4. Copy the member ID from JWT token (stored in localStorage)
5. Repeat for second member

### Step 3: Create Project
1. Login as admin
2. Go to Dashboard
3. Click "+ New Project"
4. Fill in project details
5. Create project

### Step 4: Add Members to Project
1. Click on the project to open it
2. Scroll to "Team Members" section
3. Click "+ Add Member" button
4. Enter member's user ID in the modal
5. Click "Add Member"
6. Verify member appears in the team list

### Step 5: Create Task
1. In the project, click "Create Task" (or equivalent button)
2. Fill in task details
3. Create the task

### Step 6: Assign Task to Member
1. In the TaskBoard, hover over a task
2. Click the "Assign" button (Admin-only)
3. Select the member you added
4. Verify task is assigned

## Getting User IDs

To get a user's ID for testing:

### Option 1: From JWT Token
1. Login as the user
2. Open browser DevTools (F12)
3. Go to Console
4. Run: `JSON.parse(atob(localStorage.getItem('token').split('.')[1])).user.id`
5. Copy the ID displayed

### Option 2: From API
1. Request: `GET /api/users` (if endpoint exists)
2. Look for user by email
3. Copy the `_id` field

## Troubleshooting

### Modal Won't Open
- Check browser console for JavaScript errors
- Verify React component state is updating (DevTools)
- Clear browser cache and reload

### Member Not Adding
- Verify user ID is correct (must be valid MongoDB ObjectId)
- Check API response in Network tab
- Ensure user is logged in with Admin role
- Check backend logs for error messages

### Member List Not Updating
- Try refreshing the page
- Logout and login again
- Check if project data is being fetched correctly

## API Endpoints

### Add Member
```
PUT /api/projects/:projectId/members
Headers: Authorization: Bearer <token>
Body: { "userId": "<userId>" }
```

### Remove Member
```
DELETE /api/projects/:projectId/members/:memberId
Headers: Authorization: Bearer <token>
```

### Get Projects (with members)
```
GET /api/projects
Headers: Authorization: Bearer <token>
Response: Array of projects with populated teamMembers
```

## Next Steps for Production

1. **User Search**: Implement user search/lookup by email or name
2. **User List**: Add dropdown with available users for member selection
3. **Role-Based Access**: Show different UI based on user role
4. **Activity Logging**: Track member additions/removals
5. **Notifications**: Notify users when added to projects
6. **Batch Operations**: Add multiple members at once

## Files Structure

```
client-vite/
├── src/
│   ├── components/
│   │   ├── projects/
│   │   │   └── Project.jsx (Member Management UI)
│   │   └── tasks/
│   │       └── TaskBoard.jsx (Task Assignment)
│   └── services/
│       └── projectService.js (API Methods)
└── package.json

server/
├── controllers/
│   └── projects.js (addMember, removeMember logic)
├── routes/
│   └── projects.js (API endpoints)
└── models/
    └── Project.js (Project schema with teamMembers)
```

## End-to-End Workflow

```
1. Create admin account
   ↓
2. Create member accounts (record IDs)
   ↓
3. Admin creates project
   ↓
4. Admin adds members to project
   ↓
5. Admin creates task in project
   ↓
6. Admin assigns task to member
   ↓
7. Member logs in and sees task
   ↓
8. Member updates task status
```

## Demo Script

For the 2-5 minute demo:

1. **Login** (15 sec)
   - Show admin login screen
   - Enter credentials
   - Show dashboard

2. **Create Project** (20 sec)
   - Click "+ New Project"
   - Fill in name and description
   - Create project

3. **Add Members** (30 sec)
   - Show project details
   - Click "+ Add Member"
   - Enter member ID
   - Show member added to team list

4. **Create Task** (20 sec)
   - Show task creation form
   - Fill in task details
   - Create task (appears on board)

5. **Assign Task** (30 sec)
   - Show task in Kanban board
   - Click "Assign" button
   - Select member from list
   - Show task assigned to member

6. **Verify** (15 sec)
   - Show member list with assignment
   - Logout and login as member
   - Show task appears in member's view

Total: ~2 minutes for full workflow demo
