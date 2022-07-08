import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(        
    @inject("UsersRepository")
    private UserRepository: IUsersRepository
    ){}

    async execute({name, email, password, driver_license}: ICreateUserDTO): Promise<void>{
        await this.UserRepository.create({
            name,
            email,
            password,
            driver_license
        })
    }
}

export { CreateUserUseCase }