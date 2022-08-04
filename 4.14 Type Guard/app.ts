// interface User {
//   name: string;
//   email: string;
//   login: string;
// }

// const user: User = {
//   name: 'Vasi',
//   email: 'vas@vas.vas',
//   login: 'vasvas',
// };

// interface Admin {
//   name: string;
//   role: number;
// }

// function logId(id: string | number) {
//   if (typeof id === 'string') {
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }

// function isString(x: string | number): x is string {
//   return typeof x === 'string';
// }
// //typeGuard - x is string

// function isAdmin(user: User | Admin): user is Admin {
//   return 'role' in user;
// }

// function isAdminAlternative(user: User | Admin): user is Admin {
//   return (user as Admin).role !== undefined;
// }

// function setRoleZero(user: User | Admin) {
//   if (isAdmin(user)) {
//     user.role = 1;
//   } else {
//     throw new Error('этот user не Админ');
//   }
// }
