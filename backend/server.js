import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Route handling
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Handle all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server and connect to MongoDB
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
