import { DataTypes } from "sequelize";
import { database } from "../services/dborm";

export const Cliente = database.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER
    },
    endereco: DataTypes.STRING
});