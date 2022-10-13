const suits = ["diamonds", "spades", "clubs", "hearts"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let deck = new Array()
let card = new Object()

function makeDeck() {
    for(let s = 0; s < suits.length; s++) {
        for(let v = 0; v < values.length; v++) {
            let card = {suit: suits[s], value: values[v]}
            deck.push(card)          
        }
    }
    return deck
}
makeDeck()

function pullCard() {
    var tempArr = []
    var result = ""
    var v = document.renderCard.number.value
    var s = document.renderCard.suit.value
    for(let d = 0; d < deck.length; d++) {
        if (deck[d].value == v) {
            tempArr.push(deck[d])
        }  
    }
    for(let t = 0; t < tempArr.length; t++) {
        if (tempArr[t].suit == s) {
            result = tempArr[t]
            console.log("the result after:", result)
            card = result
        }
    }
    renderCard(result)
    return result   
}
function altPullCard() {
    var result = ""
    var d = randomCard()
    result = deck[d]
    altRenderCard(result)
    return result   
}
altPullCard()
// pullCard("diamonds", "10")
// pullCard("spades", "J")

console.log('testing the deck', deck)
console.log('the card', card)

function renderCard(card) {
    document.getElementById('card').innerHTML = ''
    let theCard = document.createElement('div')
    let value = document.createElement('span')
    let suit = document.createElement('span')
    theCard.className = 'card'
    if(card.suit == 'diamonds') {
        suit.className = 'red'
        value.className = 'red'
    }
    else if(card.suit == 'hearts') {
        suit.className = 'red'
        value.className = 'red'
    }
    else {
        suit.className = 'black'
        value.className = 'black'
    }
    value.innerHTML = card.value
    suit.innerHTML =card.suit
    theCard.appendChild(value)
    theCard.appendChild(suit)
    document.getElementById('card').appendChild(theCard)
}
renderCard(card)
function altRenderCard(card) {
    document.getElementById('randomCard').innerHTML = ''
    let theCard = document.createElement('div')
    let value = document.createElement('span')
    let suit = document.createElement('span')
    theCard.className = 'card'
    if(card.suit == 'diamonds') {
        suit.className = 'red'
        value.className = 'red'
    }
    else if(card.suit == 'hearts') {
        suit.className = 'red'
        value.className = 'red'
    }
    else {
        suit.className = 'black'
        value.className = 'black'
    }
    value.innerHTML = card.value
    suit.innerHTML =card.suit
    theCard.appendChild(value)
    theCard.appendChild(suit)
    document.getElementById('randomCard').appendChild(theCard)
}
renderCard(card)

function randomCard(){
    var card = Math.floor(Math.random()* 52)
    console.log("the random index", card)
    return card
}
randomCard()