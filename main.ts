//Обычный импорт
// import {testFunction, test} from './src/scripts/geron';

//Импорт как объект
//import * as testObject from './src/scripts/geron';

//Импорт при экспорте по умолчанию
//import testFunction from './src/scripts/geron';

// const office = {
//     tech:{
//         employersCount: 10,
//         jobsCount: 5,
//     },
//     design:{
//         employersCount:10,
//         jobsCount: 5
//     }
// }

// let SumOfWorks = 0

// Object.entries(office).forEach(([part, partInfo]) => {
//     SumOfWorks += partInfo.jobsCount
// })

// // Level 1
import {MaxEmployeesSeason, MaxIncomeSeason, MinIncomeSeason, DisEmployeesSeason, data} from "./src/scripts/data";

console.log(MaxEmployeesSeason());