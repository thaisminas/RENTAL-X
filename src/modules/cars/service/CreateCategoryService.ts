import { response } from 'express';
import { CategoriesRepository } from "../repositories/CategoryRepository"
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';


interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest){
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        
        if(categoryAlreadyExists){
            throw new Error("Category Already exists! ")

        }

        this.categoriesRepository.create({ name, description});
    }
}



export { CreateCategoryService }