import { NewUser } from "../../domain/user/user";
import { SuccessRequestUser } from "../../domain/user/userStatesRequest";
import { StatusCode } from "../enums/codeStates/StatusCode";
import { CreateUserInterface } from "./userContracts/creatUserInterface";

export class CreateUser {
  constructor(private readonly createUser: CreateUserInterface) {}

  createNewUser(user: NewUser): SuccessRequestUser {
    if (!user.username?.trim() || !user.lastname?.trim()) {
      return {
        statusUser: StatusCode.NotFound,
        dataUser: `Name and last name are required`,
      };
    }
    if (!user || user.password?.length < 6) {
      return {
        statusUser: StatusCode.NotFound,
        dataUser: `Password is required and it should be minimum 6 characters`,
      };
    }

    const emailRegExp =
      /^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/;

    if (!emailRegExp.test(user.email)) {
      return {
        statusUser: StatusCode.NotFound,
        dataUser: `Email is required and it should be an available email`,
      };
    }

    const newUser = this.createUser.createUser(user);

    return { statusUser: StatusCode.Success, dataUser: newUser };
  }
}
