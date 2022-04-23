import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

interface UpdatedValues {
  [key: string]: string | number;
}

export default class UpdateProduct {
  public async handler(req: Request, res: Response) {
    const { price, score, name, description, id } = req.body;
    const data = {
      price: Number(price),
      score: Number(score),
      name,
      description,
    };

    let updatedData: UpdatedValues = {};
    for (let [key, value] of Object.entries(data)) {
      if (Boolean(value)) {
        updatedData[key] = value;
      }
    }

    try {
      await prismaClient.products.update({
        where: {
          id,
        },
        data: {
          ...updatedData,
          updatedAt: new Date(),
        },
      });
      res.json({ message: `product with id ${id} updated` });
    } catch (e) {
      throw new Error("it was not possible to update the product" + e);
    }
  }
}
