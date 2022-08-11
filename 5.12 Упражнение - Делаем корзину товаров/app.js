"use strict";
/*
Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и переметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
*/
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        //вызываем super(date) - для того, чтобы передать в Delivery - date
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        //приватное свойство, т.к продукты меняются только по методам и изначально инициализируем его пустым массивом
        this.products = [];
    }
    //возвращается :void, потому что модифицируется исходный объект
    addProduct(product) {
        this.products.push(product);
    }
    //возвращается :void, потому что модифицируется исходный объект
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        const price = this.products.map((p) => p.price);
        const sum = price.reduce((p1, p2) => p1 + p2);
        return sum;
    }
    //возвращается :void, потому что модифицируется исходный объект
    setDelivery(deliv) {
        this.delivery = deliv;
    }
    checkout() {
        //сначала отрабатываем негативные сценарии
        if (this.products.length === 0) {
            throw new Error('Корзина пуста');
        }
        if (!this.delivery) {
            throw new Error('Не указана доставка');
        }
        //все ок
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Biscuit', 150));
cart.addProduct(new Product(2, 'Milk', 300));
cart.addProduct(new Product(3, 'Meat', 150));
console.log(cart.getSum());
cart.deleteProduct(3);
console.log(cart.getSum());
cart.setDelivery(new HomeDelivery(new Date(), 'Perm'));
console.log(cart.checkout());
