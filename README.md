# ogboo26 — AI-Powered Personalized Learning

     This repository is a minimal, working scaffold for an AI-powered personalized learning platform.

     ## What's included
     - backend/ : Express server with demo routes and an AI explain endpoint
     - frontend/: Minimal React app (Vite) showing a student dashboard
     - docs/ : onboarding and API docs

     ## Quickstart (local demo)
     1. Start backend:
- cd backend
- npm install
- copy .env.example to .env and fill values (MONGO_URI, OPENAI_API_KEY)
- npm run start
     2. Start frontend:
- cd frontend
- npm install
- npm run start

     The frontend expects the backend available at the same origin (use a proxy or run both at same host when testing).

     ## Files to customize
     - Add real user auth, persistent DB models, and a real OpenAI key.

     ## License
     MIT