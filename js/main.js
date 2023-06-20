/* console.log("Shaina".charAt());
console.log(Math.floor(Math.random() * 4 + 1));

console.log("Shaina".charAt(Math.random()));
console.log("Shaina".charAt(Math.random()));
console.log("Shaina".charAt(Math.random()));
console.log("Shaina".charAt(Math.floor(Math.random() * 4 + 1)));
console.log("Shaina".charAt(Math.floor(Math.random())));
console.log("Shaina".charAt(Math.floor(Math.random() * 5)));

const anyName = "Jonathan";

console.log(anyName.charAt(Math.floor(Math.random() * anyName.length))); */







//Conditionals: If Statements

//syntax
/* if (condition) {
  //run some code
} else {
  //run some different code
} */


/* let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
  reply = "No soup for you!";
}else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
  reply = `Here's your oder of ${soup}`;
}else {
  reply = "Sorry, we're out of ${soup}";
}
console.log(reply); */

/* let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if(testScore >= 80) {
  grade = "B";
} else if(testScore >= 70) {
  grade = "C";
} else if(testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  }
}
console.log(grade); */



//ROCK PAPER SCISSORS 

/* let playerOne = "rock";
let computer = "rock";


if (playerOne === computer) {
  //tie game!
} else if (playerOne === "rock"){
  if (computer === "paper"){
    //computer winds
  } else {
    //playerOne wins
  }
} else if (playerOne === "paper"){
  if (computer === "scissors"){
    //computer winds
  } else {
    //playerOne wins
  }
} else if (playerOne === "scissors"){
  if (computer === "rock"){
    //computer winds
  } else {
    //playerOne wins
  }
} */


// Conditionals: Switch Statements

// syntax

/* switch (expression OR value) {

  case choice1:
    // run this code
    break;

  case choice2:
    // run this different
    break;

  // add as many cases as needed

  default:
    // run this code if no case matches
    // no need for a break here
} */


// CONDITIONALS: Switch Statements

/* switch (Math.floor(Math.random() * 5 + 1)) {

  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;
  
  case 3:
    console.log(3);
    break;

  default:
    console.log("No match");
    // run this code if no case matches
    // no need for a break here
} */


// SWITCH STATEMENTS: ROCK PAPER SCISSORS

/* let playerOne = "scissors";
let computer = "paper";

switch (playerOne) {

  case computer:
    console.log("Tie game!");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    } else {
      console.log ("playerOne wins")
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    } else {
      console.log ("playerOne wins")
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log ("playerOne wins")
    }
    break;
} */




// Conditionals: Ternary Operator

//syntax

//condition? ifTrue : ifFalse;


let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup ? `Yes, we have ${soup} today.` : "Sorry, no soup today.";
console.log(soupAccess); 

let testScore = 79;
let myGrade = 
  testScore > 89 
    ? "A" 
    : testScore > 79 
    ? "B"
    : testScore > 69 
    ? "C"
    : testScore > 59 
    ? "D"
    : "F";
console.log(`My test grade is a ${myGrade}.`)

// TERNARY OPERATOR::: ROCK PAPER SCISSOR

let playerOne = "rock";
let computer = "paper";
let result = 
  playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer Wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "playerOne wins!";
console.log(result);