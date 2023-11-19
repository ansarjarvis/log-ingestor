import express from "express";
import Log from "../models/log.js";

let router = express.Router();

router.post("/logs", async (req, res) => {
  let {
    level,
    message,
    resourceId,
    timestamp,
    traceId,
    spanId,
    commit,
    parentResourceId,
  } = req.body;
  let newLog = new Log({
    level,
    message,
    resourceId,
    timestamp,
    traceId,
    spanId,
    commit,
    parentResourceId,
  });
  await newLog.save();
  res.status(201).json({ message: "Log created successfully." });
});

router.get("/logs", async (req, res) => {
  let logs = await Log.find({});
  res.status(200).json(logs);
});

export default router;
