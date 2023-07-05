import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.service";

export class UserController {
  constructor(public userService: UserService) {
    this.get = this.get.bind(this);
  }

  async get(req: Request, res: Response, next: NextFunction) {
    res.json(await this.userService.get());
  }
}

export default new UserController(new UserService());
