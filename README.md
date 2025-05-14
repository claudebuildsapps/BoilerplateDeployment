# Boilerplate Project

A full-stack boilerplate project with easy deployment to various services including Vercel, Render, and Docker deployments.

## Project Structure

```
.
├── .github/           # GitHub Actions workflows
├── docs/              # Documentation
├── src/
│   ├── frontend/      # Next.js frontend application
│   └── backend/       # Express TypeScript backend application
├── docker-compose.yml # Docker configuration for local development
├── Makefile           # Convenience commands for development
└── README.md          # This file
```

## Technologies

### Frontend
- Next.js (React framework)
- TypeScript
- ESLint for code quality
- CSS Modules for styling

### Backend
- Express.js
- TypeScript
- Helmet for security headers
- CORS support
- Morgan for request logging

### Development Tools
- Docker and Docker Compose for containerization
- Makefile for convenience commands
- GitHub Actions for CI/CD
- ESLint for code quality

## Getting Started

### Using Make Commands (Recommended)

```bash
# Install all dependencies
make setup

# Run both frontend and backend in development mode
make dev

# Run only frontend
make dev-frontend

# Run only backend
make dev-backend

# Build for production
make build

# Clean installed modules and build artifacts
make clean
```

### Manual Setup

1. Clone the repository
2. Install root dependencies: `npm install`
3. Set up frontend: `cd src/frontend && npm install`
4. Set up backend: `cd src/backend && npm install`
5. Run development servers:
   - Frontend: `cd src/frontend && npm run dev`
   - Backend: `cd src/backend && npm run dev`
   - Both (from root): `npm run dev`

### Using Docker

```bash
# Start both frontend and backend using Docker
docker-compose up

# Build and start for production
docker-compose -f docker-compose.prod.yml up --build
```

## Deployment Options

This project is configured for easy deployment to multiple platforms:

### Vercel (Frontend)

```bash
# Deploy frontend to Vercel
make deploy-vercel

# Or manually
cd src/frontend && npx vercel
```

### Render (Backend)

```bash
# Deploy backend to Render
make deploy-render

# Or use the Render Dashboard with our configuration
```

### Docker Deployment

For production Docker deployment:

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

## Configuration

### Environment Variables

- Frontend: Create `.env.local` in `src/frontend` (see `.env.example`)
- Backend: Create `.env` in `src/backend` (see `.env.example`)

## Documentation

For more detailed deployment instructions, see [Deployment Guide](docs/DEPLOYMENT.md).

## License

MIT