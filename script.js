//Task 1
let Arr1 = [1, "5", "4", "hello"];
let Arr2 = [true, 2, {}, ["a"], 222];

console.log(Arr1[2]);
console.log(Arr2[2]);
const numbers = [1, "test", true];

//Task 2
Arr1.push(22);
console.log(Arr1);

//Task 3
for (const Smth of Arr2) {
  console.log(Smth);
}

//Task 4
const message = "Welcome to Ukraine!";
console.log(message.split(""));
console.log(message.indexOf("l"));
const message2 = [
  "W",
  "e",
  "l",
  "c",
  "o",
  "m",
  "e",
  " ",
  "t",
  "o",
  " ",
  "U",
  "k",
  "r",
  "a",
  "i",
  "n",
  "e",
  "!",
];
console.log(message2.join(""));

//Task 5
const styles = ["Джаз", "Блюз"];
//1
styles.push("Рок-н-ролл");
//2
styles.splice(1, 1, "Класика");
//3
const deletedStyles = styles.splice(0, 1);
console.log(deletedStyles);
//4
styles.unshift("Реп", "Реггі");
console.log(styles);
//Task 6

let country = prompt("Введітть країну");
let price;
switch (country) {
  case "Китай":
    price = 100;
    alert(`Доставка в, ${country} буде коштувати ${price} кредитів`);
    break;

  case "Чилі":
    price = 250;
    alert(`Доставка в, ${country} буде коштувати ${price} кредитів`);
    break;

  case "Австаралія":
    price = 170;
    alert(`Доставка в, ${country} буде коштувати ${price} кредитів`);
    break;

  case "Індія":
    price = 80;
    alert(`Доставка в, ${country} буде коштувати ${price} кредитів`);
    break;

  case "Ямайка":
    price = 120;
    alert(`Доставка в, ${country} буде коштувати ${price} кредитів`);
    break;

  default:
    alert("У вашій країні доставка недоступна");
    break;
}
