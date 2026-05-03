# 🚀 FULLY AUTOMATED DEPLOYMENT SETUP

## ⚡ Quick Start (Choose Your Path)

### Option A: Automated Setup Script (Recommended) ⭐
Run this and it handles everything:

**On Windows (PowerShell):**
```powershell
cd c:\Users\Ansh\OneDrive\Desktop\Taskflow\team-task-manager
.\setup-secrets.ps1
```

**On Mac/Linux:**
```bash
cd ~/your/project/path
bash setup-secrets.sh
```

The script will:
1. Ask for your Railway token
2. Ask for your Vercel tokens
3. Auto-fill MongoDB & JWT secrets
4. Set everything up in GitHub

---

## 📋 Manual Setup (If Scripts Don't Work)

### Prerequisites
- [GitHub CLI installed](https://cli.github.com/)
- [Railway account](https://railway.app)
- [Vercel account](https://vercel.com)

### Step-by-Step

**1. Get Railway Token**
```bash
# Go to: https://railway.app/account/tokens
# Click "New Token" and copy it

gh secret set RAILWAY_TOKEN
# Paste your token and press Ctrl+D (or Cmd+D)
```

**2. Get Vercel Tokens**
```bash
# Go to: https://vercel.com/account/tokens
# Create new token and copy it

gh secret set VERCEL_TOKEN
# Paste and press Ctrl+D

# Go to: https://vercel.com/account
# Copy your Org ID

gh secret set VERCEL_ORG_ID
# Paste and press Ctrl+D

# Go to: https://vercel.com/account/projects
# Find your project and copy Project ID

gh secret set VERCEL_PROJECT_ID
# Paste and press Ctrl+D
```

**3. MongoDB & JWT (Pre-filled)**
```bash
gh secret set MONGO_URI
# Paste this: mongodb+srv://taskflow:taskflow@cluster0.qhcqyyq.mongodb.net/team-task-manager?appName=Cluster0

gh secret set JWT_SECRET
# Paste this: taskflow_jwt_secret_2026_secure_key
```

**4. Vercel API URL (Set After First Deploy)**
```bash
# After Railway deploys, you'll get a URL
# Go back and run this with your Railway URL + /api
gh secret set VITE_API_URL
# Paste: https://your-railway-url.up.railway.app/api
```

---

## ✅ Verify Setup

Go to: https://github.com/NINJAHATTORI004/Taskflow/settings/secrets/actions

You should see these secrets:
- ✅ RAILWAY_TOKEN
- ✅ VERCEL_TOKEN
- ✅ VERCEL_ORG_ID
- ✅ VERCEL_PROJECT_ID
- ✅ MONGO_URI
- ✅ JWT_SECRET
- ✅ VITE_API_URL (optional, can be added after first deploy)

---

## 🚀 Trigger Deployment

After all secrets are set, just push a commit:

```bash
git add -A
git commit -m "Enable automated deployments"
git push
```

That's it! GitHub Actions will automatically:
1. Deploy backend to Railway
2. Deploy frontend to Vercel

---

## 📊 Watch Your Deployments

Open: https://github.com/NINJAHATTORI004/Taskflow/actions

You'll see:
- **Deploy Backend to Railway** workflow
- **Deploy Frontend to Vercel** workflow

Click on the workflow to see detailed logs.

---

## 🎯 After First Deployment

1. **Get Railway URL**
   - Go to Railway dashboard
   - Find your deployed service
   - Copy the URL (e.g., `https://team-task-manager.up.railway.app`)

2. **Update VITE_API_URL Secret**
   ```bash
   gh secret set VITE_API_URL
   # Paste: https://team-task-manager.up.railway.app/api
   ```

3. **Push Again to Update Frontend**
   ```bash
   git add -A
   git commit -m "Update API URL"
   git push
   ```

4. **Your app is now fully deployed! 🎉**

---

## 📱 Test Your App

Once Vercel shows "Ready", click the deployment URL:
- `https://your-vercel-url.vercel.app`
- Sign up for an account
- Create a project
- Add tasks
- Enjoy! 🎊

---

## 🔄 From Now On

Every time you push to `main`:
✅ Backend auto-deploys to Railway
✅ Frontend auto-deploys to Vercel

**No more manual deployments!**

---

## 🆘 Troubleshooting

**Deployments failing?**
1. Check GitHub Actions logs: https://github.com/NINJAHATTORI004/Taskflow/actions
2. Verify secrets: https://github.com/NINJAHATTORI004/Taskflow/settings/secrets/actions
3. Check secret values have no extra spaces
4. Ensure tokens are valid and not expired

**Can't see deployment URL?**
1. Wait for workflows to complete (usually 2-5 minutes)
2. Check the workflow logs for details
3. Try rerunning failed jobs

**App shows error connecting to backend?**
1. Make sure VITE_API_URL is set correctly
2. Ensure it includes `/api` at the end
3. Push a new commit to redeploy frontend

---

## 🎓 How It Works

```
Your Push to GitHub
        ↓
GitHub Actions Triggered
        ↓
Backend Workflow         Frontend Workflow
        ↓                      ↓
Deploy to Railway        Deploy to Vercel
        ↓                      ↓
Backend URL Generated    Frontend URL Generated
        ↓
🎉 Your App is Live!
```

---

## 📚 Quick Links

| Service | Link |
|---------|------|
| 📦 Railway | https://railway.app |
| 🌐 Vercel | https://vercel.com |
| 📊 MongoDB Atlas | https://cloud.mongodb.com |
| 🐙 GitHub Actions | https://github.com/NINJAHATTORI004/Taskflow/actions |
| 🔐 GitHub Secrets | https://github.com/NINJAHATTORI004/Taskflow/settings/secrets/actions |

---

## ✨ You're All Set!

Your deployment pipeline is now fully automated. Sit back and enjoy continuous deployment! 🚀

Questions? Check the GitHub Actions logs or review the workflow files in `.github/workflows/`
