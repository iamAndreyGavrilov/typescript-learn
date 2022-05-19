// abstract class Controller {
//   abstract handle(req: any): void;

//   // такого мы не может сделать в interfaces, т.к он описывает только форму class
//   handleWithLogs(req: any) {
//     console.log("Start");
//     this.handle(req);
//     console.log("End");
//   }
// }

// class UserController extends Controller {
//   handle(req: any): void {
//     console.log(req);
//   }
// }

// // new Controller() - Невозможно создать экземпляр абстрактного класса
// const c = new UserController();
// c.handleWithLogs("Request");
