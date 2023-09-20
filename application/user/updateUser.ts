import { NewUser } from "../../domain/user/user";
import { SuccessRequestUser } from "../../domain/user/userStatesRequest";
import { StatusCode } from "../enums/codeStates/StatusCode";
import { UpdateUserInterface } from "./userContracts/updateUserInterface";

export class UpdateUser {
  constructor(private readonly updateUserDB: UpdateUserInterface) {}

  updateUser(id: string | number, newInfoUser: NewUser): SuccessRequestUser {
    if (!newInfoUser)
      return {
        statusUser: StatusCode.NotFound,
        dataUser: `You should assing a value to modify`,
      };

    for (const userInfo in newInfoUser) {
      if (!userInfo)
        return {
          statusUser: StatusCode.NotFound,
          dataUser: `You should assing a value to modify`,
        };
    }

    const newUserUpdated = this.updateUserDB.updateUser(id, newInfoUser);

    return {
      statusUser: StatusCode.Success,
      dataUser: newUserUpdated,
    };
  }
}
