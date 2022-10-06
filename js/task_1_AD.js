// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей.
// Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами.
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

let scoreA = 0
let scoreB = 5

scoreA = '' + scoreA
scoreB = '' + scoreB

let result

function getScore(result) {
    if (scoreA <= 9 && scoreB <= 9) {
        switch (scoreA) {
            case "0":
            scoreA = scoreA.replace("0", "ноль ");
            break;
            case "1":
            scoreA = scoreA.replace("1", "один ");
            break;
            case "2":
            scoreA = scoreA.replace("2", "два ");
            break;
            case "3":
            scoreA = scoreA.replace("3", "три ");
            break;
            case "4":
            scoreA = scoreA.replace("4", "четыре ");
            break;
            case "5":
            scoreA = scoreA.replace("5", "пять ");
            break;
            case "6":
            scoreA = scoreA.replace("6", "шесть ");
            break;
            case "7":
            scoreA = scoreA.replace("7", "семь ");
            break;
            case "8":
            scoreA = scoreA.replace("8", "восемь ");
            break;
            case "9":
            scoreA = scoreA.replace("9", "девять ");
            break;
        }
        switch (scoreB) {
            case "0":
            scoreB = scoreB.replace("0", " ноль");
            break;
            case "1":
            scoreB = scoreB.replace("1", " один");
            break;
            case "2":
            scoreB = scoreB.replace("2", " два");
            break;
            case "3":
            scoreB = scoreB.replace("3", " три");
            break;
            case "4":
            scoreB = scoreB.replace("4", " четыре");
            break;
            case "5":
            scoreB = scoreB.replace("5", " пять");
            break;
            case "6":
            scoreB = scoreB.replace("6", " шесть");
            break;
            case "7":
            scoreB = scoreB.replace("7", " семь");
            break;
            case "8":
            scoreB = scoreB.replace("8", " восемь");
            break;
            case "9":
            scoreB = scoreB.replace("9", " девять");
            break;
        }
    }
    result = scoreA + ":" + scoreB
    return `Cчет: ${result}`
}

console.log(getScore(result));