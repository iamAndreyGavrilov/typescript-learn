"use strict";
// // static можно обращаться без инициализации
// class UserService {
//   private static db: any;
//   // static async - можно
//   //   static async getUser(id: number) {
//   //     return UserService.db.findById(id);
//   //   }
//   static async getUser(id: number) {
//     return UserService.db.findById(id);
//   }
//   constructor(id: number) {}
//   create() {
//     UserService.db;
//   }
//   static {
//     // static запустится сразу
//     UserService.db = "qwerty";
//     // Выражение Await нельзя использовать внутри статического блока класса.
//     // await new Promise();
//   }
// }
// UserService.getUser(1);
// const inst = new UserService(1);
// inst.create();
