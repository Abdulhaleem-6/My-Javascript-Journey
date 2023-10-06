console.log('Application of functions to collections of data.');

// Example 53
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function(n){
//     console.log(n * 2);
// });

// function printTriple(num){
//     console.log(num * 3);
// };

// numbers.forEach(printTriple);


// Example 54
// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ['asap', 'byob', 'rsvp', 'diy'];

// const doubles = numbers.map(function(num){
//     return num * 2
// });

// const numdetail = numbers.map(function(n){
//     return {
//         value : n,
//         isEven : n % 2 === 0,
//     }
// });

// const abbrv = words.map(function(letter){
//     return letter.toUpperCase().split('').join('.');
// });


// Example 55 
// const square = function(x){
//     return x * x;
// };

// const square = (x) => {
//     return x * x;
// };

// const isEven = (num) => {
//     return num % 2 === 0;
// };

// const square = n => (
//     n * n 
// );

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const doubles = nums.map(n => n * 2);

// const parityList = nums.map((n) => (
//     n % 2 === 0 ? 'even' : 'odd'
// ));


//  Example 56
let movies = [
    'The Fantastic Mr. Fox',
    'Mr. amd Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
];

const movie = movies.find( movie => movie.includes('Mrs') );

const movie2 = movies.find( m => m.indexOf('Mrs') === 0)


// // Example 57
// const nums = [34, 35, 67, 54, 109, 102, 32, 9];

// const odds = nums.filter(n => n % 2 === 1);
// const evens = nums.filter(n => n % 2 === 0);
// const bigNums = nums.filter(n => n > 50); 

// // Example 58
// const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// const threeLetters = words.every(word => word.length === 3);

// const allG = words.every(word => {
//     const last = word.length - 1;
//     return word[last] === 'g'
// })

// const startWithD = words.some( word => word[0] === 'd');


// Example 58 
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const ascSort = prices.slice().sort((a, b) => a - b);
const desSort = prices.slice().sort((a, b) => b - a);


// Example 59
const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, currentVal) => {
    return total * currentVal
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
const maxGrade = grades.reduce((max, currentVal) => {
    if(currentVal > max) return currentVal;
    return max;
})

const sum = [10, 20, 30, 40, 50].reduce((sum, currentVal) => {
    return sum + currentVal
}, 200)

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];
// const results = votes.reduce((tally, val) => {
//     if (tally[val]) tally[val] ++;
//     else tally[val] = 1;

//     return tally
// }, {})

const results = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {})