import { Router } from "express";
import healthRouter from "../api/health/health.route";
import kpisRouter from "../api/kpis/kpis.route";
import productsRouter from "../api/products/products.route";

const router = Router();

router.use("/health", healthRouter);
router.use("/kpis", kpisRouter);
router.use("/products", productsRouter);

export default router;
