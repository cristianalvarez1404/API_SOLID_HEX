import { UsersInterface } from "../../../application/user/userContracts/usersInterface";
import { NewUser } from "../../../domain/user/user";
import { UserSchema } from "../Schemas/UserSchema";
import { UserInteface } from "../../../application/user/userContracts/userInterface";
import { UpdateUserInterface } from "../../../application/user/userContracts/updateUserInterface";
import { DeleteUserInterface } from "../../../application/user/userContracts/deleteUserInterface";
import { CreateUserInterface } from "../../../application/user/userContracts/creatUserInterface";

export class UsersRepository implements UsersInterface {
  constructor() {}
  async getAll(): Promise<NewUser[]> {
    const mongoData = await UserSchema.find();
    return this.mapToUser(mongoData);
  }

  private mapToUser(data: any): NewUser[] {
    const users: NewUser[] = [];
    data.forEach((mongoUser: any) => {
      const newUser: NewUser = {
        username: mongoUser.username,
        email: mongoUser.email,
        lastname: mongoUser.lastname,
        password: mongoUser.password,
        photo: mongoUser?.photo,
      };
      users.push(newUser);
    });

    return users;
  }
}

export class UserRepository implements UserInteface {
  constructor() {}

  async getUser(id: string | number): Promise<NewUser> {
    const user = await UserSchema.findById(id);
    return {
      username: user?.username || "",
      lastname: user?.lastname || "",
      email: user?.email || "",
      password: user?.password || "",
      photo: user?.photo || "",
    };
  }
}

export class UpdateUserRepository implements UpdateUserInterface {
  constructor() {}

  async updateUser(id: string | number, data: {}): Promise<NewUser> {
    const newUserUpdated = await UserSchema.findByIdAndUpdate(id, data);

    return {
      username: newUserUpdated?.username || "",
      lastname: newUserUpdated?.lastname || "",
      email: newUserUpdated?.email || "",
      password: newUserUpdated?.password || "",
      photo: newUserUpdated?.photo || "",
    };
  }
}

export class DeleteUserRepository implements DeleteUserInterface {
  constructor() {}

  async deleteUser(id: string | number): Promise<string> {
    await UserSchema.findByIdAndDelete(id);
    return "";
  }
}

export class CreateUserRepository implements CreateUserInterface {
  constructor() {}

  async createUser(user: NewUser): Promise<NewUser> {
    const newUser = await UserSchema.create(user);
    return {
      username: newUser.username,
      lastname: newUser.lastname,
      email: newUser.email,
      password: newUser.password,
      photo: newUser?.photo,
    };
  }
}
