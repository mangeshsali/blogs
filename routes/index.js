import { Router } from "express";
import {
  postController,
  getallpostController,
} from "../controllers/postController.js";
import commentController from "../controllers/commentController.js";
import likeController from "../controllers/likeController.js";
import unlikeController from "../controllers/unlikeController.js";
// import postController from "../controllers/postController.js";
const route = Router();

route.get("/home", (req, res) => {
  res.send("Home Page");
});
route.post("/post", postController);
route.post("/comment", commentController);
route.post("/like", likeController);
route.post("/unlike", unlikeController);
route.get("/allpost", getallpostController);

export default route;
