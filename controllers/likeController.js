import likeschema from "../models/likeModel.js";
import postschema from "../models/postModel.js";

const likeController = async (req, res) => {
  try {
    const { post, user } = req.body;

    const data = await likeschema.create({ post, user });
    const result = await postschema
      .findByIdAndUpdate(post, { $push: { likes: data._id } }, { new: true })
      .populate("likes")
      .exec();
    res.status(200).json({ likes: result });
  } catch (error) {
    return res.status(500).json({ error: "Error in like " });
  }
};
export default likeController;
