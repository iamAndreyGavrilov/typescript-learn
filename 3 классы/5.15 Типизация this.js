"use strict";
// class UserBuilder {
//   name: string;
//   setName(n: string): this {
//     this.name = n;
//     return this;
//   }
//   //type guard - определяющий юзера и админа
//   isAdmin(): this is AdminBuilder {
//     return this instanceof AdminBuilder;
//   }
// }
// class AdminBuilder extends UserBuilder {
//   role: string[];
// }
// const res = new UserBuilder().setName("Vasya");
// const res2 = new AdminBuilder().setName("Vasya2");
// let user: UserBuilder | AdminBuilder = new UserBuilder();
// if (user.isAdmin()) {
//   console.log(user);
// } else {
//   console.log(user);
// }
