
# MSN Clone

A modern remake of MSN’s dashboard UI with custom shortcut management, built using React, Express, and MongoDB.

## ✨ Features

- **Frontend**: Built with React, Vite, and Tailwind CSS for a responsive, dynamic UI.
- **Backend**: Powered by Node.js and Express for RESTful APIs and server-side logic.
- **Database**: MongoDB with Mongoose for robust and scalable data storage.
- **Custom Shortcut Management**: Add and delete shortcuts to personalize your dashboard (feature not available in original MSN).
- **Environment Variables**: Supports flexible configuration through `.env` files.

## 📁 Project Structure

```
msn-clone/
├── client/         # Frontend - React + Vite + Tailwind CSS
└── server/         # Backend - Express + Mongoose
```
## 🖼️ Preview

![MSN Clone Home Screenshot](./assets/Home.png)
![MSN Clone AddShortcut Screenshot](./assets/AddShortcut.png)


## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Yashh-Garg/MSN-clone.git
cd MSN-clone
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd  client
npm install
npm run dev
```

Your app will be running at the Vite dev server URL (usually `http://localhost:5173`).

## 🧪 Technologies Used

- React
- Vite
- Tailwind CSS
- Node.js
- Express
- MongoDB + Mongoose

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## 📄 License

Licensed under the MIT License. See `LICENSE` for more info.

---

> Inspired by the classic MSN experience — rebuilt for the modern web, with added personalization.
