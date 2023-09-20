import { NewUser } from "./user";

export type SuccessRequestUser = {
  statusUser: number;
  dataUser: NewUser | null | NewUser[] | string | {};
  token?: string | {};
};
