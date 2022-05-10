// function generateError(message: string): never {
//   throw new Error(message);
// }

// function dumpError(): never {
//   while (true) {}
// }

// function rec(): never {
//   return rec();
// }

// type paymentActions = "refund" | "checkout" | "reject";

// function processAction(action: paymentActions) {
//   switch (action) {
//     case "refund":
//       //...
//       break;

//     case "checkout":
//       //...
//       break;

//     // case "reject":
//     //   //...
//     //   break;

//     default:
//       const _: never = action;
//       throw new Error("Нет такого action");
//   }
// }

// function isString(x: string | number): boolean {
//   if (typeof x === "string") {
//     return true;
//   } else if (typeof x === "number") {
//     return false;
//   }
//   //исчерпывающая проверка, return never
//   generateError("saf");
// }
