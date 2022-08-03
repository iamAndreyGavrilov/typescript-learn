// interface User {
//   name: string;
//   age: number;
//   skills: string[];

//   log: (id: number) => string;
// }

// interface Role {
//   roleId: number;
// }

// interface UserWithRole extends User, Role {
//   createdAt: Date;
// }

// type User2 = {
//   name: string;
//   age: number;
//   skills: string[];

//   log: (id: number) => string;
// };

// let user: UserWithRole = {
//   name: 'Vasya',
//   age: 33,
//   skills: ['1', '2'],
//   roleId: 1,
//   createdAt: new Date(),

//   log(id) {
//     return '';
//   },
// };

// interface UserDic {
//   [index: number]: User;
//   // [index: number]: User - неограниченный список свойств. Где ключ это число, а значение это User
// }

// type UserDic2 = {
//   [index: number]: User;
//   // [index: number]: User - неограниченный список свойств. Где ключ это число, а значение это User
// };

// type ud = Record<number, User>;
