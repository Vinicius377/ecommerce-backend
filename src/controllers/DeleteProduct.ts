import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export default class DeleteProduct {
  public async handler(req: Request, res: Response) {
    const { id } = req.body;

    try {
      await prismaClient.products.delete({
        where: {
          id,
        },
      });
      res.json({ message: `deleted product with id ${id}` });
    } catch (e) {
      throw new Error(`it was not possible delete product with id ${id}`);
    }
  }
}
