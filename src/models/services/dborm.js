import { Sequelize } from "sequelize";

const database = new Sequelize('webii', 'root', 'root', {dialect: 'mysql', host: 'localhost', port: 3306})

export default database;