import express from "express";
import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import {
  authenticateUser,
  authenticateAuthor,
} from "./middleware/authMiddleware.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const app = express();

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(path.resolve(__dirname, "./client/dist")));

// app.use("preview", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cookieParser());

// import routes
import listingRouter from "./routes/listingRoutes.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

import { getMyListings } from "./controllers/listingController.js";

app.use("/api/v1/listings", listingRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.get("/api/v1/my-tasks", authenticateAuthor, getMyListings);

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder where images will be stored
    allowed_formats: ["jpeg", "png", "jpg"], // Allowed image formats
  },
});

// Set up multer with Cloudinary storage

const upload = multer({ storage });

// POST route to handle image upload to Cloudinary
app.post("/api/v1/upload", upload.array("images"), (req, res) => {
  console.log("got request");

  console.log(req);
  try {
    if (!files) {
      return res.status(400).send("No files uploaded.");
    }

    // Send back the uploaded images' URLs
    const imageUrls = files.map((file) => file.path);
    res.send({ message: "Images uploaded successfully", imageUrls });
  } catch (error) {
    console.log(error);

    res.status(500).send("Error uploading images");
  }
});

app.post("api/v1/upload", upload.array("images"), (req, res) => {
  console.log("got request");

  try {
    const files = req.files;
    if (!files) {
      return res.status(400).send("No files uploaded.");
    }

    // Send back the uploaded images' URLs
    const imageUrls = files.map((file) => file.path);
    res.send({ message: "Images uploaded successfully", imageUrls });
  } catch (error) {
    res.status(500).send("Error uploading images");
  }
});

// not found middleware
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

// error middleware
app.use(errorHandlerMiddleware);

// port
const PORT = process.env.PORT || 8080;

// spin-up method
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`server listening on port ${PORT} ...`));
  } catch (error) {
    console.log(error);
  }
};

// spin-up server
start();
