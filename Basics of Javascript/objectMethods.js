console.log('Object Methods!');

// Example 68 : Shorthand Object Properties
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg
    };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);


// Example 69 : Computed properties
// const role = 'host';
// const person = 'Jools Holland';

// // const team = {};
// // team[role] = person;

// const team = {
//     [role] : person
// }

// function addProp(obj, key, value){
//     const copy = {...obj};
//     copy[key] = value;
//     return copy;
// };

const addProp = (obj, key, value) => {
    return {...obj, [key] : value}
}


// Example 70 : Adding methods to Objects
const math = {
    add : function(x,y){
        return x + y;
    },
    multiply : function(x,y) {
        return x * y;
    }
};


// Example 71: Method shorthand syntax
const auth = {
    username : 'TommyBot',
    login(){
        console.log('Logged you in.')
    },
    logout() {
        console.log('Goodbye')
    }
}


// Example 72 : Thhis.
function sayHi(){
    console.log('Hi')
    console.log(this);
};

const person = {
    first : 'Cherilyn',
    last : 'Sarkisian',
    nickname : 'Cher',
    fullname() {
        const {first, last, nickname} = this;
        return `${first} ${last} AKA ${nickname}`;
    },
    printBio(){
        const fullname = this.fullname();
        console.log(`${fullname} is a person!`);                                
    },
    laugh : () => {
        console.log(this);
        console.log(`${this.nickname} says HAHAHAHAHAHAHAH`);
    }
}


// Example 73 : ANnoyomatic demo [Continuation of 'This']
const annoyer = {
    phrases : ['literally', 'cray cray', "I can't even", 'Totes!', 'YOLO', "Can't Stop, won't Stop"],
    pickPhrase(){
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length)
        return phrases[idx]
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000);
    },
    stop() {
        clearInterval(this.timerId);
        console.log('Thank fuck.')
    }
}


// Example 74 : Card Deck(Improved)
// function makeDeck(){
//     const deck = []
//     const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
//     const suits = ['clubs', 'spades', 'hearts', 'diamonds']

//     for (let value of values){
//         for(let suit of suits){
//             deck.push({
//                 value,
//                 suit
//             })
//         }
//     }
//     return deck;
// }

// function drawCard(deck){
//     return deck.pop()
// }

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck)



const makeDeck = () => {
    return {
        deck : [],
        drawnCards : [],
        suits : ['clubs', 'spades', 'hearts', 'diamonds'],
        values : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        initializeDeck(){
            const {suits, values, deck} = this;
            for (let value of values){
                for(let suit of suits){
                    deck.push({
                        value,
                        suit
                    })
                }
            }
        },
        drawCard(){
            const card = this.deck.pop()
            this.drawnCards.push(card);
            return card;   
        },
        drawMultiple(numCards){
            const cards = [];
            for(let i = 0; i < numCards; i++){
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle(){
            const {deck} = this;
            // loop over array backwards
            for (let i = deck.length - 1; i > 0; i--){
                // Pick random index before current element
                let j = Math.floor(Math.random() * (i + 1));
                // Swap
                [deck[i], deck[j]] = [deck[j], deck[i]]
            }
            return deck;
        }
    }
};

const myDeck = makeDeck()
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

const deck2 = makeDeck();
deck2.initializeDeck();