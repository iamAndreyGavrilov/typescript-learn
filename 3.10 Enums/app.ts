// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS,
//   FAILED,
// }

// //1 - успех
// //2 - в процессе
// //3 - отклонен

// const res = {
//   message: 'Платеж успешен',
//   statusCode: StatusCode.SUCCESS,
// };

// if (res.statusCode === StatusCode.SUCCESS) {
// }

// function action(status: StatusCode) {}

// action(StatusCode.SUCCESS);

// function compute() {
//   return 2;
// }

// // //===========================
// // enum Roles {
// //   ADMIN = 1,
// //   USER = compute(),
// // }

// // function test(x: { ADMIN: number }) {}

// // test(Roles);
// // //===========================

// const enum Roles {
//   ADMIN = 1,
//   USER = 2,
// }

// const res2 = Roles.ADMIN;
