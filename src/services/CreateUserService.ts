// @types application
import { ICreateUserRequest } from '../@types';

// import user repositorie
import { UserRepositorie } from '../repositories/UserRepositorie';

export class CreateUserService {
    constructor(private userRepositorie: UserRepositorie){}

    async execute({ name, username, email, password}: ICreateUserRequest) {
        const user = await this.userRepositorie.create({
            name,
            email,
            password,
            username
        });

        return user;
    }
}