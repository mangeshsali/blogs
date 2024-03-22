import express from "express";
import route from "./routes/index.js";
import connect from "./config/database.js";
import "dotenv/config";
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/api", route);

connect();
app.listen(process.env.PORT, () => {
  console.log("Server Started");
});
