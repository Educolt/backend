// import dependencies
import { Sequelize } from 'sequelize';

// import config const
import { config } from '../config/db.config'

// destructure db config const
const { 
    db_name,
    db_user,
    db_user_password,
    db_host: host,
    db_port: port
} = config;

// create and export new Sequelize db instance with config
export const db = new Sequelize(
    db_name,
    db_user,
    db_user_password,
    {   
        dialect: `mysql`,
        host,
        port
    }
);