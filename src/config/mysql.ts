import { PoolOptions } from "mysql2/promise";

const host = process.env.MYSQL_HOST || "";
const port = process.env.MYSQL_PORT || ""
const user = process.env.MYSQL_USER || "";
const password = process.env.MYSQL_PASSWORD || "";
const database = process.env.MYSQL_DATABASE || "";

const mysqlConfig: PoolOptions = {
  host,
  port: parseInt(port),
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,

};

export default mysqlConfig;
