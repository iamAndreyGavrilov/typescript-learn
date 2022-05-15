"use strict";
// class User {
//   name: string;
//   age: number;
//   constructor();
//   constructor(name: string);
//   constructor(age: number);
//   constructor(name: string, age: number);
//   constructor(nameOrAge?: string | number, age?: number) {
//     if (typeof nameOrAge === "string") {
//       this.name = nameOrAge;
//     } else if (typeof nameOrAge === "number") {
//       this.age = nameOrAge;
//     }
//     if (typeof age === "number") {
//       this.age = age;
//     }
//   }
// }
// //если условий слишком много, то лучше сделать статичные методы
// const user = new User();
// const user2 = new User("Vasya");
// const user3 = new User(30);
// const user4 = new User("Vasya", 30);
