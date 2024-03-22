import commentschema from "../models/commentModel.js";
import postschema from "../models/postModel.js";

const commentController = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    const data = await commentschema.create({ user, body });

    const result = await postschema
      .findByIdAndUpdate(post, {
        $push: { comment: data._id },
      })
      .populate("comment")
      .exec();
    res.status(200).json({ comments: result });
  } catch (error) {
    return res.status(500).json({ error: "Error in Comment " });
  }
};
export default commentController;
