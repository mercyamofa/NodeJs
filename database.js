/*const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  database: "student_database",
  password: "Asuabeah@1",
  port: 3306,
});

module.exports = pool.promise();
*/
const Sequelize = require("sequelize");
const sequelize = new Sequelize("student_database", "root", "Asuabeah@1", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;