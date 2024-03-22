import mongoose from "mongoose";
import "dotenv/config";
const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch((error) => {
      console.error("ERROR IN DB CONNECT:", error);
    });
};

export default connect;
