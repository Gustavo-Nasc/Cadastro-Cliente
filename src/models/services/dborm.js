import { Sequelize } from "sequelize";

export const database = new Sequelize('webii', 'root', 'root', {dialect: 'mysql', host: 'localhost', port: 3306});