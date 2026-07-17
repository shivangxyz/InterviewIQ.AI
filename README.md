# InterviewIQ.AI

InterviewIQ.AI is an AI-powered interview preparation platform that helps users practice for job interviews through simulated Q&A sessions, get feedback on their responses, and build confidence before the real thing.

## Live Demo

- **App:** https://interviewiq-ai-client-4q9e.onrender.com
- **API:** https://interviewiq-ai-2-iyrw.onrender.com

## Features

- AI-generated interview questions
- Interactive practice sessions with instant feedback
- User authentication via Firebase
- Subscription / premium access via Razorpay
- Responsive, modern UI built with React

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Authentication | Firebase Auth |
| Payments | Razorpay |
| Deployment | Render |

## Project Structure
InterviewIQ.AI/
client/   React frontend (Vite)
server/   Express backend API

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm
- A MongoDB Atlas account and connection string
- A Firebase project with Authentication enabled
- A Razorpay account for payment integration

### Environment Variables

Create a `.env` file in the `server/` directory:

> Note: `.env` files are gitignored and not included in this repository. You'll need to create your own using the variable names above.

### Installation

```bash
git clone https://github.com/shivangxyz/InterviewIQ.AI.git
cd InterviewIQ.AI

cd server
npm install

cd ../client
npm install
```

### Running Locally

Open two terminals.

**Terminal 1 — Server:**
```bash
cd server
npm start
```

**Terminal 2 — Client:**
```bash
cd client
npm run dev
```

The client will typically run on `http://localhost:5173` and connect to the local server.

## Deployment

The app is deployed on [Render](https://render.com), with the client and server running as two separate services, each configured with its own environment variables in the Render dashboard.

## License

This project is currently unlicensed. All rights reserved by the author.

## Author

Built by [shivangxyz](https://github.com/shivangxyz).
