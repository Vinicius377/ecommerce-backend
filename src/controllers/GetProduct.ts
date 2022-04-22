import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export default class GetProduct {
  public async handler(req: Request, res: Response) {
    const { id } = req.params;
    if (id) {
      const data = await prismaClient.products.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.json(data);
    } else {
      res.json({ message: "the product with this id does exist" });
    }
  }
}
