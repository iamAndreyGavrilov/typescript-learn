// class Payment {
//   private date: Date = new Date();

//   getDate(this: Payment) {
//     return this.date;
//   }

//   //стрелочная функция всегда ссылается на this Class
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

// console.log(p.getDate());
// console.log(user.paymentDate());
// console.log(user.paymentDateArrow());

// class PaymentPersistent extends Payment {
//   save() {
//     //super - обращаемся к родителю Payment и используем getDate

//     // return super.getDate();

//     return this.getDateArrow();
//   }
// }

// const p2 = new PaymentPersistent();

// console.log(p2.save());
