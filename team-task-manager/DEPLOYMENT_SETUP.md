# Railway + Vercel + MongoDB Atlas Deployment Guide

## 📋 Deployment Checklist

- [ ] Step 1: Set up MongoDB Atlas
- [ ] Step 2: Get MongoDB connection string
- [ ] Step 3: Deploy backend to Railway
- [ ] Step 4: Get Railway backend URL
- [ ] Step 5: Deploy frontend to Vercel
- [ ] Step 6: Test the application

---

## Step 1: Set Up MongoDB Atlas ☁️

### Create MongoDB Atlas Account

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free" or "Sign Up"
3. Fill in your details and create account
4. Verify your email

### Create a Cluster

1. On the Atlas dashboard, click "Create" → "Database"
2. Choose the **FREE** tier (M0)
3. Select your preferred region (closest to you)
4. Name your cluster: `team-task-manager`
5. Click "Create Cluster" (takes 3-5 minutes)

### Create Database User

1. Go to "Database Access" in left menu
2. Click "Add New Database User"
3. Select "Password" authentication
4. Username: `taskmanager`
5. Generate a secure password (copy it to a safe place!)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

### Get Connection String

1. Go to "Databases" in left menu
2. Click "Connect" on your cluster
3. Choose "Drivers" (for Node.js)
4. Copy the connection string that looks like:
   ```
   mongodb+srv://taskmanager:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```
5. **Replace `<password>` with the password you created above**
6. Save this connection string - you'll need it soon!

### Whitelist IP Address

1. Go to "Network Access" in left menu
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for testing)
4. In production, you can restrict to specific IPs
5. Click "Confirm"

**Your MongoDB connection string is ready!** ✅

---

## Step 2: Deploy Backend to Railway 🚂

### Create Railway Account

1. Go to https://railway.app
2. Sign up with GitHub (easiest)
3. Authorize Railway to access your GitHub

### Connect Your Repository

1. On Railway dashboard, click "New Project"
2. Select "Deploy from GitHub repo"
3. Select your `team-task-manager` repository
4. Click "Deploy Now"

### Configure Backend Deployment

1. Railway will auto-detect your project structure
2. Go to "Settings" tab
3. Set "Root Directory" to `server`
4. Add Environment Variables:

   **Click "+ New Variable" and add:**
   - **Key:** `MONGO_URI`
     **Value:** `mongodb+srv://taskmanager:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/team-task-manager?retryWrites=true&w=majority&appName=Cluster0`
     (Replace with your actual connection string)
   
   - **Key:** `JWT_SECRET`
     **Value:** Generate a random string (at least 32 characters)
     ```
     Use: crypto.randomBytes(32).toString('hex')
     Or any strong random string
     ```
   
   - **Key:** `PORT`
     **Value:** `5000`
   
   - **Key:** `NODE_ENV`
     **Value:** `production`

5. Click "Deploy"
6. Wait for deployment to complete (1-2 minutes)

### Get Your Backend URL

1. Once deployed, go to "Deployments"
2. Copy the URL (looks like `https://team-task-manager-backend-prod.up.railway.app`)
3. **Save this URL - you need it for the frontend!**

**✅ Backend is deployed!**

---

## Step 3: Deploy Frontend to Vercel 🚀

### Create Vercel Account

1. Go to https://vercel.com
2. Sign up with GitHub (easiest)
3. Authorize Vercel to access your GitHub repositories

### Import Your Repository

1. Click "Add New..." → "Project"
2. Click "Import Git Repository"
3. Search for your `team-task-manager` repository
4. Click "Import"

### Configure Frontend Deployment

1. **Framework Preset:** Make sure it detects as "Other"
2. **Root Directory:** Select `./client-vite`
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. **Install Command:** `npm install`

### Add Environment Variables

1. Scroll down to "Environment Variables"
2. Add the following:
   - **Key:** `VITE_API_URL`
     **Value:** `https://your-railway-url/api`
     (Replace with your actual Railway backend URL from Step 2)

3. Click "Deploy"
4. Wait for deployment (2-3 minutes)

### Get Your Frontend URL

1. Once deployed, you'll see the Vercel URL (looks like `https://team-task-manager-frontend.vercel.app`)
2. **Save this URL - this is your live application!**

**✅ Frontend is deployed!**

---

## Step 4: Test Your Application 🧪

### Access Your App

1. Open your Vercel frontend URL in browser
2. You should see the login page

### Test User Registration

1. Click "Sign up"
2. Create a test account:
   - Name: `Test Admin`
   - Email: `admin@test.com`
   - Password: `test1234`
   - Role: `Admin`
3. Click "Sign up"
4. Should redirect to login

### Test User Login

1. Enter your test credentials:
   - Email: `admin@test.com`
   - Password: `test1234`
2. Click "Sign in"
3. Should see the Dashboard

### Verify Dashboard

1. You should see:
   - Welcome message
   - Three stat cards (Total Tasks, Completed, Overdue)
   - Projects section (empty initially)

**✅ Application is working!**

---

## Troubleshooting 🔧

### Backend not connecting?

**Check 1: MongoDB Connection**
```
Error: connection refused
- Go to MongoDB Atlas Network Access
- Verify IP is whitelisted
- Check username/password is correct
- Verify connection string format
```

**Check 2: Environment Variables**
```
Error: MONGO_URI undefined
- Go to Railway Settings
- Verify MONGO_URI is set correctly
- Check JWT_SECRET exists
```

**Check 3: Backend Logs**
- Go to Railway Deployments
- Click on your deployment
- Check logs for errors
- Look for connection messages

### Frontend not connecting to backend?

**Check 1: API URL**
- Open browser DevTools (F12)
- Go to Network tab
- Make a request (try login)
- Check if URL is correct
- Should see `https://your-railway-url/api`

**Check 2: CORS Issues**
```
Error: CORS policy
- Check that Railway backend has CORS enabled
- Backend should allow requests from Vercel URL
```

**Check 3: Vercel Environment**
- Go to Vercel project settings
- Verify VITE_API_URL is set correctly
- Redeploy if changed

---

## Environment Variables Reference 📝

### Backend (Railway)

| Variable | Value | Example |
|----------|-------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://taskmanager:pwd@cluster0.xxxxx.mongodb.net/team-task-manager?retryWrites=true&w=majority&appName=Cluster0` |
| `JWT_SECRET` | Random secure string (32+ chars) | `abc123def456...` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment type | `production` |

### Frontend (Vercel)

| Variable | Value | Example |
|----------|-------|---------|
| `VITE_API_URL` | Backend API URL | `https://team-task-manager-prod.up.railway.app/api` |

---

## Important Security Notes 🔒

1. **Never commit .env files** - Already in .gitignore ✓
2. **Use strong JWT_SECRET** - Minimum 32 characters
3. **MongoDB Atlas**:
   - Keep username/password secure
   - Use specific IP whitelist for production
   - Consider VPC peering for extra security
4. **CORS** - Backend allows all origins (change for production)
5. **HTTPS** - Both platforms use HTTPS by default ✓

---

## Next Steps 📈

### After Successful Deployment:

1. **Create more test users** with different roles
2. **Test creating projects** (Admin only)
3. **Test task creation and updates**
4. **Invite team members**
5. **Test drag-and-drop Kanban board**

### For Production:

1. Add custom domain names
2. Set up monitoring (Sentry for error tracking)
3. Enable database backups
4. Set up CI/CD pipeline
5. Add analytics (Google Analytics)
6. Implement rate limiting
7. Set up security headers

---

## URLs After Deployment 🌐

| Component | URL |
|-----------|-----|
| **Frontend** | `https://your-vercel-url` |
| **Backend API** | `https://your-railway-url/api` |
| **MongoDB Atlas** | `https://cloud.mongodb.com` (management) |
| **Railway Dashboard** | `https://railway.app` (management) |
| **Vercel Dashboard** | `https://vercel.com` (management) |

---

## Support & Help 💬

If you encounter issues:

1. Check the **Troubleshooting** section above
2. Review logs on Railway and Vercel dashboards
3. Verify all environment variables
4. Check MongoDB Atlas Network Access
5. Consult DEPLOYMENT.md in the project

---

**Deployment Date:** May 3, 2026
**Status:** Ready for Production ✅
