# 🔐 Google OAuth 2.0 Login Demo

🚀 **Live Demo:** [Click Here](https://google-login-demo.onrender.com)

A full-stack app using **Google OAuth 2.0** for user authentication built with **MongoDB, Express, React (Vite), and Node.js**.

---

## 🚀 Features

- Google Login via OAuth 2.0
- JWT-based authentication
- Stores user data in MongoDB
- Protected dashboard
- Deployed frontend & backend

---
## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Backend:** Express + Node.js
- **Database:** MongoDB Atlas

## ⚙️ Setup

### 🔒 Backend `.env`

```env
PORT=8080
DB_URL=your_mongodb_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
JWT_TIMEOUT=12h
```
### 🔒 Frontend `.env`
```
VITE_BASE_URL=https://your-backend-url
```
### 🧪 Run Locally
```
# Backend
cd backend
npm install
node index.js

# Frontend
cd frontend
npm install
npm run dev
```
