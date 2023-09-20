import { SuccessRequestUser } from "../../domain/user/userStatesRequest";
import { StatusCode } from "../enums/codeStates/StatusCode";
import { UsersInterface } from "./userContracts/usersInterface";

export class GetUsers {
  constructor(private readonly userRepository: UsersInterface) {}

  sendData(): SuccessRequestUser {
    const users = this.userRepository.getAll();
    if (!users) return { statusUser: StatusCode.NotFound, dataUser: [] };
    return { statusUser: StatusCode.Success, dataUser: users };
  }
}
