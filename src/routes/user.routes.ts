// import dependencies
import { Request, Response } from 'express';
import { Router } from 'express';

// import create user service
import { CreateUserService } from '../services/CreateUserService';

// import user repositorie
import { UserRepositorie } from '../repositories/UserRepositorie';

// create user router
export const userRoutes = Router();

// create new instance of UserRepositorie
const userRepositorie = new UserRepositorie();

// routes
userRoutes.get('/', async (request: Request, response: Response) => {
    // get all the users from users repositorie
    const users = await userRepositorie.list();

    return response.status(200).json(users)
});

userRoutes.post('/', async (request: Request, response: Response) => {
    
    try {
        // destructure request.body
        const { name, email, password, username } = request.body;

        // verify if exist
        const exist = await userRepositorie.findByEmail(email);
        if(exist) {
            throw new Error("E-mail already registered !");
        }

        // create const data with request.body 
        const data = { name, email, password, username };

        // create new user with create user service 
        const user = await new CreateUserService(userRepositorie).execute(data);

        return response.status(201).json(user)
    } catch (error: unknown) {
        if(error instanceof Error) {
            return response.status(400).json({ message: error.message })
        }
    }
});

userRoutes.delete('/:id', async (request: Request, response: Response) => {
    try {
        // get user id in request.params
        const { id } = request.params;

        // delete user by id
        await userRepositorie.delete(id);

        return response.status(204).json();
    } catch (error: unknown) {
        if(error instanceof Error) {
            return response.status(400).json({ message: error.message })
        }
    }
});