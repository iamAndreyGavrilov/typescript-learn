// type PaymentStatus = "new" | "paid";

// class Payment {
//   id: number;
//   status: PaymentStatus = "new";

//   constructor(id: number) {
//     this.id = id;
//   }

//   pay() {
//     this.status = "paid";
//   }
// }
// // наследование это всегда расширение исходного класса

// //PersistedPayment наследуюется от Payment
// class SavePayment extends Payment {
//   databaseId: number;
//   paidAt: Date;

//   constructor() {
//     const id = Math.random();
//     super(id); //constructor Payment(id: number): Payment // обращаемся к конструктору класса Payment
//   }
//   save() {
//     //сохраняем в базу
//   }

//   //override - говорит, что мы переопределили метод pay исходного класса
//   override pay(date?: Date): void {
//     // this.status = "paid";
//     super.pay(); //метод исходного класса
//     if (date) {
//       this.paidAt = date;
//     }
//   }
// }

// new Payment(3).id;
// new SavePayment().id;
// new SavePayment().databaseId;

// class User {
//   name: string = "user";
//   constructor() {
//     console.log(this.name);
//   }
// }

// class Admin extends User {
//   name: string = "admin";
//   constructor() {
//     super();
//     console.log(this.name);
//   }
// }

// new Admin(); // user

// class HttpError extends Error {
//   code: number;
//   constructor(message: string, code?: number) {
//     super(message);
//     this.code = code ?? 500;
//   }
// }
