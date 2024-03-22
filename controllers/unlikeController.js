import likeschema from "../models/likeModel.js";
import postschema from "../models/postModel.js";

const unlikeController = async (req, res) => {
  const { post, like } = req.body;

  const data = await likeschema.findByIdAndDelete({ post: post, _id: like });
  const result = await postschema
    .findByIdAndUpdate(post, { $pull: { likes: data._id } }, { new: true })
    .exec();
  res.status(200).json({ likes: result });
};
export default unlikeController;
