let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let hitCard = Math.floor(Math.random() * 10) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

console.log(sum)

if (sum <= 20) {
    console.log("Hit?")
} else if (sum === 21) {
    console.log("Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You've busted! 😢 ")
    isAlive = false
}

