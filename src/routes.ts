import { Router } from "express";
import { upload } from "./middleware/multer";

import PostProduct from "./controllers/PostProduct";
import GetProduct from "./controllers/GetProduct";
import UpdateProduct from "./controllers/UpdateProduct";

const postProduct = new PostProduct();
const getProduct = new GetProduct();
const updateProduct = new UpdateProduct();

const routes = Router();

routes.post("/product", upload.single("file"), postProduct.handler);
routes.get("/product/:id", getProduct.handler);
routes.put("/product", updateProduct.handler);

export default routes;
