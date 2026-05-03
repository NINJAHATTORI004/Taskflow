#!/usr/bin/env pwsh

# 🚀 Automated GitHub Secrets Setup for Taskflow
# This script sets up all deployment secrets automatically

Write-Host "🚀 TASKFLOW AUTOMATED DEPLOYMENT SETUP" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Check if gh CLI is installed
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
    Write-Host "❌ GitHub CLI (gh) not found. Please install it first:" -ForegroundColor Red
    Write-Host "   https://cli.github.com/" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ GitHub CLI found`n" -ForegroundColor Green

# Set RAILWAY_TOKEN
Write-Host "Step 1️⃣  - Railway Token" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
Write-Host "1. Go to: https://railway.app/account/tokens"
Write-Host "2. Click 'New Token'"
Write-Host "3. Copy the token"
$railwayToken = Read-Host "Paste your Railway Token"

if ($railwayToken) {
    gh secret set RAILWAY_TOKEN --body "$railwayToken"
    Write-Host "✅ RAILWAY_TOKEN saved`n" -ForegroundColor Green
}

# Set VERCEL_TOKEN
Write-Host "Step 2️⃣  - Vercel Token" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
Write-Host "1. Go to: https://vercel.com/account/tokens"
Write-Host "2. Create new token (Full Access)"
Write-Host "3. Copy the token"
$vercelToken = Read-Host "Paste your Vercel Token"

if ($vercelToken) {
    gh secret set VERCEL_TOKEN --body "$vercelToken"
    Write-Host "✅ VERCEL_TOKEN saved`n" -ForegroundColor Green
}

# Set VERCEL_ORG_ID
Write-Host "Step 3️⃣  - Vercel Org ID" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
Write-Host "1. Go to: https://vercel.com/account"
Write-Host "2. Copy your Org ID"
$vercelOrgId = Read-Host "Paste your Vercel Org ID"

if ($vercelOrgId) {
    gh secret set VERCEL_ORG_ID --body "$vercelOrgId"
    Write-Host "✅ VERCEL_ORG_ID saved`n" -ForegroundColor Green
}

# Set VERCEL_PROJECT_ID
Write-Host "Step 4️⃣  - Vercel Project ID" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
Write-Host "1. Go to: https://vercel.com/account/projects"
Write-Host "2. Find 'taskflow' or 'team-task-manager'"
Write-Host "3. Copy the Project ID"
$vercelProjectId = Read-Host "Paste your Vercel Project ID"

if ($vercelProjectId) {
    gh secret set VERCEL_PROJECT_ID --body "$vercelProjectId"
    Write-Host "✅ VERCEL_PROJECT_ID saved`n" -ForegroundColor Green
}

# Set MONGO_URI (pre-filled)
Write-Host "Step 5️⃣  - MongoDB URI (Pre-filled)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
$mongoUri = "mongodb+srv://taskflow:taskflow@cluster0.qhcqyyq.mongodb.net/team-task-manager?appName=Cluster0"
gh secret set MONGO_URI --body "$mongoUri"
Write-Host "✅ MONGO_URI saved`n" -ForegroundColor Green

# Set JWT_SECRET (pre-filled)
Write-Host "Step 6️⃣  - JWT Secret (Pre-filled)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
$jwtSecret = "taskflow_jwt_secret_2026_secure_key"
gh secret set JWT_SECRET --body "$jwtSecret"
Write-Host "✅ JWT_SECRET saved`n" -ForegroundColor Green

# Set VITE_API_URL
Write-Host "Step 7️⃣  - Vite API URL" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
Write-Host "After Railway deploys, you'll get a URL like:"
Write-Host "https://team-task-manager.up.railway.app"
Write-Host "Add /api to it: https://team-task-manager.up.railway.app/api"
$viteApiUrl = Read-Host "Paste your Railway API URL (or leave blank to update later)"

if ($viteApiUrl) {
    gh secret set VITE_API_URL --body "$viteApiUrl"
    Write-Host "✅ VITE_API_URL saved`n" -ForegroundColor Green
} else {
    Write-Host "⏭️  Skipped - You can update this after first Railway deployment`n" -ForegroundColor Yellow
}

# Summary
Write-Host "════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ SETUP COMPLETE!" -ForegroundColor Green
Write-Host "════════════════════════════════════════════════════════`n"

Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Verify secrets at: https://github.com/NINJAHATTORI004/Taskflow/settings/secrets/actions" -ForegroundColor White
Write-Host "2. Push a change to trigger deployment:" -ForegroundColor White
Write-Host "   git add -A && git commit -m 'Trigger deployment' && git push" -ForegroundColor Cyan
Write-Host "3. Watch deployments at: https://github.com/NINJAHATTORI004/Taskflow/actions" -ForegroundColor White
Write-Host "4. After Railway URL is generated, update VITE_API_URL secret with the URL/api" -ForegroundColor White
Write-Host "`n🚀 Your app will now deploy automatically on every push to main!`n" -ForegroundColor Green
