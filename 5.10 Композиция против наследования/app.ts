// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// //Наследование
// class Users extends Array<User> {
//   searchByName(name: string) {
//     return this.filter((u) => u.name === name);
//   }

//   override toString(): string {
//     return this.map((u) => u.name).join(', ');
//   }
// }

// const users = new Users();

// users.push(new User('Vasia'));
// users.push(new User('Petya'));

// console.log(users.toString());

// //композиция - она приоритетнее
// class UserList {
//   users: User[];

//   push(u: User) {
//     this.users.push(u);
//   }
// }

// //каждый раз при добавлении в Payment или в UserWithPayment, мы будем ухудшать код, за счет усложнение и связанность кода.
// class Payment {
//   date: Date;
// }

// class UserWithPayment extends Payment {
//   name: string;
// }

// //как правильно, у Payment своя доменная область и у User своя
// class UserWithPayment2 {
//   user: User;
//   payment: Payment;
//   constructor(user: User, payment: Payment) {
//     this.user = user;
//     this.payment = payment;
//   }
// }

// // Итог - наследование лучше использовать когда мы наследемся в рамках ОДНОЙ доменной области
// // наследоваться не надо, когда мы наследуемся от агрегационных сложных внутренних массивов, по типу class Users extends Array<User>.