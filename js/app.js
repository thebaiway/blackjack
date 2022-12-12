let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let hitCard = Math.floor(Math.random() * 10) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


function startGame () {
    if (sum <= 20) {
    message = "Hit?"
    } else if (sum === 21) {
        message = "Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You've busted! 😢 "
        isAlive = false
    }

console.log(message)

}