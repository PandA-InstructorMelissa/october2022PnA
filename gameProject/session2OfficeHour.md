Building a deck of cards.

# The deck
1. 52 cards to a deck
2. 4 suits - spades, diamonds, clubs, hearts
3. 13 numbers - 2-10 j,q,k,a
4. 2 colors - red/black <!-- if going to html -->

# The function to create the deck
1. empty array - for the deck
2. suits array
3. numbers array
4. if statement for colors to change class name depends on suit <!-- if going to html -->
5. 2 for loops
6. a way to push the created card to the deck
7. return the deck

# Code examples
1. Empty Array => inside function
    a. let deck = []
    b. let deck = new Array()
2. suits array => outside function
    a. const suits = ["diamonds", "spades", "clubs", "hearts"]
3. numbers array => outside function
    a. const values = ["A", "2", "3", etc]
4. function makeDeck() {}
5. return the deck => inside function
    a. return deck
6. suits loop =>
    a. for(let s = 0; s < suits.length; s++) {}
7. values loop =>
    a. for(let v = 0; v < values.length; v++) {}


# Create function to pull a designated card
1. function pullCard() {}
2. 2 parameters 1 for suit and 1 value
3. temp var for card storage?
4. final storage for chosen card once pulled
5. for loop
6. conditional