import { Router } from "express";
import * as KPIsController from "./kpis.controller";
import { asyncWrapper } from "../../middlewares/asyncWrapper";

const router = Router();

router.get("/", asyncWrapper(KPIsController.getKPIs));

export default router;
