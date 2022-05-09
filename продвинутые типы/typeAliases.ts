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
