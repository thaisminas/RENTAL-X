import { Router } from "express";
import { categoriesRoutes } from "./categoriesRoutes";
import { specificationsRoutes } from "./SpecificationRoutes";
import { usersRoutes } from "./usersRoutes";


const router = Router();


//Rotas
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes)
router.use("/users", usersRoutes)


export { router }