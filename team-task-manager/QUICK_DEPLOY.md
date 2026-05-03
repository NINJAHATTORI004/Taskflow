# 🚀 DEPLOYMENT QUICK START - 5 MINUTE SETUP

## Prerequisites ✅
- [ ] GitHub account with code pushed
- [ ] Railway account (sign up at https://railway.app)
- [ ] Vercel account (sign up at https://vercel.app)
- [ ] MongoDB Atlas account (sign up at https://www.mongodb.com/cloud/atlas)

---

## Phase 1: MongoDB Atlas Setup (5 mins) 📊

### 1.1 Create Free Cluster
```
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account (or login)
3. Click "Create" → Choose FREE M0 tier
4. Select region closest to you
5. Name: "team-task-manager"
6. Click "Create Cluster" → Wait 3-5 minutes
```

### 1.2 Create Database User
```
1. Go to "Database Access"
2. Click "Add New Database User"
3. Username: taskmanager
4. Password: [Generate secure password - SAVE THIS!]
5. Select "Read and write to any database"
6. Click "Add User"
```

### 1.3 Whitelist & Get Connection String
```
1. Go to "Network Access"
2. Click "Add IP Address"
3. Select "Allow Access from Anywhere"
4. Go back to "Databases" → Click "Connect"
5. Choose "Drivers" (Node.js)
6. Copy connection string
7. Replace <password> with your actual password
8. SAVE CONNECTION STRING!
```

**Example connection string:**
```
mongodb+srv://taskmanager:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/team-task-manager?retryWrites=true&w=majority&appName=Cluster0
```

---

## Phase 2: Deploy Backend to Railway (5 mins) 🚂

### 2.1 Create Railway Project
```
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose "team-task-manager" repository
6. Click "Deploy Now"
7. Wait for deployment...
```

### 2.2 Configure Environment Variables
```
In Railway Project Settings, add these variables:

MONGO_URI
━━━━━━━━
mongodb+srv://taskmanager:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/team-task-manager?retryWrites=true&w=majority&appName=Cluster0
(Replace YOUR_PASSWORD with actual password)

JWT_SECRET
━━━━━━━━━
Generate secure random string - use any 32+ character string
Example: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0

NODE_ENV
━━━━━━━
production

PORT
━━━━
5000
```

### 2.3 Get Your Backend URL
```
1. Go to "Deployments" tab
2. Copy the URL (looks like https://team-task-manager-prod.up.railway.app)
3. SAVE THIS URL!
```

**Your backend is now live!** ✅

---

## Phase 3: Deploy Frontend to Vercel (5 mins) 🚀

### 3.1 Create Vercel Project
```
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New..." → "Project"
4. Click "Import Git Repository"
5. Search for "team-task-manager"
6. Click "Import"
```

### 3.2 Configure Build Settings
```
Root Directory: ./client-vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### 3.3 Add Environment Variable
```
VITE_API_URL
━━━━━━━━━━
https://YOUR_RAILWAY_URL/api
(Replace YOUR_RAILWAY_URL with the backend URL from Phase 2.3)

Example: https://team-task-manager-prod.up.railway.app/api
```

### 3.4 Deploy
```
1. Click "Deploy"
2. Wait for deployment to complete (~2 minutes)
3. You'll see your live URL
4. SAVE THIS URL - THIS IS YOUR APP!
```

**Your frontend is now live!** ✅

---

## Phase 4: Test Your Application (2 mins) 🧪

### 4.1 Open Your App
```
Go to: https://YOUR_VERCEL_URL
You should see the login page
```

### 4.2 Create Test Account
```
1. Click "Sign up"
2. Fill in:
   - Name: Test User
   - Email: test@example.com
   - Password: Test123456
   - Role: Admin
3. Click "Sign up"
```

### 4.3 Login
```
1. Click "Sign in"
2. Enter email: test@example.com
3. Enter password: Test123456
4. You should see the Dashboard
```

### 4.4 Verify Dashboard
```
✓ Dashboard loads
✓ See stat cards (Total Tasks, Completed, Overdue)
✓ See "Projects" section
✓ Logout button works
```

**Your application is deployed and working!** 🎉

---

## Quick Reference URLs 🌐

```
Your Frontend (Open this in browser):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
https://YOUR_VERCEL_URL
(Copy from Vercel deployment)

Your Backend API:
━━━━━━━━━━━━━━━━
https://YOUR_RAILWAY_URL/api
(Copy from Railway deployment)

MongoDB Atlas:
━━━━━━━━━━━━
https://cloud.mongodb.com
(For database management)

Railway Dashboard:
━━━━━━━━━━━━━━
https://railway.app
(For backend management)

Vercel Dashboard:
━━━━━━━━━━━━━
https://vercel.com
(For frontend management)
```

---

## Troubleshooting Quick Fixes 🔧

### Issue: "Cannot connect to database"
```
Solution:
1. Verify MongoDB Atlas connection string
2. Check username and password
3. Verify IP whitelist includes "Allow from Anywhere"
4. Check PORT is set to 5000 in Railway
```

### Issue: "Frontend shows blank page"
```
Solution:
1. Verify VITE_API_URL in Vercel matches your Railway URL
2. Redeploy Vercel after changing environment variables
3. Check browser console (F12) for errors
```

### Issue: "Login fails with 'Invalid credentials'"
```
Solution:
1. Make sure you're creating a NEW user (signup, not existing account)
2. Check MongoDB is connected (see logs in Railway)
3. Verify MONGO_URI is correct in Railway settings
```

### Issue: "502 Bad Gateway on backend"
```
Solution:
1. Check Railway deployment logs
2. Verify MONGO_URI environment variable
3. Check JWT_SECRET is set
4. Restart deployment on Railway
```

---

## What's Now Running 🎯

✅ **Backend Server** running on Railway with Node.js/Express
✅ **Frontend App** running on Vercel with React/Vite  
✅ **Database** running on MongoDB Atlas
✅ **Authentication** JWT-based login/register
✅ **Real-time** Kanban board with drag-and-drop

---

## Next Steps After Deployment 📋

1. **Test all features:**
   - Register new users
   - Create projects (as Admin)
   - Create tasks
   - Update task status

2. **Share your app:**
   - Give your frontend URL to team members
   - They can register and start using it

3. **Monitor:**
   - Check Railway logs for errors
   - Monitor Vercel deployment
   - Watch MongoDB Atlas metrics

4. **Production improvements:**
   - Add custom domain
   - Set up error tracking (Sentry)
   - Add analytics
   - Set up automated backups

---

## Save These URLs! 📌

```
Frontend URL: ________________________
Backend URL: ________________________
MongoDB Atlas Connection: ________________________
JWT Secret: ________________________
```

---

**Deployment Status: ✅ COMPLETE**
**Time to Deploy: ~15 minutes**
**Live Since: May 3, 2026**
