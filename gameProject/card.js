const suits = ["diamonds", "spades", "clubs", "hearts"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let deck = new Array()

function makeDeck() {
    // console.log("the deck array before loops:", deck)
    // console.log("the deck array length before loops:", deck.length)
    for(let s = 0; s < suits.length; s++) {
        for(let v = 0; v < values.length; v++) {
            let card = {suit: suits[s], value: values[v]}
            // console.log("testing the making of cards:", card)
            deck.push(card)          
        }
    }
    // console.log("the deck array after loops:", deck)
    // console.log("the deck array length after loops:", deck.length)
    return deck
}
makeDeck()

function renderDeck(deck){
    // console.log("receiving the deck:", deck)
    document.getElementById("deck").innerHTML = ""
    for(let c = 0; c < deck.length; c++){
        console.log("card in loop:", deck[c])
        let card = document.createElement('div') // creates a container for each card
        let value = document.createElement('span') // creates a container for the value of each card
        let suit = document.createElement('span') // creates a container for the suit of each card
        card.className = 'card' // giving the card div a class
        if(deck[c].suit == "diamonds") { // if statement gives the card contents a class depending on the suit
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
        value.innerHTML = deck[c].value // Telling each value container what to print
        suit.innerHTML = deck[c].suit // Telling each suit container what to print
        card.appendChild(value) // Adding the value to the card container
        card.appendChild(suit) // Adding the suit to the card container
        document.getElementById('deck').appendChild(card) // Adding the card to div that is hard coded on the html with an id of deck
    }
}
renderDeck(deck)
