"use strict";
// interface ILogger {
//   log(...args): void;
//   error(...args): void;
// }
// //Looger - быстрое исправление
// class Looger implements ILogger {
//   log(...args: any[]): void {
//     console.log(...args);
//   }
//   async error(...args: any[]): Promise<void> {
//     //кинуть во внешнюю систему
//     console.log(...args);
//   }
// }
// interface IPayble {
//   pay(paymentId: number): void;
//   price?: number;
// }
// interface IDeletable {
//   delete(): void;
// }
// class User implements IPayble, IDeletable {
//   delete(): void {
//     // что-то
//   }
//   pay(paymentId: number): void {
//     // что-то
//   }
//   price?: number | undefined;
// }
