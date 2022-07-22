import "reflect-metadata";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";
import UsersRepositoryInMemory from '../../repositories/in-memory/userRepositoryInMemory';
import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from '../../../../errors/appError';

//criando as variaveis e tipando elas com as classes
let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("autheticate user", ()=> {
    //befoEach e tudo que e antes dos testes
    beforeEach(()=> {
        //intanciando as classes que serao necessarias para o teste funcionar corretamente
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    })

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "000123",
            email: "user@test.com",
            password: "1234",
            name: "User Test"
        };

        //cria o usuario 
        await createUserUseCase.execute(user);

        //realiza a autenticacao e retorna um token
        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        //espera que o resultado tenha a propriedade token
        expect(result).toHaveProperty("token");
    })

    it("should not be able authenticate an nonetexistent user", ()=> {
        //vai receber um email que nao esta criado e ira dar erro. Eu passo o reject apontando que e uma instancia do meu AppError
        expect(async()=> {
            await authenticateUserUseCase.execute({
                email: 'false@gmail.com',
                password: '1234'
            });
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to authenticate with incorrect password", () => {

        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license : "9999",
                email: "user@user.com.br",
                password: "1234",
                name: "User Test Error"
            }

            //cria o usuario
            await createUserUseCase.execute(user);

            //realiza a autenticacao. Nesse caso e para dar erro por causa da senha
            await authenticateUserUseCase.execute({
                email: user.email,
                password: "IncorrectPassword"
            })

        }).rejects.toBeInstanceOf(AppError);

    })
})