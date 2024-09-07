import { Request, Response } from "express";
import * as KPIsService from "./kpis.service";
import { sendSuccessResponse, sendFailureResponse } from "../../utils/respsonse";

const getKPIs = async (req: Request, res: Response) => {
  try {
    const kpis = await KPIsService.getKPIs();
    sendSuccessResponse(200, kpis, res);
  } catch (err) {
    sendFailureResponse(404, "KPIs not found", [err as Error], res);
  }
};

export { getKPIs };
