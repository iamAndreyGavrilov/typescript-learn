"use strict";
// type PaymentStatus = 'new' | 'paid';
// class Payment {
//   id: number;
//   status: PaymentStatus = 'new';
//   constructor(id: number) {
//     this.id = id;
//   }
//   pay() {
//     this.status = 'paid';
//   }
// }
// class PersistedPayment extends Payment {
//   databaseId: number;
//   paidAt: Date;
//   constructor() {
//     const id = Math.random();
//     super(id);
//   }
//   save() {
//     //сохраняем в базу
//   }
// //override - pay
//   override pay(date?: Date) {
//     super.pay();
//     if (date) {
//       this.paidAt = date;
//     }
//   }
// }
// new PersistedPayment().save();
