console.log('scope');

// Example 44

// if(true){
//     var animal = 'eel';
//     console.log(animal);
// };
// console.log(animal);

// // Example 45

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// for(var i = 0; i < animals.length; i++){
//     console.log(i, animals[i]);
// };

// console.log(i)

// // Example 46

// function doubleArray(arr){
//     const result = []
//     for(let num of arr){
//         let double = num * 2;
//         result.push(double);
//     };
//     return result;
// };

// Example 47

function outer(){
    let movie = 'Amadeus';
    
    function inner(){
        let movie = 'The Shining';
        
        function extraInner(){
            console.log(movie.toUpperCase());
        };
        extraInner();
    };
    inner();
};

// Example 48 : Function expressions

// function add(x, y){
//     return x + y;
// };

// const sum = function(x,y){
//     return x + y;
// };

// const product = function multiply(x,y){
//     return x * y;
// }

// Example 49 : Higher order functions 

// function add(x, y){
//     return x + y;
// };
// function subtract(x, y){
//     return x - y;
// };
// function multiply(x, y){
//     return x * y;
// };
// function divide(x, y){
//     return x / y;
// };

// const operations = [add, subtract, multiply, divide];

// for(let func of operations){
//    let result = func(30,5);
//    console.log(result);
// };

// Example 50 : Functions as arguments

function callThreeTimes(f){
    f();
    f();
    f();
};

function cry(){
    console.log('What a life.');
};

function rage(){
    console.log('Fuck.')
}

function repeatNtimes(action, times){
    for(let i = 0; i < times; i++){
        action();
    };
};

function pickOne(func1, func2){
    let rand = Math.random();
    if(rand < 0.5){
        func1();
    }
    else{
        func2();
    }  
};

// Example 51 : functions as return values 

function multiplyBy(num){
    return function(x){
        return x * num
    };
};

const triple = multiplyBy(3);

function makeBetweenFunc(x,y){
    return function(num){
        return num >= x && num <= y;
    };
};

const isChild = makeBetweenFunc(0,18) ;


// Example 52 : Callbacks
function grumpus(){
    alert("GAHHH GO AWAY!");
};
// setTimeout(function(){
//     alert("welcome to my site?");
// }, 5000);

const btn = document.querySelector('button');
btn.addEventListener('click', grumpus)