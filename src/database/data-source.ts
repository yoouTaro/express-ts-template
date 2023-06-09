import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

const {
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DEBUG,
  DB_SSL,
} = process.env || {};

export const dataSource = new DataSource({
  type: (DB_TYPE as any) || "postgres",
  host: DB_HOST || "localhost",
  port: DB_PORT ? parseInt(DB_PORT) : 5432,
  username: DB_USERNAME || "postgres",
  password: DB_PASSWORD || "postgres",
  database: DB_NAME || "postgres",
  synchronize: false,
  logging: DB_DEBUG == "true",
  entities: ["**/entity/**/*.ts"],
  migrations: ["**/database/migrations/**/*.ts"],
  migrationsTableName: "migrations",
  ssl: { rejectUnauthorized: false },
  extra: { ssl: DB_SSL == "true" },
});
