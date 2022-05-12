interface User {
  name: string;
}

const a = {};

// if (assertUser(a)) {
//   a.name = "Vasya";
// }

assertUser(a);
a.name = "Vasya";

function assertUser(obj: unknown): asserts obj is User {
  if (typeof obj === "object" && !!obj && "name" in obj) {
    return;
  }
  throw new Error("Не пользователь");
}
