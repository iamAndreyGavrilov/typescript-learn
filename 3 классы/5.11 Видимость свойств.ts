// class Auto {
//   public marka: string;
//   private damages: string[];
//   private _model: string;
//   protected run: number;
//   #price: number;

//   addDamage(damage: string) {
//     this.damages.push(damage);
//   }

//   set model(m: string) {
//     this._model = m;
//     this.#price = 100;
//   }

//   get model() {
//     return this._model;
//   }

//   //проверяем эквивалентность 2х свойств
//   isPriceEqual(v: Auto) {
//     return this.#price === v.#price;
//   }
// }

// new Auto().marka = "Diablo";
// // new Auto().
// //protected сохраняет доступ для наследников, без доступа из вне

// class EuroTruck extends Auto {
//   setDamage() {
//     // приватные свойства Auto не доступны для EuroTruck
//     // this.damages - error
//     //this.#price = 100 - error
//   }
//   setRun(km: number) {
//     //protected доступен в extends
//     this.run = km / 0.62;
//   }
// }
