const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/userRoute");
const mongoose = require("mongoose");

// Load environment variables
require('dotenv').config();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL, // Use environment variable for the client URL
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/", router);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

const PORT = process.env.PORT || 3000; // Use the PORT from the .env file
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
