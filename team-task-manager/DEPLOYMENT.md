# Deployment Guide

This guide covers deploying the Team Task Manager application to various platforms.

## Prerequisites

- Git repository (GitHub, GitLab, etc.)
- MongoDB Atlas account (or self-hosted MongoDB)
- Deployment platform account (Railway, Vercel, Heroku, etc.)

## Backend Deployment

### Option 1: Railway

#### Setup Backend on Railway

1. Create a Railway account at https://railway.app
2. Create a new project
3. Connect your GitHub repository
4. Select the backend (`server`) directory
5. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure random string
   - `PORT`: 5000 (or let Railway auto-assign)

6. Deploy

Your backend will be available at `https://<project>.up.railway.app`

### Option 2: Heroku

#### Setup Backend on Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create <app-name>`
4. Set environment variables:
   ```bash
   heroku config:set MONGO_URI="<mongodb-uri>"
   heroku config:set JWT_SECRET="<random-secret>"
   ```
5. Deploy: `git push heroku main`

### Option 3: AWS Elastic Beanstalk

1. Install AWS CLI and EB CLI
2. Initialize: `eb init -p node.js-18 team-task-manager-backend`
3. Create environment: `eb create team-task-manager-env`
4. Set environment variables in AWS Console
5. Deploy: `eb deploy`

### Option 4: Digital Ocean App Platform

1. Connect your GitHub repository
2. Select backend directory
3. Set environment variables
4. Configure port (5000)
5. Deploy

## Frontend Deployment

### Option 1: Vercel (Recommended)

#### Setup Frontend on Vercel

1. Go to https://vercel.com and sign up
2. Import your GitHub repository
3. Select the `client-vite` directory as root
4. Add environment variable:
   - `VITE_API_URL`: Your backend URL (e.g., `https://backend.railway.app/api`)
5. Click Deploy

Your frontend will be available at `https://<project>.vercel.app`

### Option 2: Netlify

1. Push your code to GitHub
2. Go to https://netlify.com and connect GitHub
3. Select your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Add environment variable: `VITE_API_URL`
7. Deploy

### Option 3: GitHub Pages

1. Add to `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/team-task-manager/',
     // ... rest of config
   })
   ```
2. Run: `npm run build`
3. Push `dist` folder to `gh-pages` branch
4. Enable GitHub Pages in repository settings

### Option 4: AWS S3 + CloudFront

1. Build: `npm run build`
2. Create S3 bucket
3. Upload `dist` contents
4. Create CloudFront distribution
5. Add custom domain (optional)

## Full-Stack Deployment

### Complete Setup Example (Railway + Vercel)

**Backend on Railway:**
```
Project: team-task-manager-backend
Environment Variables:
- MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
- JWT_SECRET=your_very_secure_secret_key_min_32_chars
```

**Frontend on Vercel:**
```
Project: team-task-manager-frontend
Environment Variables:
- VITE_API_URL=https://team-task-manager-backend.up.railway.app/api
```

## Database Setup

### MongoDB Atlas

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create database user and password
4. Add IP whitelist (or allow all for testing)
5. Get connection string: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/team-task-manager
JWT_SECRET=your_secure_random_key_minimum_32_characters
NODE_ENV=production
```

### Frontend (.env)
```
VITE_API_URL=https://api.yourdomain.com/api
```

## CORS Configuration

If frontend and backend are on different domains, CORS is already configured in `server/index.js`:
```javascript
app.use(cors());
```

To restrict to specific domain in production:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));
```

## SSL/TLS Certificates

- Railway: Automatic
- Vercel: Automatic
- Netlify: Automatic
- Heroku: Automatic
- AWS: Use ACM (AWS Certificate Manager)
- Digital Ocean: Use Let's Encrypt

## Performance Optimization

### Frontend
1. Use production build: `npm run build`
2. Enable gzip compression
3. Use CDN (Vercel/Netlify provide this automatically)
4. Lazy load components if needed

### Backend
1. Enable connection pooling (MongoDB)
2. Add caching headers
3. Use compression middleware:
   ```javascript
   const compression = require('compression');
   app.use(compression());
   ```

## Monitoring and Logging

### Application Monitoring
- Railway: Built-in monitoring
- Heroku: Heroku Dashboard
- AWS: CloudWatch
- Digital Ocean: Built-in metrics

### Error Tracking
Add Sentry for error tracking:

Backend:
```bash
npm install @sentry/node @sentry/tracing
```

Frontend:
```bash
npm install @sentry/react
```

## Backup and Recovery

### Database Backup
```bash
# MongoDB Atlas automatic backups (included)
# Manual backup:
mongodump --uri "mongodb+srv://user:pass@cluster.mongodb.net/db" --out ./backup
```

### Code Backup
- Always keep Git repository synced
- Use GitHub's backup features
- Consider multiple remote repositories

## Security Checklist

- [ ] Change `JWT_SECRET` to strong random value
- [ ] Enable HTTPS/SSL
- [ ] Set secure `MONGO_URI`
- [ ] Configure CORS properly
- [ ] Set `NODE_ENV=production`
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting
- [ ] Add input validation
- [ ] Regular security updates
- [ ] Monitor error logs

## Troubleshooting

### Backend Connection Issues
```
Error: connect ECONNREFUSED
-> Check MongoDB connection string
-> Verify IP whitelist in MongoDB Atlas
-> Check environment variables
```

### Frontend API Errors
```
Error: Network Error
-> Verify backend URL in .env
-> Check CORS settings
-> Ensure backend is running
```

### Build Failures
```
Error: npm ERR!
-> Clear cache: npm cache clean --force
-> Reinstall: rm -rf node_modules && npm install
-> Check Node version
```

## Scaling

### As Usage Grows
1. **Database**: Use MongoDB Atlas scaling
2. **Backend**: Horizontal scaling (add more instances)
3. **Frontend**: CDN is already handling this
4. **Caching**: Add Redis for session storage
5. **Load Balancing**: Use platform's built-in load balancer

## Cost Optimization

- Railway: Free tier available, pay-as-you-go
- Vercel: Free tier for frontend
- MongoDB Atlas: Free tier (512MB)
- Digital Ocean: Starting at $4/month
- AWS: Use free tier + cost calculator

## Support

For deployment issues:
1. Check platform documentation
2. Review error logs
3. Check MongoDB Atlas logs
4. Contact platform support
5. Open issue on GitHub repository
