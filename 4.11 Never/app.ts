// function generateError(message: string): never {
//   throw new Error(message);
// }

// function dumpError(): never {
//   while (true) {}
// }

// function rec(): never {
//   return rec();
// }

// type paymentAction = 'refund' | 'chekout' | 'reject';

// function processAction(action: paymentAction) {
//   switch (action) {
//     case 'refund':
//       //что-то... refund
//       break;
//     case 'chekout':
//       //что-то... chekout
//       break;
//     case 'reject':
//       //что-то... reject
//       break;
//     default:
//       const _: never = action;
//       throw new Error('Error action');
//   }
// }

// function isString(x: string | number): boolean {
//   if (typeof x === 'string') {
//     return true;
//   } else if (typeof x === 'number') {
//     return false;
//   }
//   generateError('ошибка в x');
//   // с помощью generateError мы остаемся в never и не попадает в return undefined
// }
