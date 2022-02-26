import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

// Components
import Connection from "./connection/db.js";
import DefaultData from "./default.js";

// Routes
import Route from "./routes/route.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", Route);

const start = async () => {
  try {
    // connect DB
    await Connection(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();

DefaultData();
