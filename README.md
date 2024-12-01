# Frontend Setup Guide for Ashley Project

## Project Overview
This is the frontend application for the Ashley Project. It requires the backend to be set up and running before installation.

## Prerequisites
- Node.js (recommended latest LTS version)
- npm (Node Package Manager)
- Backend Project (https://github.com/saumitravilankar/reguard-assignment-backend)

## Backend Setup Requirement
**Important:** Ensure the backend project is set up and running before proceeding:
1. Clone the backend repository: https://github.com/saumitravilankar/reguard-assignment-backend
2. Set up PostgreSQL database
3. Start the backend server

## Setup Instructions

### 1. Clone the Frontend Project
```bash
git clone https://github.com/saumitravilankar/reguard-assignment-frontend.git
cd reguard-assignment-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
- A `.env` file is provided for easier setup and testing
- Verify that the environment variables are correctly configured

### 4. Start Development Server
```bash
npm run dev
```

## Troubleshooting
- Ensure backend server is running on the expected port
- Check `.env` file for correct backend URL configuration
- Verify all dependencies are installed correctly

## Recommended Versions
- Node.js: LTS version
- npm: Latest stable version

## Connection Notes
- The frontend will communicate with the backend API
- Make sure backend services are active before running frontend
