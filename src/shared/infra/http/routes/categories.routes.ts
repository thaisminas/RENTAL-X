import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";

import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { ImportCategororyController } from "../../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategories/ListCategoriesController";
import { ListCategoriesUseCase } from "../../../../modules/cars/useCases/listCategories/ListCategoriesUseCase";

const categoriesRoutes = Router();

//determinando local para salvar os arquivos
const upload = multer({
    dest:'./tmp',
});

const createCategoryController = new CreateCategoryController()

const listCategoryController = new ListCategoriesController()

const importCategoryController = new ImportCategororyController()


categoriesRoutes.post("/", createCategoryController.handle)


categoriesRoutes.get("/", listCategoryController.handle)


//Passando o multer como middleware e adiciona como single para receber um arquivo por vez
categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle)

export { categoriesRoutes };
