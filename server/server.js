import express, { urlencoded } from "express"
import cors from "cors"
import "dotenv/config"
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from "./routes/aiRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();

await connectCloudinary();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(clerkMiddleware());

app.get("/", (req, res) => {
    res.send("Hello from Quick Ai")
})

app.use(requireAuth());

app.use('/api/ai', aiRouter);
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));