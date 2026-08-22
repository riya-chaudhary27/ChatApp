# 💬 Realtime Chat Application

A full-stack realtime chat application that allows users to communicate instantly through text messages and share images.

## 🚀 Live Demo

https://chatapp-6c6q.onrender.com

## ✨ Features

* 🔐 User registration and login with JWT authentication
* 💬 Realtime one-to-one messaging using Socket.IO
* 🖼️ Image sharing in conversations
* 👤 User search and conversation management
* 📱 Responsive chat interface
* 🔄 Realtime message updates without refreshing the page
* ☁️ Cloudinary integration for image uploads
* 🗄️ MongoDB database for storing users, conversations and messages

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* Socket.IO
* JWT
* Multer

### Database & Services

* MongoDB
* Mongoose
* Cloudinary

## 📸 Screenshots


<img width="777" height="862" alt="image" src="https://github.com/user-attachments/assets/6cf28801-90b5-4f84-af7d-e1cb7db5d079" />

* Login page
<img width="1283" height="818" alt="image" src="https://github.com/user-attachments/assets/bdc9eead-a20c-497c-86d5-926a44ef3767" />

* Chat interface
<img width="1563" height="1006" alt="ChatGPT Image Aug 22, 2026, 08_36_29 AM" src="https://github.com/user-attachments/assets/cfc1635e-b3ef-4bf4-9435-a1a344adb116" />

* Image message

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
cd ChatApp
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Configure environment variables

Create a `.env` file in the backend directory and add your required credentials:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 5. Run the backend

```bash
npm run dev
```

### 6. Run the frontend

```bash
npm run dev
```

## 🏗️ Project Structure

```text
ChatApp/
├── frontend/
│   ├── src/
│   └── ...
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── ...
```

## 🔮 Future Improvements

* Group chats
* Typing indicators
* Online/offline user status
* Message read receipts
* Voice and video calling
* Push notifications

## 👨‍💻 Author

Built as a full-stack realtime communication project to practice modern web development, authentication, realtime communication and cloud-based media storage.
