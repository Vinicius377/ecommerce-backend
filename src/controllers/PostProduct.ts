import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export default class PostProduct {
  public async handler(req: Request, res: Response) {
    const { name, price, score } = req.body;

    const filePath = req.file?.path;
    if (name && price && filePath && score) {
      await prismaClient.products.create({
        data: {
          name,
          price: Number(price),
          score: Number(score),
          urlFile: filePath,
        },
      });
      res.json({ message: "sucess in post product" });
    } else {
      res.json({ message: "error in post product" });
    }
  }
}
