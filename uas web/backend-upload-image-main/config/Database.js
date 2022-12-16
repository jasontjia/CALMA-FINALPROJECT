import { Sequelize } from "sequelize";

const db = new Sequelize("db_calma", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;