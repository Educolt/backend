import { v4 as uuid } from 'uuid';
// @types application
import { ICreateUserDTO } from '../../@types';

export class UserRepositorie {

    private users: Array<{}> = [];

    async create({ name, username, password, email}: ICreateUserDTO) {
        const user = {};

        Object.assign(user, {
            id: uuid(),
            name,
            username,
            email,
            password,
            created_at: new Date()
        });

        this.users.push(user);

        return user;
    }

    async list() {
        return this.users;
    }
}