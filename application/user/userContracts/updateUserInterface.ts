import { NewUser } from "../../../domain/user/user";

export interface UpdateUserInterface {
  updateUser(id: string | number, data: {}): Promise<NewUser>;
}
