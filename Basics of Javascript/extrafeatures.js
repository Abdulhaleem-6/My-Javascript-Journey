console.log('Extra JS features.')

// Example 60 : Default params
function multiply(x, y=1){
    return x * y;
};

const greet = (person, greeting = "Hi") => {
    console.log(`${greeting}, ${person}!`)
};


const blah = (x, y = [1,2,3]) => {
    console.log(x, y);
};


// Example 61 : Spread
function giveMeFour(a, b, c, d){
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
};

const colours = ['red', 'orange', 'yellow', 'green'];

// giveMeFour(colours);
// giveMeFour(...colours);

const feline = {
    legs : 4,
    family : 'Felidae'
};
const canine = {
    family : 'Caninae',
    furry : true
};

const dog = {
    ... canine,
    isPet : true,
    isAdorable : false
};

const houseCat = {
    ... feline,
    isGrumpy : true,
    isCute : true
};

const catDog = {
    ... feline,
    ... canine
};


// Example 62 : The Argument Object.
// function sum(){
//     const argArr = [...arguments]
//     return argArr.reduce((total, currVal) => {
//         return total + currVal;
//     });
// };


// Example 63 : Rest Params
function sum(...nums){
    return nums.reduce((total, currval) => {
        return total + currval;
    });
};

function fullname(first, last, ...titles){
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
};

function multiply(...nums){
    return nums.reduce((total, currval) => {
        return total * currval;
    });
};

// Example 64 : Destructuring arrays
// const footballers = [
//     'Lionel Messi',
//     'Pedri Gonzalez',
//     'Ansu Fati',
//     'Ilkay Gundogan',
//     'Martin Zubimendi',
//     'Ronald Araujo'
// ];

// const [goat, eight, leftW] = footballers;
// const [first,,, fourth] = footballers;


// Example 65 : Destructuring Objects
// const runner = {
//     first : 'Eliud',
//     last : 'Kipchoge',
//     country : 'Kenya',
//     title : 'Elder of the Order of The Golden Heart of Kenya'
// };

// const {first, last} = runner;

// const {country : nation, title : honorific} = runner;


// Example 66 : Nested structuring 
const results = [
    {
        first : 'Eliud',
        last : 'Kipchoge',
        country : 'Kenya',
    },
    {
        first : 'Feyisa',
        last : 'Lilesa',
        country : 'Ethiopia'
    },
    {
        first : 'Galen',
        last : 'Rupp',
        country : 'United States'
    }
];

const [{first : goldwinner}, {country}] = results;


// Example 67 : Destructuring parameters 
const runner = {
    first : 'Eliud',
    last : 'Kipchoge',
    country : 'Kenya',
    title : 'Elder of the Order of The Golden Heart of Kenya'
};

// function print(person){
//     const{first, last, title} = person;
//     console.log(`${first} ${last}, ${title}`);
// };

function print({first, last, title}){
    console.log(`${first} ${last}, ${title}`);
};

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
];

function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status : ${statusCode}`)
};