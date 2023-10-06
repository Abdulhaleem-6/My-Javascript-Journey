console.log('Yo!');

// Example 24

// for(let i = 1; i <= 10; i++){
//     console.log('Hello :', i)
// };

// Example 25

// for(let i = 1; i <= 20; i++){
//     console.log(`${i} x ${i} = ${i * i}`);
// };


// Example 26

// const examScores = [98, 77, 84, 91, 57, 66];

// for(let i = 0; i < examScores.length; i++){
//     console.log(i, examScores[i]);
// };

// const myStudents = [
//     {
//         firstName : "Zeus",
//         grade : 86
//     },
//     {
//         firstName : "Artemis",
//         grade : 97
//     },
//     {
//         firstName : "Hera",
//         grade : 72
//     },
//     {
//         firstName : "Apollo",
//         grade : 90
//     }
// ];

// for(let i = 0; i < myStudents.length; i++){
//     let student = myStudents[i];
//     console.log(`${student.firstName} scored ${student.grade}`);
// };
// let total = 0; 
// for(let i = 0; i < myStudents.length; i++){
//     let student = myStudents[i];
//     total += student.grade;
    
// };
// console.log(total/myStudents.length);

// // Example 27

// const word = "stressed";
// let reversedWord = "";

// for(let i = word.length - 1; i >= 0; i-- ){
//     reversedWord += word[i];
//     console.log(reversedWord);
// };


// Example 28 
// for(let i = 1; i <= 10; i++){
//     console.log('OUTER LOOP:', i);
//     for(let j = 10; j >= 0; j-=2){
//         console.log('   INNER LOOP:', j);
//     };
// }; 

// EXample 29 

// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ];

// let totalscore = 0;
// for(let i = 0; i < gameBoard.length; i++){
//     let row = gameBoard[i]
//     console.log(row);
//     for(let j = 0; j < row.length; j++){
//         totalscore += row[j];
//     };
//     console.log(totalscore)
// };


// Example 30

// let j = 0;
// while(j <= 5){
//     console.log(j);
//     j++;
// };

// Example 31 

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while(true){
//     if(guess === target) break;
//     console.log(`Target: ${target}  Guess : ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// };
// console.log(`Target: ${target}  Guess : ${guess}`);
// console.log("COngrats, You Are Out Of The Loop!");


// Example 32

// let subreddits = ['football', 'popheads', 'cringe', 'books', 'manhwa'];

// for(let sub of subreddits){
//     console.log(sub);
// };

// // Example 33
// const magicSquare = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8]
// ];

// for(let row of magicSquare){
//     let sum = 0;
//     for(let num of row){
//         sum += num
//     };
//     console.log(`The sum of the row; ${row} is ${sum}`);
// };

// Example 34
// const movieReviews = {
//     'Arrival' : 9.5,
//     'Alien' : 9,
//     'Amelie' : 8,
//     'In Bruges' : 9,
//     'Amadeus' : 10,
//     'Kill Bill' : 8,
//     'Little Miss Sunshine' : 8.5,
//     'Coraline' : 7.5
// };

// for(let movie of Object.keys(movieReviews)){
//     console.log(movie, movieReviews[movie]);
// };

// const ratings = Object.values(movieReviews);
// let total = 0;

// for(let r of ratings){
//     total += r;
// };

// let avg = total /= ratings.length;
// console.log(avg);


// Example 35 

const jeopardyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions : 500000,
    battleOfTheDecades : 100000
};

for(let prop in jeopardyWinnings){
    console.log(prop);
};