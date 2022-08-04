// interface User {
//   name: string;
// }

// const a = {};
// assertUser(a);
// a.name = 'Vasia';

// function assertUser(obj: unknown): asserts obj is User {
//   if (typeof obj === 'object' && obj !== null && 'name' in obj) {
//     return;
//   } else {
//     throw new Error('не User');
//   }
// }

// // const a = {};
// // if (assertUser(a)) {
// //   a.name = 'Vasia';
// // }

// // function assertUser(obj: unknown): obj is User {
// //   if (typeof obj === 'object' && obj !== null && 'name' in obj) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }
