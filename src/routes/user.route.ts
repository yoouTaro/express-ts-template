import express from "express";

import userController from "../controller/user.controller";

const router = express.Router();

router.get("/", (req, res, next) => userController.get(req, res, next));

export default router;
