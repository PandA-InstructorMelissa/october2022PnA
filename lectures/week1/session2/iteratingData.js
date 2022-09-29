const suits = ["diamonds", "spades", "clubs", "hearts"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let deck = new Array()

function makeDeck() {
    // console.log("the deck array before loops:", deck)
    // console.log("the deck array length before loops:", deck.length)
    for(let s = 0; s < suits.length; s++) {
        for(let v = 0; v < values.length; v++) {
            let card = {Suit: suits[s], Value: values[v]}
            // console.log("testing the making of cards:", card)
            deck.push(card)          
        }
    }
    // console.log("the deck array after loops:", deck)
    // console.log("the deck array length after loops:", deck.length)
    return deck
}
makeDeck()

console.log("the deck", deck)
console.log("1st card:", deck[0])
console.log("1st cards suit:", deck[0].Suit)
console.log("1st cards value:", deck[0].Value)

function pullCard(s, v) {
    var tempArr = []
    var result = ""
    for(let d = 0; d < deck.length; d++) {
        if (deck[d].Value == v) {
            // console.log("the object pulled:", deck[d])
            tempArr.push(deck[d])
            // console.log("the temp array:", tempArr)
        }
        
    }
    // console.log("the temp array:", tempArr)
    for(let t = 0; t < tempArr.length; t++) {
        if (tempArr[t].Suit == s) {
            // console.log("the result before:", result)
            result = tempArr[t]
            console.log("the result after:", result)
        }
    }
    return result
}
pullCard("diamonds", "10")
pullCard("spades", "J")