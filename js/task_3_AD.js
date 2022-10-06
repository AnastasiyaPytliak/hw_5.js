// У нас есть обьект с животными. Наша задача узнать имя птицы и вывести его в консоль.
// Но произошла ошибка и в этом обьекте нету птицы. Если попробуем узнать имя мы получим **ОШИБКУ**. 
// Задача придумать как обратиться к несуществующему обьекту и не получить ошибку чтобы наша программа работала дальше.

const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}

function getValue() {
    if (animals.birds === undefined) {
        animals.birds = { name: 'default' }
        return animals.birds.name
    } else {
        return "Всё ещё ошибка"
    }
}

console.log(getValue());