// class User {
//   skills: string[];

//   addSkill(skill: string): void;

//   addSkill(skills: string[]): void;

//   addSkill(skillOrSkills: string | string[]): void {
//     if (typeof skillOrSkills === "string") {
//       this.skills.push(skillOrSkills);
//     } else {
//       this.skills.concat(skillOrSkills);
//     }
//   }
// }

// new User().addSkill("strong");
// new User().addSkill(["strong", "agility"]);

// //=========================================

// function run(distance: string): string;

// function run(distance: number): number;

// function run(distance: string | number): string | number {
//   if (typeof distance === "number") {
//     return 1;
//   } else {
//     return "one";
//   }
// }

// run(1);
// run("one");
