import { Sequelize, Model, DataTypes } from 'sequelize'
import sequelize from '../db/database.js'

export class Todo extends Model {}

Todo.init(
  {
    todo_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    descriptions: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'todo',
  }
)
