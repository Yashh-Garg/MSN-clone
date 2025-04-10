# 🧩 MSN-Clone

A full-stack application with a Node.js/Express backend and a Vite + React + Tailwind CSS frontend.

---

## 📁 Folder Structure

```
msn-clone/
├── client/         # Frontend - React with Vite & Tailwind
└── server/         # Backend - Node.js with Express & MongoDB
```

---

## 🚀 Features

- ⚛️ **Frontend**: Built with React, Vite, and Tailwind CSS.
- 🛠️ **Backend**: Node.js + Express API.
- 🗃️ **Database**: MongoDB via Mongoose.
- 🖼️ Icon management (or similar CRUD feature based on `iconController.js`).
- 📦 Environment variable support via `.env`.

---

### Prerequisites

- Node.js (v16+)
- MongoDB running locally or in the cloud (e.g., Atlas)

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend should be running on: [http://localhost:5173](http://localhost:5173)

---

## 📦 Scripts

### Backend

| Script         | Description          |
|----------------|----------------------|
| `npm run dev`  | Run server with nodemon |
| `npm start`    | Start server normally |

### Frontend

| Script         | Description             |
|----------------|-------------------------|
| `npm run dev`  | Start Vite dev server   |
| `npm run build`| Build for production    |
| `npm run preview` | Preview production build |

---

## 🔗 API Endpoints (Example)

> Assuming you have routes defined for `iconController`

- `GET /api/icons` - Get all icons
- `POST /api/icons` - Add new icon

---

## 📁 Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Express.js, Mongoose
- **Database**: MongoDB
- **Others**: dotenv, nodemon

---

## 🧪 Future Improvements

- Add authentication (JWT)
- Add unit & integration tests
- Deploy with Vercel (frontend) and Render/Heroku (backend)
