import { NewUser } from "../../../domain/user/user";

export interface UsersInterface {
  getAll(): Promise<NewUser[]>;
}
