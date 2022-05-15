// class User {
//   _login: string;
//   password: string;
//   createdAt: Date;

//   // тип set, зависит от return get
//   // set get нельзя сделать async

//   set login(log: string | number) {
//     this._login = "user-" + log;
//     this.createdAt = new Date();
//   }

//   get login() {
//     return this._login;
//   }

//   async getPassword(p: string) {
//     //ждем шифрование пароля, без блокировки потока
//   }
// }

// const user = new User();
// user.login = "myLogin";
// console.log(user);
// console.log(user.login);
