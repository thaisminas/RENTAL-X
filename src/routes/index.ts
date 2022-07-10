import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./Specification.routes";
import { usersRoutes } from "./users.routes";


const router = Router();


//Rotas
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes)
router.use("/users", usersRoutes)
router.use(authenticateRoutes) // incluindo dessa forma nao precisa adicionar o path da rota


export { router }