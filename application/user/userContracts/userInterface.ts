import { NewUser } from "../../../domain/user/user";

export interface UserInteface {
  getUser(id: string | number): Promise<NewUser>;
}
