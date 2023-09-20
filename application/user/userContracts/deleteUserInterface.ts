export interface DeleteUserInterface {
  deleteUser(id: string | number): Promise<string>;
}
