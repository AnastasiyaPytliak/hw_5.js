// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

let film = {
    name: "The Avengers",
    rating: "pg-13"
}


delete film.name
delete film.rating

console.log(film)