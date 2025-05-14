# Deployment Guide

This boilerplate project supports deployment to various services. Below are guides for each supported deployment platform.

## Vercel (Frontend)

The Next.js frontend is configured for easy deployment to Vercel.

### Deployment Steps

1. Install Vercel CLI: `npm install -g vercel`
2. Run from the frontend directory: `cd src/frontend && vercel`
3. Follow the prompts to connect to your Vercel account
4. For production deployment: `vercel --prod`

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

## Render (Backend)

The Express backend is configured for deployment to Render.

### Deployment Steps

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `cd src/backend && npm install && npm run build`
4. Set the start command: `cd src/backend && npm start`
5. Add environment variables as needed

The `render.yaml` file in the backend directory can also be used for blueprint-based deployments.

## Docker Deployment

This project includes Docker configurations for both development and production.

### Development

```bash
docker-compose up
```

### Production

```bash
# Build and run frontend
cd src/frontend
docker build -f Dockerfile.prod -t boilerplate-frontend .
docker run -p 3000:3000 boilerplate-frontend

# Build and run backend
cd src/backend
docker build -f Dockerfile.prod -t boilerplate-backend .
docker run -p 3001:3001 boilerplate-backend
```

## Environment Variables

Remember to set appropriate environment variables for each deployment environment. Refer to the `.env.example` files in both frontend and backend directories.