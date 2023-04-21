import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/user.route";
import { AppDataSource } from "./database/data-source";

AppDataSource.initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);

    const app = express();
    const port = Number(process.env.PORT) || 3000;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get("/", (req: Request, res: Response) => {
      res.json({ message: "ok" });
    });

    app.use("/user", userRouter);

    app.listen(port, "0.0.0.0", () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });
