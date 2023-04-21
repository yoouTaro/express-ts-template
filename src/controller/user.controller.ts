import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";

async function get(req: Request, res: Response, next: NextFunction) {
  res.json(await userService.get());
}

export default { get };
