import { Sequelize } from 'sequelize';

export const db = new Sequelize(
    'database',
    'root',
    'root',
    {
        dialect: 'mysql',
        host: 'db',
        port: 3306
    }
);