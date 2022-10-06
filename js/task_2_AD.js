// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

// ```javascript
//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
// ```

let student1 = {
    name: 'Polina',
    age: 27,
}
    
let student2 = {
    name: 'Polina',
    age: 27,
}

function compareObjects(student1, student2) {
    if (student1.name === student2.name && student1.age === student2.age) {
        return true
    } else {
        return false
    }
}

console.log(compareObjects(student1, student2));