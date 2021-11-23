import { Router } from "express";
import { categoriesRoutes } from "./categoriesRoutes";
import { specificationsRoutes } from "./SpecificationRoutes";


const router = Router();


//Rotas
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes)


export { router }