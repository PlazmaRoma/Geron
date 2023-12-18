import { TSeasons } from "./types";
// enum EColors {
//   red = "красный",
//   black = "черный",
//   gray = "серый",
// }

// const color = EColors.red;
// console.log(color);

// const getColorText = (color: EColors) => {
//   switch (color) {
//     case EColors.black:
//       console.log("черный");
//       break;
//     case EColors.red:
//       console.log("красный");
//       break;
//     case EColors.gray:
//       console.log("серый");
//     default:
//       console.log("такого цвета нет");
//   }
// };

// type TCallback = (num1: number, num2: number) => number;
// const generateRandomNumber = (callback: TCallback) => {
//   let num1: number = Math.floor(Math.random() * 100);
//   let num2: number = Math.floor(Math.random() * 100);
//   let answer = callback(num1, num2);
//   return answer;
// };

// const summary = (num1: number, num2: number) => {
//   return num1 + num2;
// };
// const divide = (num1: number, num2: number) => {
//   return num2 != 0 ? num1 / num2 : 0;
// };
// const multiply = (num1: number, num2: number) => {
//   return num1 * num2;
// };

// console.log(generateRandomNumber(summary));
// console.log(generateRandomNumber(multiply));
// console.log(generateRandomNumber(divide));

// const getName = (callback: (name: string) => void) => {
//   let userName: string = "Roman";
//   callback(userName);
// };

// const sayHi = (name: string) => {
//   console.log("Hi " + name);
// };
// getName();

// let year = [2019, 2020, 2021, 2022, 2023, 2024];
// let month = ["Spring", "Summer", "Autumn", "Winter"];

// console.log(year[3] + "\n" + month[2] + "\n" + month[3] + "\n" + year[0]);

// let array = [
//     {
//         name: "Roman",
//         age: 13
//     },
//     {
//         name: "Azamat",
//         age: 14
//     },
// ]

// console.log(array[1].age +"\n" + array[0].name + "\n")

// type TMonth = {
//   title: string;
//   days: number;
// };

// let mothes: TMonth[] = [
//   {
//     title: "Январь",
//     days: 31,
//   },
//   {
//     title: "Февраль",
//     days: 28,
//   },
//   {
//     title: "Март",
//     days: 31,
//   },
//   {
//     title: "Апрель",
//     days: 31,
//   },
//   {
//     title: "Май",
//     days: 31,
//   },
// ];

// mothes.push({
//   title: "Июнь",
//   days: 31,
// });

// let mothesMore30Days: TMonth[] = [];

// for (let i = 0; i < mothes.length; i++) {
//   if (mothes[i].days < 30) {
//     mothesMore30Days.push(mothes[i]);
//   }
// }

// let sumOfDays: number = 0;
// for (let i = 0; i < mothes.length; i++) {
//   sumOfDays += mothes[i].days;
// }
// console.log("Сумма всех дней в месяце: " + sumOfDays);

// let MinMothes: TMonth = mothes[0];
// let MaxMothes: TMonth = mothes[0];

// for (let i = 0; i < mothes.length; i++) {
//   if (mothes[i].days < MinMothes.days) {
//     MinMothes = mothes[i];
//   }
//   if (mothes[i].days > MinMothes.days) {
//     MaxMothes = mothes[i];
//   }
// }

// console.log(MaxMothes);
// console.log(MinMothes);

// let numbers: number[] = [1, 2, 3, 4, 5, 6];

// numbers.unshift(7);
// numbers.splice(2, 0, 7777);
// let numbers2 = numbers.concat(numbers);
// let numbers3 = [...numbers, ...numbers2];

// console.log(numbers3);

// numbers.forEach((item) => {
//   console.log(item);
// });

// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// let strings = ["3000", "2", "30", "200", "5"];
// let strToNumber = strings.map((element) => {
//   return parseInt(element);
// });
// console.log(strToNumber);

// let numbersMore5 = numbers3.filter((item) => item > 5);
// console.log(numbersMore5);

// type TCategory = "smartphone" | "laptop";
// type TStuff = {
//   category: TCategory;
//   price: number;
//   count: number;
// };

// let stuffs: TStuff[] = [
//   {
//     category: "smartphone",
//     price: 150000,
//     count: 3,
//   },
//   {
//     category: "laptop",
//     price: 300000,
//     count: 5,
//   },
//   {
//     category: "smartphone",
//     price: 250000,
//     count: 8,
//   },
//   {
//     category: "laptop",
//     price: 200000,
//     count: 7,
//   },
// ];

// let smartphones: TStuff[] = stuffs.filter((item) => {
//   return item.category === "smartphone";
// });
// let laptops: TStuff[] = stuffs.filter((item) => {
//   return item.category === "laptop";
// });
// console.log(smartphones);
// console.log(laptops);

// smartphones.sort((a,b) => {return a.price - b.price})
// console.log(smartphones);

// type TwCategory = "smartphone" | "laptop";
// type TwStuff = {
//   category: TwCategory;
//   price: number;
//   count: number;
// };

// let stuffs: TwStuff[] = [
//   {
//     category: "smartphone",
//     price: 150000,
//     count: 3,
//   },
//   {
//     category: "laptop",
//     price: 350000,
//     count: 5,
//   },
//   {
//     category: "smartphone",
//     price: 250000,
//     count: 8,
//   },
//   {
//     category: "laptop",
//     price: 200000,
//     count: 7,
//   },
//   {
//     category: "smartphone",
//     price: 300000,
//     count: 2,
//   },
// ];

// let smartphones: TwStuff[] = stuffs.filter((item) => {
//   return item.category === "smartphone";
// });
// let laptops: TwStuff[] = stuffs.filter((item) => {
//   return item.category === "laptop";
// });

// stuffs.push({
//   category: "laptop",
//   price: 500000,
//   count: 3,
// });

// function addCategoryW(categorys: TwCategory, prices: number, counts: number) {
//   if (categorys === "smartphone") {
//     smartphones.push({
//       category: categorys,
//       price: prices,
//       count: counts,
//     });
//   } else {
//     laptops.push({
//       category: categorys,
//       price: prices,
//       count: counts,
//     });
//   }
// }

// smartphones.map((item) => (item.price *= 1.1));
// laptops.map((item) => (item.price *= 0.8));
// console.log(smartphones);
// console.log(laptops);

// smartphones.sort((a, b) => {
//   return a.price - b.price;
// });

// laptops.sort((a, b) => {
//   return b.price - a.price;
// });
// console.log(smartphones);
// console.log(laptops);

// let products = [...smartphones, ...laptops];
// products.sort((a, b) => {
//   return b.price - a.price;
// });
// console.log(products);

// export const testFunction = () =>{
//   console.log("test");
// }

// export let test: string = "test";

// // Level 1
import * as ETypes from "./types";

export const data: ETypes.TSeasons = {
  winter: {
    closeProjects: 10,
    income: 600000,
    hired: 10,
    dismissed: 10,
    newProjects: 10,
  },
  spring: {
    closeProjects: 10,
    income: 750000,
    hired: 10,
    dismissed: 10,
    newProjects: 10,
  },
  summer: {
    closeProjects: 10,
    income: 550000,
    hired: 10,
    dismissed: 10,
    newProjects: 10,
  },
  autumn: {
    closeProjects: 10,
    income: 900000,
    hired: 10,
    dismissed: 10,
    newProjects: 10,
  },
};

export function MaxIncomeSeason() {
  return Math.max(
    data.winter.income,
    data.spring.income,
    data.summer.income,
    data.autumn.income
  );
}

export function MinIncomeSeason() {
  return Math.min(
    data.winter.income,
    data.spring.income,
    data.summer.income,
    data.autumn.income
  );
}

export function MaxEmployeesSeason() {
  return Math.max(
    data.winter.hired,
    data.spring.hired,
    data.summer.hired,
    data.autumn.hired
  );
}

export function DisEmployeesSeason() {
  return Math.max(
    data.winter.dismissed,
    data.spring.dismissed,
    data.summer.dismissed,
    data.autumn.dismissed
  );
}
