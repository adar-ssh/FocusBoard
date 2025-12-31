import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.MONGO_URI) {
    console.error("MONGO_URI environment variable is required");
    process.exit(1);
    throw new Error("MONGO_URI environment variable is required");
}

mongoose.set("strictQuery", true); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected"))
    .catch(err => console.log("DB Connection Error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));