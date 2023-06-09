import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { dataSource } from "./database/data-source";
import userRouter from "./routes/user.route";

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

dataSource
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "ok" });
});

app.use("/user", userRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`App listening at http://localhost:${port}`);
});
