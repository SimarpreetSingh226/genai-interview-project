const { Router } = require("express");
const authRouter = Router();

authRouter.post("/register");

module.exports = authRouter;
