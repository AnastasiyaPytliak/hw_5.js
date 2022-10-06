// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 

let login = prompt('Введите логин','')
let password = prompt('Введите пароль', '')

let userData =  {}

userData.login = login
userData.password = password

let confirmUserData = confirm(`Проверьте правильно ли введен логин: ${userData.login} и пароль: ${userData.password}`)

function checkUserData(confirmUserData) {
    if (confirmUserData === true) {
        return "Добро пожаловать!"
    } else {
        return "Повторите процедуру авторизации снова"
    }
}

alert(checkUserData(confirmUserData));