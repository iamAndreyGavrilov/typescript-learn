// interface User {
//   login: string;
//   password?: string;
// }

// const user: User = {
//   login: 'a@a.com',
//   //   password: '123',
// };

// function multiple(first: number, second?: number): number {
//   if (!second) {
//     return first * first;
//   }
//   return first * second;
// }

// multiple(5);

// interface UserPro {
//   login: string;
//   password?: {
//     type: 'primary' | ' secondary';
//   };
// }

// function testPass(user: UserPro) {
//   const t = user.password?.type;
// }

// function test(param?: string) {
//   const t = param ?? multiple(5);
// }
