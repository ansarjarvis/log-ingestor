import mongoose from "mongoose";

let logSchema = new mongoose.Schema({
  level: String,
  message: String,
  resourceId: String,
  timestamp: String,
  traceId: String,
  spanId: String,
  commit: String,
  parentResourceId: String,
});

let Log = mongoose.model("Log", logSchema);
export default Log;
