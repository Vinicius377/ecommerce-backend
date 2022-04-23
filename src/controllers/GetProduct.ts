import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export default class GetProduct {
  public async handler(req: Request, res: Response) {
    const { id } = req.params;
    let resultQuery;

    if (id) {
      try {
        const data = await prismaClient.products.findUnique({
          where: {
            id: Number(id),
          },
        });
        resultQuery = data;
      } catch (e) {
        throw new Error("it was not possible get the product" + e);
      }
    } else {
      throw new Error("id is undefined");
    }
    res.json(resultQuery);
  }
}
