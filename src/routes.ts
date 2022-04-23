import { Router } from "express";
import { upload } from "./middleware/multer";

import PostProduct from "./controllers/PostProduct";
import GetProduct from "./controllers/GetProduct";
import UpdateProduct from "./controllers/UpdateProduct";
import DeleteProduct from "./controllers/DeleteProduct";
import GetAllProducts from "./controllers/GetAllProducts";

const postProduct = new PostProduct();
const getProduct = new GetProduct();
const updateProduct = new UpdateProduct();
const deleteProduct = new DeleteProduct();
const getAllProducts = new GetAllProducts();

const routes = Router();

routes.post("/product", upload.single("file"), postProduct.handler);
routes.get("/product/:id", getProduct.handler);
routes.put("/product", updateProduct.handler);
routes.delete("/product", deleteProduct.handler);
routes.get("/products", getAllProducts.handler);

export default routes;
