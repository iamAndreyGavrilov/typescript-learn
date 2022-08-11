// /*
// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
// */

// class Product {
//   constructor(public id: number, public title: string, public price: number) {}
// }

// class Delivery {
//   constructor(public date: Date) {}
// }

// class HomeDelivery extends Delivery {
//   constructor(date: Date, public address: string) {
//     //вызываем super(date) - для того, чтобы передать в Delivery - date
//     super(date);
//   }
// }

// class ShopDelivery extends Delivery {
//   constructor(public shopId: number) {
//     super(new Date());
//   }
// }

// type DeliveryOptions = HomeDelivery | ShopDelivery;

// class Cart {
//   //приватное свойство, т.к продукты меняются только по методам и изначально инициализируем его пустым массивом
//   private products: Product[] = [];
//   private delivery: DeliveryOptions;

//   //возвращается :void, потому что модифицируется исходный объект
//   public addProduct(product: Product): void {
//     this.products.push(product);
//   }

//   //возвращается :void, потому что модифицируется исходный объект
//   public deleteProduct(productId: number): void {
//     this.products = this.products.filter((p: Product) => p.id !== productId);
//   }

//   public getSum(): number {
//     const price = this.products.map((p: Product) => p.price);
//     const sum = price.reduce((p1: number, p2: number) => p1 + p2);
//     return sum;
//   }

//   //возвращается :void, потому что модифицируется исходный объект
//   public setDelivery(deliv: DeliveryOptions): void {
//     this.delivery = deliv;
//   }

//   public checkout() {
//     //сначала отрабатываем негативные сценарии
//     if (this.products.length === 0) {
//       throw new Error('Корзина пуста');
//     }
//     if (!this.delivery) {
//       throw new Error('Не указана доставка');
//     }

//     //все ок
//     return { success: true };
//   }
// }

// const cart = new Cart();
// cart.addProduct(new Product(1, 'Biscuit', 150));
// cart.addProduct(new Product(2, 'Milk', 300));
// cart.addProduct(new Product(3, 'Meat', 150));
// console.log(cart.getSum());
// cart.deleteProduct(3);
// console.log(cart.getSum());
// cart.setDelivery(new HomeDelivery(new Date(), 'Perm'));
// console.log(cart.checkout());
