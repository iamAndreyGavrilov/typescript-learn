"use strict";
const skills = ["Dev", "DevOps", "Testing"];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res = skills
    .filter((s) => s !== "DevOps")
    .map((s) => s + "! ")
    .reduce((a, b) => a + b);
console.log(res);
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
