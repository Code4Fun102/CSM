export class User {
  constructor(
    public username: string,
    public id: string,
    private _token: string,
    private exp: Date
  ) {}

  get token() {
    if (!this.exp || new Date() > this.exp) {
      return null;
    }
    return this._token;
  }
}
