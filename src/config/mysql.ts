const env = process.env;

const environment = env.NODE_ENV;

const productionEnv = "production";

const host = environment === productionEnv ? env.MYSQL_HOST : env.MYSQL_HOST_DEV;
const port = environment === productionEnv ? env.MYSQL_PORT : env.MYSQL_PORT_DEV;
const user = environment === productionEnv ? env.MYSQL_USER : env.MYSQL_USER_DEV;
const password = environment === productionEnv ? env.MYSQL_ROOT_PASSWORD : env.MYSQL_ROOT_PASSWORD_DEV;
const database = environment === productionEnv ? env.MYSQL_DATABASE : env.MYSQL_DATABASE_DEV;

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

export default mysqlConfig ;
