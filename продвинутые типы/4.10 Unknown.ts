// let input: unknown;

// input = 3;
// input = ["a", "b"];

// function run(i: unknown) {
//   if (typeof i === "number") {
//     i++;
//   } else {
//     i;
//   }
// }

// run(input);

// // более явная проверка
// async function getData() {
//   try {
//     await fetch("");
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   }
// }

// // не очень
// async function getData2() {
//   try {
//     await fetch("");
//   } catch (error) {
//     const e = error as Error;
//     console.log(e.message);
//   }
// }

// type U1 = unknown | null; // unknown

// type I1 = unknown & string; // string

