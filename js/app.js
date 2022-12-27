// let player = {
//     name: "Bailee",
//     chips:  145
// }
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    return Math.floor(Math.random() * 10) + 2
}

function twoCard () {
    var img = document.createElement('img');
    img.src = "img/2-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function threeCard () {
    var img = document.createElement('img');
    img.src = "img/3-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function fourCard () {
    var img = document.createElement('img');
    img.src = "img/4-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function fiveCard () {
    var img = document.createElement('img');
    img.src = "img/5-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function sixCard () {
    var img = document.createElement('img');
    img.src = "img/6-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function sevenCard () {
    var img = document.createElement('img');
    img.src = "img/7-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function eightCard () {
    var img = document.createElement('img');
    img.src = "img/8-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function nineCard () {
    var img = document.createElement('img');
    img.src = "img/9-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function tenCard () {
    var img = document.createElement('img');
    img.src = "img/10-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function elevenCard () {
    var img = document.createElement('img');
    img.src = "img/11-card.png"
    document.getElementById('playing-card-div').appendChild(img);
    // down.innerHTML = "Image Element Added.";}
}

function startGame() { 
    document.getElementById('playing-card-div').textContent = " "
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    if (firstCard === 2) {
        twoCard()
    } else if (firstCard === 3) {
        threeCard()
    } else if (firstCard === 4) {
        fourCard()
    } else if (firstCard === 5) {
        fiveCard()
    } else if (firstCard === 6) {
        sixCard()
    } else if (firstCard === 7) {
        sevenCard()
    } else if (firstCard === 8) {
        eightCard()
    } else if (firstCard === 9) {
        nineCard()
    } else if (firstCard === 10) {
        tenCard()
    } else if (firstCard === 11) {
        elevenCard()
    }
    
    if (secondCard === 2) {
        twoCard()
    } else if (secondCard === 3) {
        threeCard()
    } else if (secondCard === 4) {
        fourCard()
    } else if (secondCard === 5) {
        fiveCard()
    } else if (secondCard === 6) {
        sixCard()
    } else if (secondCard === 7) {
        sevenCard()
    } else if (secondCard === 8) {
        eightCard()
    } else if (secondCard === 9) {
        nineCard()
    } else if (secondCard === 10) {
        tenCard()
    } else if (secondCard === 11) {
        elevenCard()
    }
    renderGame()
}

function renderGame () {
    // cardsEl.textContent = "Cards: "
    // for (let i = 0; i < cards.length ; i ++) {
    //     cardsEl.textContent += cards[i] + ' '
    // }
    sumEl.textContent = "Count: " + sum 
    if (sum <= 20) {
    message = "Hit?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = sum + "! You've Busted!"
        isAlive = false
        document.getElementById('playing-card-div').textContent = " "
        sumEl.textContent = " "
    }

    messageEl.textContent = message

}

function hitCard () {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)

        if (card === 2) {
            twoCard()
        } else if (card === 3) {
            threeCard()
        } else if (card === 4) {
            fourCard()
        } else if (card === 5) {
            fiveCard()
        } else if (card === 6) {
            sixCard()
        } else if (card === 7) {
            sevenCard()
        } else if (card === 8) {
            eightCard()
        } else if (card === 9) {
            nineCard()
        } else if (card === 10) {
            tenCard()
        } else if (card === 11) {
            elevenCard()
        }
        
        renderGame()
    }
   
}







