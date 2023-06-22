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


/* let soup = "Chicken Noodle Soup";
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
 */




// User Input

/* alert("Hello World!") */
/* let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean); */
/* let name = prompt("Please enter your name.");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("You didn't enter your name.");
} */






// Your First Interactive Game

/* let playGame = confirm("Shall we play rock, paper, or scissors?");
if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne == "rock" || playerOne === "paper" || playerOne === "scissors"){

      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock"
        : computerChoice === 2 ? "paper"
        : "scissors";

      let result =
      playerOne === computer
      ? "Tie game!"
      : playerOne === "rock" && computer === "paper"
      ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
      : playerOne === "paper" && computer === "scissors"
      ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
      : playerOne === "scissors" && computer === "rock"
      ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
      : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
    alert(result);
    let playAgain = confirm("Play Again?");
    playAgain ? location.reload() : alert("Ok, thanks for playing.");
    }else {
      alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind, maybe next time.");
  }
}else {
  alert("Ok, maybe next time.");
} */







// LOOPS

/* let myNumber = 0;
while (myNumber < 50) {
  myNumber++;
  myNumber += 2;
  console.log(myNumber);
  myNumber = myNumber + 1;
  myNumber++;
} */
// don't create an endless loop

// do while loop

/* let myNumber = 50;
while (myNumber < 50) {
  myNumber += 2;
  console.log(myNumber);
}
do {
  console.log(myNumber);
} while (myNumber < 50); */

//for loop

/* for (let i = 0; i <= 10; i++) {
  console.log(i);
} */
/* let name = "Shaina"
for (let i = 0; i <= name.length; i++) {
  console.log(name.charAt(i));
} */

//while loop

/* let name = "Shaina"
let counter = 0;
let myLetter;
while (true) {
 myLetter = name[counter];
 console.log(myLetter);
 if (myLetter === "n") break;
 counter++;
} */

//counter
/* let name = "Shaina"
let counter = 0;
let myLetter;
while (counter <= 3) {
 myLetter = name[counter];
 console.log(myLetter);
 if (counter === 1) {
  counter += 2;
  continue;
 }
 if (myLetter === "n") break;
 counter++;
}
console.log(counter); */









// Functions

// Functions Provide Reusable Code!!
// Methods = Built-in Functions

/* "Dave".toLowerCase();
Math.random(); */

// Function Declaration Syntax:

/* function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}

console.log(sum(5, 10)); */

/* const getUserNameFromEmail = function (email)  {
  return email.slice(0, email.indexOf("@"));
}
  console.log(getUserNameFromEmail("dave@davedomain.com")); */

  // Arrow Functions

/*   const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
  };
    console.log(getUserNameFromEmail("john@davedomain.com")); */

/* const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("jOhN")); */







// Scope
// var, let, and const
// var is legacy, const is for values you are not reassigning, let is if a value will be reassigned.
//Global = Not in a function or block. Not desirable.
//Local = In a function or block. Not global.
//var instantiates function() scoped variables.
// let and const instantiate {block} scoped variables.

// global scope
/* var x = 1;
let y = 2;
const z = 3;

// local scope; function scope
function myFunc() {
  const z = 5;
  console.log(y);

  //local scope; block scope
  {
    let y = 4;
    console.log(y);
  }
}
myFunc();
 */








// Arrays

/* const myArray = []; */

// add elements to an array by referencing the position they're in in the array
/* myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false; */

// refer to an array
/* console.log(myArray); */

//length property
/* console.log(myArray.length); */

// Last element in an array
/* console.log(myArray[myArray.length - 1]); */
/* console.log(myArray[1]); */
/* 
myArray.push("school");
console.log(myArray);

const lastItem = myArray.pop();
console.log(lastItem);

myArray.unshift(42);
console.log(myArray); */

/* myArray.splice(1, 0, 42);  *///play with middle number
/* console.log(myArray); */

/* const myArray = ["A", "B", "C", "D", "E", "F"];
myArray.reverse();
console.log(myArray); */

// join method: concat
/* const myArrayA = ["A", "B", "C"]
const myArrayB = ["D", "E", "F"];
const newArray = myArrayB.concat(myArrayA);
console.log(newArray);*/

// join method: spread operator
/* const myArrayA = ["A", "B", "C"]
const myArrayB = ["D", "E", "F"];
const newArray = [...myArrayA, ...myArrayB];
console.log(newArray); */

 