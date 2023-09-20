import { NewUser } from "../../../domain/user/user";

export interface CreateUserInterface {
  createUser(user: NewUser): Promise<NewUser>;
}
