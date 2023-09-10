import { Sequelize, Model, DataTypes } from 'sequelize'
import sequelize from '../db/db.js'

export class Todo extends Model {}

Todo.init(
  {
    todo_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
