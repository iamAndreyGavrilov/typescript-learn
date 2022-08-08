class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

//Наследование
class Users extends Array<User> {
  searchByName(name: string) {
    return this.filter((u) => u.name === name);
  }

  override toString(): string {
    return this.map((u) => u.name).join(', ');
  }
}

const users = new Users();

users.push(new User('Vasia'));
users.push(new User('Petya'));

console.log(users.toString());

//композиция - она приоритетнее
class UserList {
  users: User[];

  push(u: User) {
    this.users.push(u);
  }
}
