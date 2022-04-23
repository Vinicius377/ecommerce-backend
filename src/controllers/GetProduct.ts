import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export default class GetProduct {
  public handler(req: Request, res: Response) {
    const { id } = req.params;
    const resultQuery = this.dbGetQuery(id);
    if (resultQuery) {
      res.json(resultQuery);
    } else {
      res.json({ message: "error" });
    }
  }
  private async dbGetQuery(id: string) {
    if (id) {
      const data = await prismaClient.products.findUnique({
        where: {
          id: Number(id),
        },
      });
      return data;
    } else {
      return undefined;
    }
  }
}
