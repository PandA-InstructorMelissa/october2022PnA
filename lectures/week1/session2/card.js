const suits = ["diamonds", "spades", "clubs", "hearts"]
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]


function makeDeck() {
    let deck = new Array()
    console.log("the deck array before loops:", deck)
    console.log("the deck array length before loops:", deck.length)
    for(let s = 0; s < suits.length; s++) {
        for(let v = 0; v < values.length; v++) {
            let card = {Suit: suits[s], Value: values[v]}
            // console.log("testing the making of cards:", card)
            deck.push(card)          
        }
    }
    console.log("the deck array after loops:", deck)
    console.log("the deck array length after loops:", deck.length)
    return deck
}
makeDeck()