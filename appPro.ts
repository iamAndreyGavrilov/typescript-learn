//Продвинутые типы

//Type Aliases
type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  id: number;
};

type UserWithRole = {
  user: User;
  role: Role;
};

let user: UserWithRole = {
  name: "Andrey",
  age: 30,
  skills: ["1", "2"],
  id: 1,
};

type httpMethod = "post" | "get";

// Literal Types

// enum RequestType {
//   GET = "get",
//   POST = "post",
// }

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
  return 1;
}
fetchWithAuth("api", "get");
fetchWithAuth("api", "post");

// const method = "post";
// fetchWithAuth("api", method);

let method = "post";
fetchWithAuth("api", method as "post");

// //Union

// function logId(id: string | number | boolean) {
//   if (typeof id === "string") {
//     console.log(id.toLowerCase());
//   } else if (typeof id === "number") {
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }

// function logError(err: string | string[]) {
//   if (Array.isArray(err)) {
//     console.log(err);
//   } else {
//     console.log(err);
//   }
// }

// function logObject(obj: { a: number } | { b: number }) {
//   if ("a" in obj) {
//     console.log(obj.a);
//   } else {
//     console.log(obj.b);
//   }
// }

// function logMultipleIds(a: string | number, b: string | boolean) {
//   if (a === b) {
//     a.toLowerCase();
//   } else {
//     console.log(a, b);
//   }
// }
