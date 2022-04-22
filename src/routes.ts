import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("route is working!");
});

export default routes;
