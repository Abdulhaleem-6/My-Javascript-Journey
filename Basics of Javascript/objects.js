console.log("Woah.");
// Example 19

const fitbitData = {
    totalSteps : 30877,
    totalMiles : 211.7,
    avgCalorieBurn : 5775,
    workoutsThisWeek : "5 of 7",
    avgGoodSleep : '2:13'
};


//  Example 20 

const numbers = {
    100: 'one hundred',
    16 : 'sixteen'
};


// Example 21

const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews['mrSmith78'] = 3.5;


// Example 22

const student = {
    firstName : 'David',
    lastName : 'Jones',
    strengths : ['Music', 'Art'],
    exams : {
        midterm : 92,
        final : 88
    }
};

const avg = (student.exams.midterm + student.exams.final)/2; 

// Example 23 

const xAndO = {
    player1 : {
        username : 'Blue',
        playingAs : 'X'
    },
    player2 : {
        username : 'Muffins',
        playingAs : 'O'
    },
    board : [
        ['O', null, 'X'],
        [null, 'X', 'O'],
        ['X', 'O', null]
    ] 
};