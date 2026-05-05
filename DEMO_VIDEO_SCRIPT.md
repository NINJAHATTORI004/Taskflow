# Taskflow Demo Video Script (2-5 minutes)

## Recording Setup
- Screen recording software: OBS Studio (free) or Screencast-o-matic
- Browser window: 1280x720 or 1920x1080
- Application URL: http://localhost:5174 (local) or https://taskflow-frontend-three-kappa.vercel.app (live)
- Duration target: 2-5 minutes

## Demo Script

### Scene 1: Application Overview (30 seconds)
**Narration**: "Welcome to Taskflow, a collaborative team task management application. Let me show you the complete workflow from admin to team member."

**Actions**:
1. Show browser at login page
2. Show the login form with email and password fields
3. Pan across to show the "Create an account" link
4. Highlight: "Admins can create projects and assign tasks. Members can update task status."

---

### Scene 2: Admin Login (20 seconds)
**Narration**: "Let's start by logging in as an administrator."

**Actions**:
1. Enter admin email: `admin@example.com`
2. Enter admin password: `AdminPass123!`
3. Click "Sign in" button
4. **Wait** for dashboard to load (animation: spinning loader)
5. Dashboard appears with "Overview" stats and "Your Projects" section

---

### Scene 3: Dashboard Overview (30 seconds)
**Narration**: "Here's the admin dashboard showing project statistics and team overview. You can see total tasks, completed tasks, and any overdue items. Currently, there are no projects yet."

**Actions**:
1. Show the three stat cards:
   - "Total Tasks: 0"
   - "Completed Tasks: 0%"
   - "Overdue Tasks: 0"
2. Scroll down to show "Your Projects" section
3. Show the "+ New Project" button and empty state message

---

### Scene 4: Create Project (45 seconds)
**Narration**: "Let's create a new project to organize our team's work. I'll click the 'New Project' button."

**Actions**:
1. Click "+ New Project" button
2. Modal appears with fields:
   - Project Name input field
   - Description input field
   - Create button
3. Type in project name: "Q2 Marketing Campaign"
4. Type in description: "Plan and execute Q2 marketing initiatives across all channels"
5. Click "Create project" button
6. **Wait** for project to be created
7. Modal closes
8. Project appears in the dashboard grid
9. Click on the project to open it

---

### Scene 5: Project Details & Team Members (1 minute)
**Narration**: "Now we're in the project detail page. Here we can see the team members section and the task board. Let's add some team members to this project."

**Actions**:
1. Show the "Team Members" section at the top
2. Show "No team members yet" message
3. Click "+ Add Member" button
4. Modal opens: "Add Team Member"
5. Type member user ID (pre-obtained): `5f8c7d9e3a4b2c1e9d8f7a6b`
6. Click "Add Member" button
7. **Wait** for member to be added
8. Member appears in the team list with:
   - Avatar (first letter initial)
   - Name: "Team Member 1"
   - Email: "member1@example.com"
9. Show remove button (trash icon) on hover
10. Repeat process to add second member (optional)

---

### Scene 6: Task Board & Task Creation (1 minute)
**Narration**: "Below the team members, we have the Kanban task board with three columns: Todo, In Progress, and Done. Let's create a task and assign it to a team member."

**Actions**:
1. Show the empty TaskBoard section
2. Show three columns: "Todo", "In Progress", "Done"
3. Show "No tasks yet" placeholder message
4. Create task (via API or UI if available):
   - Show task creation form (or explain via narration)
   - Enter task title: "Design Marketing Materials"
   - Click create
5. **Wait** for task to appear in "Todo" column
6. Hover over the task to reveal the "Assign" button
7. Show the assign button appears on hover with opacity animation

---

### Scene 7: Task Assignment (45 seconds)
**Narration**: "Now let's assign this task to one of our team members. I'll click the Assign button and select a member from the dropdown."

**Actions**:
1. Click "Assign" button on the task
2. Assignment modal opens
3. Modal shows "Assign to:" label
4. Dropdown appears with team member list:
   - "Team Member 1" (with avatar)
   - "Team Member 2" (with avatar)
5. Click on team member name to assign
6. Modal closes
7. Task now shows assignee information:
   - Assignee name appears on task
   - Avatar appears on task card
8. Show task successfully assigned

---

### Scene 8: Task Management - Drag & Drop (30 seconds)
**Narration**: "Team members can update task status by dragging tasks between columns. Let me demonstrate the drag-and-drop functionality."

**Actions**:
1. Drag task from "Todo" column to "In Progress" column
2. **Wait** for animation to complete
3. Task appears in "In Progress" column
4. Drag task from "In Progress" to "Done" column
5. Task appears in "Done" column
6. Show message: "Task status updated successfully" (if toast appears)
7. Highlight: "Changes are saved instantly"

---

### Scene 9: Member View - Logout & Login (45 seconds)
**Narration**: "Now let's switch to the member's perspective. I'll logout from the admin account and login as the team member to see what they can do."

**Actions**:
1. Click "Logout" button in navigation
2. Confirm logout
3. Redirected to login page
4. Enter member email: `member1@example.com`
5. Enter member password: `MemberPass123!`
6. Click "Sign in"
7. **Wait** for dashboard to load
8. Member's dashboard appears
9. Show: "Your Projects" section shows the project they're a member of
10. Show: "Your Tasks" or highlight the tasks assigned to them

---

### Scene 10: Member Task Interaction (30 seconds)
**Narration**: "As a team member, I can see the tasks assigned to me and update their status. Notice that I don't have the Assign button - only members with the assigned role see their tasks and can drag-and-drop to update status."

**Actions**:
1. Click on the project
2. Show the task board from member perspective
3. Show assigned task appears in "In Progress" column
4. Demonstrate dragging task to "Done"
5. Task moves to completed state
6. Show: member cannot see "Assign" button (Admin-only feature)

---

### Scene 11: Summary & Key Features (30 seconds)
**Narration**: "Let's recap the key features we just demonstrated:"

**Actions**:
1. Go back to admin dashboard (logout and login as admin)
2. Take screenshots or show key screens:
   - Login page (authentication)
   - Dashboard (overview)
   - Project creation (project management)
   - Team members (member management)
   - Task assignment (admin control)
   - Kanban board (drag-and-drop)

**Show text overlay or speak**:
- ✅ Role-based access (Admin vs Member)
- ✅ Project creation and management
- ✅ Team member management
- ✅ Task assignment
- ✅ Drag-and-drop task status updates
- ✅ Real-time persistence

---

### Scene 12: Call to Action (15 seconds)
**Narration**: "Thank you for watching this demo of Taskflow. For more information, visit the GitHub repository or access the live application at the links below."

**Show on screen**:
```
Taskflow - Team Task Management

GitHub: https://github.com/NINJAHATTORI004/Taskflow
Live Demo: https://taskflow-frontend-three-kappa.vercel.app
Documentation: See README.md in repository

Built with React, Node.js, and MongoDB
```

---

## Total Duration: ~5 minutes

## Recording Tips

1. **Use 1920x1080 resolution** for best quality
2. **Set browser zoom to 100%** so text is readable
3. **Use a clear, steady voice** when narrating
4. **Add cursor highlights** to draw attention to buttons
5. **Include transitions** between scenes (fade, slide, etc.)
6. **Add background music** (optional, copyright-free)
7. **Include text overlays** for key features
8. **Slow down** at important clicks to ensure visibility
9. **Record at 30fps or 60fps** for smooth playback
10. **Export as MP4 or WebM** (most compatible)

## Audio Notes

- Narration should be clear and concise
- Speak at a moderate pace (not too fast)
- Pause briefly after major features to let them sink in
- Use enthusiastic tone to engage viewers
- Include brief sound effects for clicks if desired

## Post-Production

1. **Edit out** any mistakes or loading delays
2. **Add title card** at beginning
3. **Add end card** with links and call-to-action
4. **Adjust volume levels** for consistency
5. **Add captions** (optional but recommended)
6. **Export** in 1080p for best quality

## File Output

- **Filename**: `Taskflow_Demo_2024.mp4`
- **Format**: MP4 or WebM
- **Codec**: H.264 (video), AAC (audio)
- **Bitrate**: 5000-10000 kbps
- **Duration**: 2-5 minutes

---

## Alternative: Quick Demo (~2 minutes)

If you prefer a shorter version:

1. Login as admin (20 sec)
2. Create project (30 sec)
3. Add member (30 sec)
4. Create and assign task (30 sec)
5. Show drag-and-drop (20 sec)
6. Switch to member view (20 sec)

**Total: ~2.5 minutes**

---

## Software Recommendations

- **Recording**: OBS Studio (free, cross-platform)
- **Editing**: DaVinci Resolve (free), Adobe Premiere (paid)
- **Captions**: Rev.com (auto-generated), Kapwing
- **Music**: FreePik, YouTube Audio Library
