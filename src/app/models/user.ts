export class Name {
  first: string;
  last: string;
}

export class User {
  guid: string;
  age: number;
  name: Name;
  email: string;

  constructor(user: any) {
    Object.assign(this, user);
  }

  get addInfo() {
    return `${this.name.first[0]}.${this.name.last[0]} - ${this.email}`;
  }
}
