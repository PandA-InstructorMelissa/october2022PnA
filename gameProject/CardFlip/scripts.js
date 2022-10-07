const suits = ["diamonds", "spades", "clubs", "hearts"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let deck = new Array()

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

function renderDeck(deck){
    document.getElementById("deck").innerHTML = ""
    for(let c = 0; c < deck.length; c++){
        console.log("card in loop:", deck[c])
        let flip = document.createElement('div')
        let inner = document.createElement('div')
        let back = document.createElement('div')
        let card = document.createElement('div')
        let value = document.createElement('span')
        let suit = document.createElement('span')
        let img = document.createElement('img')
        img.src = './200.gif'
        img.alt = 'moon'
        flip.className = 'flip-card'
        inner.className = 'flip-card-inner'
        back.className = 'flip-card-front'
        card.className = 'flip-card-back'
        if(deck[c].suit == "diamonds") {
            suit.className = 'red'
            value.className = 'red'
        } 
        else if(deck[c].suit == "hearts"){
            suit.className = 'red'
            value.className = 'red'
        }
        else {
            suit.className = 'black'
            value.className = 'black'
        }
        value.innerHTML = deck[c].value
        suit.innerHTML = deck[c].suit
        card.appendChild(value)
        card.appendChild(suit)
        back.appendChild(img)
        inner.appendChild(card)
        inner.appendChild(back)
        flip.appendChild(inner)
        document.getElementById('deck').appendChild(flip)
    }
}
renderDeck(deck)