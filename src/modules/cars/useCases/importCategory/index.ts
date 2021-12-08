import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategororyController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategororyController(importCategoryUseCase);

export { importCategoryController }