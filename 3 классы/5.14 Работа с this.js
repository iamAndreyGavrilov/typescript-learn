"use strict";
// class Payment {
//   private date: Date = new Date();
//   // показали контекст TS-у / this: Payment
//   getDate(this: Payment) {
//     return this.date;
//   }
//   // при стрелочной функции контекст не теряется
//   getDateArrow = () => {
//     return this.date;
//   };
// }
// const p = new Payment();
// const user = {
//   id: 1,
//   paymentDate: p.getDate.bind(p),
//   paymentDateArrow: p.getDateArrow,
// };
// // console.log(p.getDate());
// // console.log(user.paymentDate());
// // console.log(user.paymentDateArrow());
// class PaymentPersistent extends Payment {
//   save() {
//     // разный синтаксис при наследовании
//     return super.getDate();
//   }
// }
// console.log(new PaymentPersistent().save());
// class PaymentPersistent2 extends Payment {
//   save() {
//     // разный синтаксис при наследовании
//     return this.getDateArrow();
//   }
// }
// console.log(new PaymentPersistent2().save());
