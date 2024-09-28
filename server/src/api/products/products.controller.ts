import { Request, Response } from "express";
import { sendSuccessResponse, sendFailureResponse } from "../../utils/respsonse";
import * as ProductService from "./products.service";

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getProducts();
    sendSuccessResponse(200, products, res);
  } catch (err) {
    sendFailureResponse(404, "Products not found", [err as Error], res);
  }
};

export { getProducts };
