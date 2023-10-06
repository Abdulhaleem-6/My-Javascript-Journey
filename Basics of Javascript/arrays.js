// Exaple 13
let shoppingList = ["cereal", "cheese", "ice"];

let lotto = [45, 12, 23, 25, 34];

let myCollection = [12, "dog", true, null, NaN];


// Example 14
let topSongs = [
    "Riez",
    "Frissons",
    "Paradis Bleu",
    "Tu le Merites"
];

topSongs.push("Nazare");


// Example 15
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meat = ['steak', 'chicken breast'];

console.log(fruits.concat(veggies));
let allFood = fruits.concat(veggies, meat); 


// Example 16
let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
];

if(ingredients.includes("flour")){
    console.log("I am gluten free, I can not eat that.")
};


// Example 17
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);
let mammals = animals.slice(2,4);
let reptiles = animals.slice(4);
let quadruped = animals.slice(3);


// Example 18

const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];
