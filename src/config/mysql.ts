const env = process.env;

const host = env.MYSQL_HOST;
const port = env.MYSQL_PORT;
const user = env.MYSQL_USER;
const password = env.MYSQL_PASSWORD;
const database = env.MYSQL_DATABASE;

const mysqlConfig = {
  host,
  port,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
};

export default mysqlConfig;
