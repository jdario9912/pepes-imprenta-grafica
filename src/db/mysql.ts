import { mysqlConfig } from "@/config";
import { createPool } from "mysql2/promise";

export const pool = createPool(mysqlConfig);
