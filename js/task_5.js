// Дан обьект:
// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey1: 664,
    alexandra: 199
}

let averageSalary = (salaries.andrey + salaries.sveta + salaries.anton + salaries.andrey1 + salaries.alexandra) / 5

console.log(averageSalary);