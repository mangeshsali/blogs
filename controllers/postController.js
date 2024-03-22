import postschema from "../models/postModel.js";

const postController = async (req, res) => {
  try {
    const { title, body } = req.body;
    const data = await postschema.create({ title, body });
    res.json({ message: data });
  } catch (error) {
    return res.status(500).json({ error: "Error in post " });
  }
};

const getallpostController = async (req, res) => {
  const data = await postschema
    .find()
    .populate("comment")
    .populate("likes")
    .exec();
  res.status(200).json({ posts: data });
};
export { postController, getallpostController };
