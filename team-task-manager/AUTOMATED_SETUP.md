# 🚀 AUTOMATED DEPLOYMENT SETUP (ONE-TIME ONLY!)

## What You Need to Do (5 minutes)

This setup will automate your entire deployment. After this one-time setup, every push to `main` will automatically deploy!

---

## **STEP 1: Get Railway Token** (2 minutes)

1. Go to: https://railway.app/account/tokens
2. Click "New Token"
3. Copy the token
4. Come back here and run:

```bash
gh secret set RAILWAY_TOKEN
# Paste your token and press Enter
```

---

## **STEP 2: Get Vercel Tokens** (2 minutes)

1. Go to: https://vercel.com/account/tokens
2. Create a new token (scope: Full Access)
3. Copy the token

4. Go to: https://vercel.com/account/projects
5. Find your project and copy the Project ID

6. Go to: https://vercel.com/account
7. Copy your Org ID

8. Run:
```bash
gh secret set VERCEL_TOKEN
# Paste your token and press Enter

gh secret set VERCEL_ORG_ID
# Paste your Org ID and press Enter

gh secret set VERCEL_PROJECT_ID
# Paste your Project ID and press Enter
```

---

## **STEP 3: Set MongoDB & API URL** (1 minute)

```bash
gh secret set MONGO_URI
# Paste: mongodb+srv://taskflow:taskflow@cluster0.qhcqyyq.mongodb.net/team-task-manager?appName=Cluster0

gh secret set JWT_SECRET
# Paste: taskflow_jwt_secret_2026_secure_key

gh secret set VITE_API_URL
# Paste: https://your-railway-url.com/api
# (You'll get this URL from Railway after first deployment)
```

---

## **STEP 4: Trigger First Deployment**

After setting all secrets, make any small change and push:

```bash
git add -A
git commit -m "Trigger automated deployment"
git push
```

**That's it!** Watch your deployments at:
- **Backend**: https://github.com/NINJAHATTORI004/Taskflow/actions/workflows/deploy-backend.yml
- **Frontend**: https://github.com/NINJAHATTORI004/Taskflow/actions/workflows/deploy-frontend.yml

---

## **From Now On**

✅ Every push to `main` automatically deploys to:
- Backend → Railway
- Frontend → Vercel

No more manual deployments! 🎉

---

## Quick Links to Get Tokens

| Service | Token URL |
|---------|-----------|
| Railway | https://railway.app/account/tokens |
| Vercel Token | https://vercel.com/account/tokens |
| Vercel Project ID | https://vercel.com/account/projects |
| Vercel Org ID | https://vercel.com/account |

---

## Troubleshooting

**If deployment fails:**
1. Check GitHub Actions logs: https://github.com/NINJAHATTORI004/Taskflow/actions
2. Verify all secrets are set: https://github.com/NINJAHATTORI004/Taskflow/settings/secrets/actions
3. Ensure secrets have correct values (no extra spaces)

---

## Set All Secrets in One Command (If `gh` CLI Available)

```bash
gh secret set RAILWAY_TOKEN
gh secret set VERCEL_TOKEN
gh secret set VERCEL_ORG_ID
gh secret set VERCEL_PROJECT_ID
gh secret set MONGO_URI
gh secret set JWT_SECRET
gh secret set VITE_API_URL
```

---

**You're now fully automated! 🚀**
