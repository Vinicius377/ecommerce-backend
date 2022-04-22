import { Router } from "express";
import PostProduct from "./controllers/PostProduct";
import { upload } from "./config/multer";

const postProduct = new PostProduct();
const routes = Router();

routes.post("/product", upload.single("file"), postProduct.handler);

export default routes;
