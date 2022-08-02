import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/categoryRepositoryInMemory";
import { CreateCarUseCase } from "./createCarUseCase"


let createCarUseCase: CreateCarUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Car", ()=> {
    beforeEach(()=> {
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(categoriesRepositoryInMemory);
    })

    it("should be able to create a new car", async () => {
        await createCarUseCase.execute({
            name: "Name car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });
    })
})