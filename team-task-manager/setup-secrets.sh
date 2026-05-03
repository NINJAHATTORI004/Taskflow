#!/bin/bash

# 🚀 Automated GitHub Secrets Setup for Taskflow
# This script sets up all deployment secrets automatically

echo "🚀 TASKFLOW AUTOMATED DEPLOYMENT SETUP"
echo "========================================"
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) not found. Please install it first:"
    echo "   https://cli.github.com/"
    exit 1
fi

echo "✅ GitHub CLI found"
echo ""

# Set RAILWAY_TOKEN
echo "Step 1️⃣  - Railway Token"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Go to: https://railway.app/account/tokens"
echo "2. Click 'New Token'"
echo "3. Copy the token"
read -p "Paste your Railway Token: " railwayToken

if [ -n "$railwayToken" ]; then
    echo "$railwayToken" | gh secret set RAILWAY_TOKEN
    echo "✅ RAILWAY_TOKEN saved"
    echo ""
fi

# Set VERCEL_TOKEN
echo "Step 2️⃣  - Vercel Token"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Go to: https://vercel.com/account/tokens"
echo "2. Create new token (Full Access)"
echo "3. Copy the token"
read -p "Paste your Vercel Token: " vercelToken

if [ -n "$vercelToken" ]; then
    echo "$vercelToken" | gh secret set VERCEL_TOKEN
    echo "✅ VERCEL_TOKEN saved"
    echo ""
fi

# Set VERCEL_ORG_ID
echo "Step 3️⃣  - Vercel Org ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Go to: https://vercel.com/account"
echo "2. Copy your Org ID"
read -p "Paste your Vercel Org ID: " vercelOrgId

if [ -n "$vercelOrgId" ]; then
    echo "$vercelOrgId" | gh secret set VERCEL_ORG_ID
    echo "✅ VERCEL_ORG_ID saved"
    echo ""
fi

# Set VERCEL_PROJECT_ID
echo "Step 4️⃣  - Vercel Project ID"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Go to: https://vercel.com/account/projects"
echo "2. Find 'taskflow' or 'team-task-manager'"
echo "3. Copy the Project ID"
read -p "Paste your Vercel Project ID: " vercelProjectId

if [ -n "$vercelProjectId" ]; then
    echo "$vercelProjectId" | gh secret set VERCEL_PROJECT_ID
    echo "✅ VERCEL_PROJECT_ID saved"
    echo ""
fi

# Set MONGO_URI (pre-filled)
echo "Step 5️⃣  - MongoDB URI (Pre-filled)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
mongoUri="mongodb+srv://taskflow:taskflow@cluster0.qhcqyyq.mongodb.net/team-task-manager?appName=Cluster0"
echo "$mongoUri" | gh secret set MONGO_URI
echo "✅ MONGO_URI saved"
echo ""

# Set JWT_SECRET (pre-filled)
echo "Step 6️⃣  - JWT Secret (Pre-filled)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
jwtSecret="taskflow_jwt_secret_2026_secure_key"
echo "$jwtSecret" | gh secret set JWT_SECRET
echo "✅ JWT_SECRET saved"
echo ""

# Set VITE_API_URL
echo "Step 7️⃣  - Vite API URL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "After Railway deploys, you'll get a URL like:"
echo "https://team-task-manager.up.railway.app"
echo "Add /api to it: https://team-task-manager.up.railway.app/api"
read -p "Paste your Railway API URL (or press Enter to skip): " viteApiUrl

if [ -n "$viteApiUrl" ]; then
    echo "$viteApiUrl" | gh secret set VITE_API_URL
    echo "✅ VITE_API_URL saved"
    echo ""
else
    echo "⏭️  Skipped - You can update this after first Railway deployment"
    echo ""
fi

# Summary
echo "════════════════════════════════════════════════════════"
echo "✅ SETUP COMPLETE!"
echo "════════════════════════════════════════════════════════"
echo ""
echo "📋 Next Steps:"
echo "1. Verify secrets at: https://github.com/NINJAHATTORI004/Taskflow/settings/secrets/actions"
echo "2. Push a change to trigger deployment:"
echo "   git add -A && git commit -m 'Trigger deployment' && git push"
echo "3. Watch deployments at: https://github.com/NINJAHATTORI004/Taskflow/actions"
echo "4. After Railway URL is generated, update VITE_API_URL secret with the URL/api"
echo ""
echo "🚀 Your app will now deploy automatically on every push to main!"
echo ""
