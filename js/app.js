let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() { 
    renderGame()
}

function renderGame () {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Count: " + sum 
    if (sum <= 20) {
    message = "Hit?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = "You've busted!"
        isAlive = false
    }

    messageEl.textContent = message

}

function hitCard () {
    let card = Math.floor(Math.random() * 10) + 2
    sum += card
    cards.push(card)
    renderGame()
}
