import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    required: "post",
  },
  user: {
    type: String,
    required: true,
  },
});

const likeschema = mongoose.model("like", likeSchema);
export default likeschema;
