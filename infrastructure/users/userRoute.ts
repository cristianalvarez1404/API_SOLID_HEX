import express from "express";
const UserRoute = express.Router();
import { userController } from "./dependencies";
import { validateCredentials } from "./middlewars/validateCredentials";
import { createCredentials } from "./middlewars/createCredentials";
const user = userController;

UserRoute.get("/", (req, res) => user.getUsers(req, res));
UserRoute.get("/:id", (req, res) => user.getUser(req, res));
UserRoute.post("/", createCredentials, (req, res) => user.createUser(req, res));
UserRoute.put("/:id", validateCredentials, (req, res) =>
  user.updateUser(req, res)
);
UserRoute.delete("/:id", validateCredentials, (req, res) =>
  user.deleteUser(req, res)
);

export { UserRoute };
