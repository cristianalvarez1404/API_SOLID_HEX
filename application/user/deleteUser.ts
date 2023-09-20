import { SuccessRequestUser } from "../../domain/user/userStatesRequest";
import { StatusCode } from "../enums/codeStates/StatusCode";
import { DeleteUserInterface } from "./userContracts/deleteUserInterface";

export class DeleteUser {
  constructor(private readonly deleteUserDB: DeleteUserInterface) {}

  deleteUser(id: string | number): SuccessRequestUser {
    const deletedUser = this.deleteUserDB.deleteUser(id);
    if (!deletedUser)
      return { statusUser: StatusCode.NotFound, dataUser: null };
    return {
      statusUser: StatusCode.Success,
      dataUser: `User has been deleted!!!`,
    };
  }
}
