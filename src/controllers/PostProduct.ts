import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export default class PostProduct {
  public async handler(req: Request, res: Response) {
    const { name, price, score, description } = req.body;
    const filePath = req.file?.path;

    if (name && price && filePath && score) {
      try {
        await prismaClient.products.create({
          data: {
            name,
            price: Number(price),
            score: Number(score),
            urlFile: filePath,
            description,
          },
        });
        res.status(200).json({ message: "product created" });
      } catch (e) {
        throw new Error("it was not possible create a product");
      }
    } else {
      throw new Error("insufficient information");
    }
  }
}
