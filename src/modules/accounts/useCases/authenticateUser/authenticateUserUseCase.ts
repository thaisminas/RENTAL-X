import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from '../../../../shared/errors/appError';

interface IRequest{
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string
        email: string
    },

    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(@inject("UsersRepository")
    private userRepository: IUsersRepository){}

    async execute({email, password}: IRequest): Promise<IResponse>{
        const user = await this.userRepository.findByEmail(email);

        if (!user){
            throw new AppError("Email or password incorrect", 400)
        }

        //compara a senha passada pelo usuario com relacao a senha salva no banco de dados
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new AppError("Email or password incorrect", 400)
        }

        //primeiro parametro e um paulod, segundo e uma palavra secreta, posso passar qualquer coisa, ou gerar um md5 na internet, subject sempre passar qual e o id o usuario que esta gerando esse token, o expire in e o tempo para expiracao
        const token = sign({}, "d6a1cc549eeef4c9b8b969b6756fb6cd", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token, 
            user:{
                name: user.name,
                email: user.email
            }
        }


        return tokenReturn;
    }
}

export { AuthenticateUserUseCase }