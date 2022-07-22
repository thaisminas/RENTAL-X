import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { UserRepository } from "../implementations/UsersRepository"
import { IUsersRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUsersRepository{
    users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }

    async create({driver_license, email, name, password}: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            driver_license, email, name, password,
        });
        
        this.users.push(user);
    }

    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }

}

export default UsersRepositoryInMemory;