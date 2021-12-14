// @types application
import { ICreateUserRequest } from '../@types';

// import user repositorie
import { UserRepositorie } from '../repositories/UserRepositorie';

export class CreateUserService {

    // class constructor that set userRepositorie attribute type
    constructor(private userRepositorie: UserRepositorie){}

    async execute({ name, username, email, password}: ICreateUserRequest) {

        // create a new user on UserRepositorie instance
        const user = await this.userRepositorie.create({
            name,
            email,
            password,
            username
        });

        return user;
    }
}