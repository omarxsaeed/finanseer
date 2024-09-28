import { Router } from "express";
import { asyncWrapper } from "../../middlewares/asyncWrapper";
import * as ProductsController from "./products.controller";

const router = Router();

router.get("/", asyncWrapper(ProductsController.getProducts));

export default router;
