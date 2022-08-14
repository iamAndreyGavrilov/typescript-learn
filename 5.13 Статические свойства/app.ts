class UserService {
  static db: any;
  private static db2: any;

  static getUser(id: number) {
    return this.db.findById(id);
  }
}

//к db можно обратиться без создания класса
UserService.db;

UserService.getUser(1);
