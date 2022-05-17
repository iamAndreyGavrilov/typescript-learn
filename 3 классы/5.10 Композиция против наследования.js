"use strict";
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Users extends Array<User> {
//   searchByName(name: string) {
//     return this.filter((n) => n.name === name);
//   }
//   override toString(): string {
//     return this.filter((n) => n.name).join(", ");
//   }
// }
// const users = new Users();
// users.push(new User("Vasya"));
// users.push(new User("Petya"));
// console.log(users.toString());
// class UserList {
//   users: User[];
//   push(u: User) {
//     this.users.push(u);
//   }
// }
// class Payment {
//   date: Date;
// }
// // Наследование - жесткая связь, усложнения связанности кода
// class UserWithPaument extends Payment {
//   name: string;
// }
// // Композиция - благодаря композиции мы не нарушаем объект User, у User своя доменная область, у Payment своя
// class UserWithPaument2 {
//   user: User;
//   payment: Payment;
//   constructor(user: User, payment: Payment) {
//     this.user = user;
//     this.payment = payment;
//   }
// }
// // когда лучше всего использовать наследование? - когда мы наследуемся в рамках одной доменной области
// // когда не надо наследования? - Array<User> - при сложных внутренних массивах, а так же если мы пересекаем границу доменной области
