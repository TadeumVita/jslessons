//Задание:
//Найдите и исправьте логические ошибки в сценарии.

let product1 = "Бумага офисная А4, 80 г/м2, 500 л";
let product2 = "Биндеры для бумаги 51 мм";
let product3 = "Ручка шариковая синяя";

const productPrice1 = 280.25;
const productPrice2 = 56;
const productPrice3 = 12.50;

let productQuantity1 = parseInt( prompt(`Укажите количество продуктов '${product1}', цена ${productPrice1}`, '0') );
let productQuantity2 = parseInt( prompt(`Укажите количество продуктов '${product2}', цена ${productPrice2}`, '0') );
let productQuantity3 = parseInt( prompt(`Укажите количество продуктов '${product3}', цена ${productPrice3}`, '0') );

// Выведите на экран сколько пользователю нужно заплатить за каждый продукт по
// отдельности и всего за все продукты
// используйте форматированный вывод
let totalPriceProduct1 = productPrice1 * productQuantity1;
let totalPriceProduct2 = productPrice2 * productQuantity2;
let totalPriceProduct3 = productPrice3 * productQuantity3;

let total = totalPriceProduct1 + totalPriceProduct2 + totalPriceProduct3;
console.log(`Общая сумма по продукту '${product1}' составляет ${totalPriceProduct1}`);
console.log(`Общая сумма по продукту '${product2}' составляет ${totalPriceProduct2}`);
console.log(`Общая сумма по продукту '${product3}' составляет ${totalPriceProduct3}`);
console.log(`Всего ${total}`);