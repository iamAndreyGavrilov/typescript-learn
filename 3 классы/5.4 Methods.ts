// enum PaymentStatus {
//   Holded,
//   Processed,
//   Reversed,
// }

// class Payment {
//   id: number;
//   status: PaymentStatus = PaymentStatus.Holded;
//   createdAt: Date = new Date();
//   updateAt: Date;

//   constructor(id: number) {
//     this.id = id;
//   }

//   getPaymentLifeTime(): number {
//     return new Date().getTime() - this.createdAt.getTime();
//   }

//   unholdPayment(): void {
//     if (this.status === PaymentStatus.Processed) {
//       throw new Error("Платеж в процессе оплаты вернуть нельзя");
//     }

//     this.status = PaymentStatus.Reversed;
//     this.updateAt = new Date();
//   }
// }

// const payment = new Payment(1);
// payment.unholdPayment();
// console.log(payment);

// const time = payment.getPaymentLifeTime();
// console.log(time);
