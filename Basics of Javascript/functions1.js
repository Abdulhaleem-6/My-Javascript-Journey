console.log('functions');

// Example 36
// function rollDie(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled a ${roll}`)
// };


// function throwDice(numrolls){
//     for(let i = 1; i <= numrolls; i++){
//         rollDie();
//     };
// };


// //  Example 37

// function greet(nickname){
//     console.log(nickname);
//     console.log(`Hey ${nickname}`);
// };
// greet('tim');


// Example 38 

function sum(x, y){
    console.log(x + y);
};

function divide(a,b){
    console.log(a/b);
};


// Example 39 

function sum(x, y){
    return x + y;
};

function isPurple(color){
    if(color.toLowerCase() === "purple"){
        return true;
    }
        return false;
};

function containsPurple(arr){
    for(let color of arr){
        if(color.toLowerCase() === 'purple' || color.toLowerCase() === 'magenta'){
            return true;
        }
    }

    return false;
};

colors1 = ['blue', 'violet', 'red', 'purple'];
colors2 = ['blue', 'violet', 'red', 'brown'];


// Example 40 / Challenge 1 

function isValidPassword(password, username){
    if(password.length >= 8 && !password.includes(' ') && !password.includes(username)){
        return true;
    };
    return false;
};


// Example 41 / Challenge 2 

function average(arr){
    let sum = 0;
    for(let num of arr){
        sum += num
    }
    return sum / arr.length;
};


// Example 42 / Challenge 3
const alphabets = "abcdefghijklmnopqrstuvwxyz" 

function isPangram(sentence){
    for(char of alphabets){
        if((sentence.toLowerCase()).indexOf(char) === -1){
            return false;
        }
    }
    return true;
};


// Example 43 / Challenge 4
function pick(arr){
    const randomIdx =  Math.floor(Math.random() * arr.length);
    return arr[randomIdx]
};

const cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const cardSuit = ['clubs', 'spades', 'hearts', 'diamonds'] 

function getCard(){
    randomValue = pick(cardValue);
    randomSuit = pick(cardSuit);
    return {
        'value' : randomValue,
        'suit' : randomSuit
    };
};

console.log(getCard());