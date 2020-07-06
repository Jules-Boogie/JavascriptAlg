// store objects in a map and store it with a unique key that you can use to identify it


let cardAce = {
    name: "Ace of Spades"
}


let cardKing = {
    name: "King of Spades"
}

let deck = new Map()

deck.set('as', cardAce)
deck.set('kc', cardKing)
deck.get()


for(key of deck.keys()){
    // retrieves the keys
}

for(value of deck.values()){
    // retrieve values
}

for(entries of deck.entries()){
    // get back arrays 
}