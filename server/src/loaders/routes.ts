import { Router } from "express";
import healthRouter from "../api/health/health.route";
import kpisRouter from "../api/kpis/kpis.route";

const router = Router();

router.use("/health", healthRouter);
router.use("/kpis", kpisRouter);

export default router;
