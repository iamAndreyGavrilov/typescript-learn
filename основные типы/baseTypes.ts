// //========================
// Основные типы

// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS,
//   FAILED,
// }

// const res = {
//   message: "Платеж прошел успешно",
//   statusCode: StatusCode.SUCCESS,
// };

// if (res.statusCode === StatusCode.SUCCESS) {
// }

// 1 - успех
// 2 - в процессе
// 3 - отклонен

// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS,
//   FAILED,
// }

// const res = {
//   message: "Платеж прошел успешно",
//   statusCode: StatusCode.SUCCESS,
// };

// if (res.statusCode === StatusCode.SUCCESS) {
// }

// function action(status: StatusCode) {}
// action(StatusCode.SUCCESS);
// action(1);

// const enum Roles {
//   ADMIN = 1,
//   USER = 2,
//   // USER = compute(),
// }
// function compute() {
//   return 3;
// }

// const res2 = Roles.ADMIN;

// //========================

// const skills: readonly [number, string] = [1, "Dev"];

// const skill: ReadonlyArray<string> = ["DevOps", "Dev"];

// //========================

// const skills: [number, string] = [1, "Dev"];

// const [id, skillName] = skills;

// const arr: [number, string, ...boolean[]] = [1, "asd", true, true, false];

// const id = skills[0];
// const skillName = skills[1];
// const sdf = skills[3];

// //========================
// const skills: string[] = ["Dev", "DevOps", "Testing"];

// for (const skill of skills) {
//   console.log(skill.toLowerCase());
// }

// const res = skills
//   .filter((s: string) => s !== "DevOps")
//   .map((s) => s + "! ")
//   .reduce((a, b) => a + b);

// console.log(res);

// //========================
// const user = {
//   firstname: "Andrey",
//   surname: "Gavrilov",
//   city: "Perm",
//   age: 30,
//   skills: {
//     dev: true,
//     devops: false,
//   },
// };

// function getFullName(userEntity: {
//   firstname: string;
//   surname: string;
// }): string {
//   return `${userEntity.firstname} ${userEntity.surname}`;
// }

// console.log(getFullName(user));

// const getFullNameArrow = (firstname: string, surname: string): string => {
//   return `${firstname} ${surname}`;
// };

// //========================
// let revenue: number = 1000;
// let bonus: number = 500;
// let c: string = "asfasf";
// let d: boolean = true;
// let res: number = revenue + bonus;
