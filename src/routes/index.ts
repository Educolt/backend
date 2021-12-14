// import dependencies
import { Router } from 'express';

// Application routes
import { userRoutes } from './user.routes';

// create new router
export const appRoutes = Router();

// set to use app routes
appRoutes.use("/user",userRoutes);