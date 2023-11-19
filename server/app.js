import express from "express";
import mongoose from "mongoose";
import logIngestRouter from "./routes/logIngestor.js";
import cors from "cors";
import dotenv from "dotenv";

/* configuration */
dotenv.config();
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* Routes */
app.use("/test", (req, res) => {
  res.json({ status: 400 });
});

app.use("/api/v1", logIngestRouter);

/*  database setup */

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(3000, () => {
      console.log("server is live at port 3000");
    });
  })
  .catch((error) => {
    console.log("database connection is failed", error);
  });
