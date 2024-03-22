import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    reuired: true,
  },
});

const commentschema = mongoose.model("comment", commentSchema);
export default commentschema;
