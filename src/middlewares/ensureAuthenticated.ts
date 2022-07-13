
import { NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { AppError } from '../errors/appError';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "d6a1cc549eeef4c9b8b969b6756fb6cd") as IPayload;

        const usersRepository = new UserRepository();
        const user = usersRepository.findById(user_id);

        if(!user){
            throw new AppError ("User does not exists!", 401)
        }

        request.user = {
            id: user_id
        }

        next()
    } catch {
        throw new AppError("Invalid token!", 401);
    }

}