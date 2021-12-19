// Generate a random hand from a deck of 52 cards.

const myHand = () => {
    let suit = ["Clubs", "Diamonds", "Spades", "Hearts"]
    let card = [];
    for(let i = 2; i <= 14; i++){
        card.push(i)
    }
    card[9] = 'Jack'
    card[10] = "Queen"
    card[11] = "King"
    card[12] = "Ace"

    let deck = []
    for(let k = 0; k < suit.length; k++){
        for(let l = 0; l <= card.length-1; l++){
            deck.push(`${card[l]} of ${suit[k]}`)
        }
    }
    
    let hand = []
    for(let j = 0; j < 5; j++){
        let suitInHand = hand.push(suit[Math.floor(Math.random([j] * suit.length) * 4)])
        let cardInSuit = hand.push(card[Math.floor(Math.random([j] * card.length) * 13)])
    }
    return hand;
}

console.log(myHand());