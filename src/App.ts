// import dependencies
import express from 'express';
import cors from 'cors';

// App routes
import { appRoutes } from './routes'

// set new instance of express server as app const
export const app = express();

// set server to allow access to anyone
app.use(cors());

// set server to use express.json()
app.use(express.json());

// set appRoutes
app.use(appRoutes);