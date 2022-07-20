import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/categoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { AppError } from '../../../../errors/appError';

let createCategoryUseCase : CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoriesRepositoryInMemory;

//describe serve para agrupar os nossos testes
describe("Create Category", ()=> {

    //e quando quer que algo seja executado antes dos testes
    beforeEach(()=> {
        //esta chamando o repositorio em memoria
        categoryRepositoryInMemory = new CategoriesRepositoryInMemory();
        //esta passando dentro da minha classe estanciada o meu repositorio em memoria como parametro
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory);
    })

    //testando caso de sucesso
    it("should be able to create a new category", async () => {
        //criando uma categoria de teste
        const category = {
            name: "Category teste",
            description: "Category Description Test",
        }

        //esta executando nosso useCase so que ele ira armazenar/criar a informacao em memoria
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description,
        });

        //Executo o metodo do meu respositorio em memoria buscando pelo name
        const categoryCreated = await categoryRepositoryInMemory.findByName(category.name);

        //Eu espero que tenha uma propriedade ID, porque o ID so e gerado quando cria a categoria
        expect(categoryCreated).toHaveProperty("id")
    })

    //testando caso de erro, se vier uma categoria ja existente
    it("should not be able to create a new category with name exist", async () => {

        //Se todo o codigo que tiver dentro do expect der erro,
        // no final com o rejects eu falo que ele e uma instancia do meu appError, que esta no meu useCase.
        expect(async ()=> {
            const category = {
                name: "Category teste",
                description: "Category Description Test",
            }
    
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
    
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
        }).rejects.toBeInstanceOf(AppError);
    })
})