"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
function compute() {
    return 3;
}
// 1 - успех
// 2 - в процессе
// 3 - отклонен
const res = {
    message: "Платеж прошел успешно",
    statusCode: StatusCode.SUCCESS,
};
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
action(1);
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
