import { Request, Response } from "express";
import { GetUser } from "../../application/user/getUser";
import { GetUsers } from "../../application/user/getUsers";
import { CreateUser } from "../../application/user/createUser";
import { UpdateUser } from "../../application/user/updateUser";
import { DeleteUser } from "../../application/user/deleteUser";

export class UserController {
  constructor(
    private getUserData: GetUser,
    private getUsersData: GetUsers,
    private createUserData: CreateUser,
    private updateUserData: UpdateUser,
    private deleteUserInstance: DeleteUser
  ) {}

  async getUsers(req: Request, res: Response) {
    const { statusUser, dataUser } = this.getUsersData.sendData();

    res.status(statusUser).json({ users: dataUser });
  }

  async getUser(req: Request, res: Response) {
    const { statusUser, dataUser } = this.getUserData.sendData(req.params.id);

    res.status(statusUser).json({ success: true, user: dataUser });
  }

  async createUser(req: Request, res: Response) {
    const { username, lastname, email, password } = req.body;
    const user = { username, lastname, email, password };

    const { statusUser, dataUser } = this.createUserData.createNewUser(user);

    return res.status(statusUser).json(dataUser);
  }

  async updateUser(req: Request, res: Response) {
    const id = req.params.id;
    const newInfoUser = req.body;

    const { statusUser, dataUser } = this.updateUserData.updateUser(
      id,
      newInfoUser
    );
    return res.status(statusUser).json(dataUser);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    const { statusUser, dataUser } = this.deleteUserInstance.deleteUser(id);

    return res.status(statusUser).json(dataUser);
  }
}
