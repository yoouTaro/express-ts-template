import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "ep-noisy-flower-467034.ap-southeast-1.aws.neon.tech",
  port: 5432,
  username: "yoouTaro",
  password: "k0aXinf2qECU",
  database: "neondb",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: [],
  subscribers: [],
  migrationsTableName: "migrations",
  ssl: { rejectUnauthorized: false },
  extra: { ssl: true },
});

export default AppDataSource;
