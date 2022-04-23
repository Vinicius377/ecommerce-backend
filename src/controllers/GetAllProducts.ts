import { Request, Response } from "express";
import prismaClient from "../database/prismaClient";

export default class GetAllProducts {
  public async handler(req: Request, res: Response) {
    try {
      const data = await prismaClient.products.findMany();
      res.json(data);
    } catch (e) {
      throw new Error("internal error" + e);
    }
  }
}
