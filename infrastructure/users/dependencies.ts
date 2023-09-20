//Sección de respository
import { UsersRepository } from "./Repositories/usersRepository";
import { UserRepository } from "./Repositories/usersRepository";
import { CreateUserRepository } from "./Repositories/usersRepository";
import { UpdateUserRepository } from "./Repositories/usersRepository";
import { DeleteUserRepository } from "./Repositories/usersRepository";

//Casos de uso
import { CreateUser } from "../../application/user/createUser";
import { DeleteUser } from "../../application/user/deleteUser";
import { GetUser } from "../../application/user/getUser";
import { GetUsers } from "../../application/user/getUsers";
import { UpdateUser } from "../../application/user/updateUser";
import { UserController } from "./userController";

export const deleteUserRepository = new DeleteUserRepository();
export const updateUserRepository = new UpdateUserRepository();
export const createUserRepository = new CreateUserRepository();
export const userRepository = new UserRepository();
export const usersRepository = new UsersRepository();
export const deleteUserInstance = new DeleteUser(deleteUserRepository);
export const updateUserInstance = new UpdateUser(updateUserRepository);
export const createUserInstance = new CreateUser(createUserRepository);
export const getUsersInstance = new GetUsers(usersRepository);
export const getUserInstance = new GetUser(userRepository);
export const userController = new UserController(
  getUserInstance,
  getUsersInstance,
  createUserInstance,
  updateUserInstance,
  deleteUserInstance
);
