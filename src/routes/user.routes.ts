import { Router } from 'express';

export const userRoutes = Router();

// rotas
userRoutes.get('/', (request, response) => {
    return response.status(200).json({message: 'Users routes - Its Alive !'})
});
userRoutes.post('/', (request, response) => {
    const {} = request.body;
    return response.status(201).json({message: 'Users routes - Its Alive !'})
});