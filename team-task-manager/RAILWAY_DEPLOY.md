# 🚀 RAILWAY DEPLOYMENT - YOUR SETUP

## Your MongoDB Configuration

✅ **MongoDB Cluster:** `cluster0.qhcqyyq.mongodb.net`
✅ **Database Name:** `team-task-manager`
✅ **Username:** `taskflow`

---

## 🚂 DEPLOY TO RAILWAY - EXACT STEPS

### Step 1: Go to Railway
```
1. Open: https://railway.app
2. Sign in with GitHub (or create account)
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository: NINJAHATTORI004/Taskflow
```

### Step 2: Configure Deployment
```
Once Railway is deploying:

Root Directory: server
(This tells Railway to use the /server folder)
```

### Step 3: Add Environment Variables
```
In Railway Project Settings, add these EXACT variables:

Variable 1:
Key: MONGO_URI
Value: mongodb+srv://taskflow:taskflow@cluster0.qhcqyyq.mongodb.net/team-task-manager?appName=Cluster0

Variable 2:
Key: JWT_SECRET
Value: taskflow_jwt_secret_2026_secure_key

Variable 3:
Key: NODE_ENV
Value: production

Variable 4:
Key: PORT
Value: 5000
```

### Step 4: Deploy
```
1. Click "Deploy"
2. Wait for deployment (1-2 minutes)
3. You'll see your backend URL
4. Copy it: https://your-backend-url/api
```

---

## 🔗 Copy Your Backend URL

Once deployed, you'll have a URL like:
```
https://team-task-manager-prod.up.railway.app
```

**Add `/api` to get your API URL:**
```
https://team-task-manager-prod.up.railway.app/api
```

---

## 🌐 DEPLOY FRONTEND TO VERCEL

### Step 1: Go to Vercel
```
1. Open: https://vercel.com
2. Sign in with GitHub (or create account)
3. Click "Add New" → "Project"
4. Click "Import Git Repository"
5. Search: Taskflow
6. Click "Import"
```

### Step 2: Configure Frontend
```
Root Directory: ./client-vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Step 3: Add Environment Variable
```
Variable:
Key: VITE_API_URL
Value: https://YOUR_RAILWAY_URL/api

REPLACE YOUR_RAILWAY_URL with the actual URL from Railway!

Example: https://team-task-manager-prod.up.railway.app/api
```

### Step 4: Deploy
```
1. Click "Deploy"
2. Wait for deployment (2-3 minutes)
3. You'll see your frontend URL
4. This is your LIVE APP!
```

---

## ✅ TEST YOUR APPLICATION

### Step 1: Open Your App
```
Go to: https://your-vercel-url
(The URL Vercel gives you)
```

### Step 2: Create Test Account
```
1. Click "Sign up"
2. Fill in:
   Name: Test User
   Email: test@taskflow.com
   Password: Test123456
   Role: Admin
3. Click "Sign up"
```

### Step 3: Login
```
1. Email: test@taskflow.com
2. Password: Test123456
3. Click "Sign in"
4. You should see Dashboard
```

### Step 4: Verify Everything Works
```
✓ Dashboard loads with stats
✓ Can see Projects section
✓ Can logout
✓ Login/logout works smoothly
```

---

## 🎯 YOUR DEPLOYMENT CHECKLIST

**MongoDB Setup:**
- ✅ Database: `team-task-manager`
- ✅ User: `taskflow`
- ✅ Password: `taskflow`
- ✅ Connection: `mongodb+srv://taskflow:taskflow@cluster0.qhcqyyq.mongodb.net/team-task-manager?appName=Cluster0`

**Backend (Railway):**
- [ ] Project created on Railway
- [ ] Repository connected (NINJAHATTORI004/Taskflow)
- [ ] Root directory set to `server`
- [ ] Environment variables added:
  - [ ] MONGO_URI
  - [ ] JWT_SECRET
  - [ ] NODE_ENV
  - [ ] PORT
- [ ] Deployment complete
- [ ] URL copied

**Frontend (Vercel):**
- [ ] Project created on Vercel
- [ ] Repository imported (Taskflow)
- [ ] Root directory set to `./client-vite`
- [ ] VITE_API_URL added with Railway URL
- [ ] Deployment complete
- [ ] URL noted

**Testing:**
- [ ] App loads in browser
- [ ] Can create account
- [ ] Can login
- [ ] Dashboard displays
- [ ] Can logout

---

## 🔧 IF SOMETHING GOES WRONG

### Backend shows "502 Bad Gateway"
```
1. Go to Railway Dashboard
2. Click "Deployments"
3. Check the logs
4. Verify MONGO_URI is correct
5. Verify MongoDB Atlas is running
6. Try redeploying
```

### Frontend shows blank page
```
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Look for "VITE_API_URL" or network errors
4. Verify Railway URL is correct in Vercel
5. Redeploy Vercel if you changed VITE_API_URL
```

### Can't login
```
1. Check if backend logs show database connection
2. Verify MONGO_URI has correct password
3. Verify MongoDB Atlas cluster is accessible
4. Try creating new account (signup first)
```

---

## 📊 WHAT YOU'LL HAVE

✅ Frontend running on Vercel (accessible online)
✅ Backend API running on Railway  
✅ Database running on MongoDB Atlas
✅ User authentication working
✅ Full application live and functional

---

## 🎉 YOU'RE DEPLOYED!

Your application is now:
- 🌐 Accessible from anywhere in the world
- 🔐 With user authentication
- 📊 With full task management
- ☁️ Running on professional cloud infrastructure

**Share your Vercel URL with your team!**

---

## QUICK REFERENCE

```
MongoDB Connection:
mongodb+srv://taskflow:taskflow@cluster0.qhcqyyq.mongodb.net/team-task-manager?appName=Cluster0

MongoDB Dashboard:
https://cloud.mongodb.com

Railway Dashboard:
https://railway.app

Vercel Dashboard:
https://vercel.com

Your GitHub Repo:
https://github.com/NINJAHATTORI004/Taskflow
```

---

**Status: Ready for Deployment**
**MongoDB: ✅ Connected and Ready**
**Backend: Ready for Railway**
**Frontend: Ready for Vercel**

**Let's deploy! 🚀**
