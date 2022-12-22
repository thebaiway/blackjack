let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return Math.floor(Math.random() * 10) + 2
}

function startGame() { 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame () {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length ; i ++) {
        cardsEl.textContent += cards[i] + ' '
    }
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}



