import { Request, Response } from 'express';
import { Router } from 'express';

// create user service
import { CreateUserService } from '../services/CreateUserService';

// import user repositorie
import { UserRepositorie } from '../repositories/UserRepositorie';

// create user router
export const userRoutes = Router();

// create new instance of UserRepositorie
const userRepositorie = new UserRepositorie();

// rotas
userRoutes.get('/', async (request: Request, response: Response) => {
    // get all the users from users repositorie
    const users = await userRepositorie.list();

    return response.status(200).json(users)
});

userRoutes.post('/', async (request: Request, response: Response) => {
    
    // destructure request.body
    const { name, email, password, username } = request.body;

    // create const data with request.body 
    const data = { name, email, password, username };

    // create new user with create user service 
    const user = await new CreateUserService(userRepositorie).execute(data);

    return response.status(201).json(user)
});

userRoutes.delete('/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    await userRepositorie.delete(id);
    return response.status(204).json();
});