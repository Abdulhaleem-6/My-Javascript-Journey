// Example 1
if(1 === 1){
    console.log("It is true!");
}

// Example 2
let rating = 5;

if(rating === 3){
    console.log("You are a superstar!");
}
else if(rating === 2){
    console.log("Meets expectations!");
}
else if(rating === 1){
    console.log("You are a failure. You can never make it!");
}
else{
    console.log("Invalid rating!");
}

//example 3
let num = 37;

if(num % 2 != 0){
    console.log("Odd number.");
}

// Example 4 
let highScore = 1430;
let userScore = 1600;

if(userScore >= highScore){
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else{
    console.log(`Good game. Unfortunately, Your score of ${userScore} did not beat the high score of ${highScore}.`);
}

// Example 5
let password = "woah";


if(password.length >= 8 && password.indexOf(' ') === -1){
        console.log("Valid password!");
}
else{
    console.log("Password must be longer!");
}

// Example 6 
let number = 30;

if(number >= 1 && number <= 10){
    console.log("Number is between ! and 10!");
}
else{
    console.log("Please guess a number between 1 and 10.");
}

// Example 7
let age = 78;

if(age < 6 || age >= 65){
    console.log("You get in for free!");
}
else{
    console.log("You must pay to get in!");
}

// Example 8 
let colour = "violet";

if(colour === "purple" || colour === "lilac" || colour === "violet"){
    console.log("Great choice!");
}

// Example 9
let loggedInUser;

if(!loggedInUser){
    console.log("Get out of here!");
}

// Example 10
let flavour = "strawberry";

if(!(flavour === "grape" || flavour === "cherry")){
    console.log("We do not have that flavour!")
}

// Example 11
let no = 2;

no === 7 ? console.log("Lucky."):console.log("Bad.")


// Example 12
let status = "online";
let color = status === "offline" ? "red":"green"