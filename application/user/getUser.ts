import { SuccessRequestUser } from "../../domain/user/userStatesRequest";
import { StatusCode } from "../enums/codeStates/StatusCode";
import { UserInteface } from "./userContracts/userInterface";

export class GetUser {
  constructor(private readonly getUser: UserInteface) {}

  sendData(id: number | string): SuccessRequestUser {
    const user = this.getUser.getUser(id);
    if (!user) return { statusUser: StatusCode.NotFound, dataUser: null };

    return { statusUser: StatusCode.Success, dataUser: user };
  }
}
