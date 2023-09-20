export class NewUser {
  constructor(
    public username: string,
    public lastname: string,
    public email: string,
    public password: string,
    public photo?: string,
    public token?: {}
  ) {}
}
