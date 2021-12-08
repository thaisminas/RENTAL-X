import { Router } from "express";
import multer from "multer";

import  createCategoryController  from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

//determinando local para salvar os arquivos
const upload = multer({
    dest:'./tmp',
});


categoriesRoutes.post("/", (request, response ) => {
    return createCategoryController().handle(request, response);
})


categoriesRoutes.get("/", (request, response)=> {
    return listCategoriesController.handle(request, response);
})


//Passando o multer como middleware e adiciona como single para receber um arquivo por vez
categoriesRoutes.post('/import', upload.single('file'), (request, response)=> {
    return importCategoryController.handle(request, response);
})

export { categoriesRoutes };
