// import User Model
import { User } from '../../Models/User';

// @types application
import { ICreateUserDTO } from '../../@types';

export class UserRepositorie {

    async create({ name, username, password, email}: ICreateUserDTO) {
        // create new user with user DTO
        const user = await User.create({
            name,
            username,
            email,
            password,
        });

        return user;
    }

    async list() {
        // get all registered users
        const users = await User.findAll();

        return users;
    }

    async delete(id: string) {
        // search for user by Id
        const user = await User.findOne({where: {id: id}});

        if(!user) {
            throw new Error("User not found !") 
        }

        // destroy user on db by ID
        await User.destroy({where: {id}})
        return;
    }

    async findByEmail(email: string) {
        const user = await User.findOne({where: {email: email}})

        return user;
    }
}