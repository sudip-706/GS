//const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
//const { rmdirSync } = require("fs");

// console.log(y);
// var y =10;
// console.log(y);
// sayHi ();

// function sayHi (){
//     console.log("Hello");
// }
// sayHi();
// //ref();
// //sayHello();
// var ref = function sayHello(){
//     console.log("Inside greeter")
// }
// ref();



//...........................................
let q = Math.floor (5 / 2) ;//quotient will be 2 
console.log(q);
//....
var myFirstName = "sudip";
var myLastName = "Kunwar";
console.log(myFirstName + myLastName);

//.....
var sampleStr = "Sudip said, \"He is learning JavaScript\".";
console.log(sampleStr);
//Sudip said, "He is learning JavaScript".
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr);
//I am a "double quoted" string inside "double quotes".
var myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr1);

// goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
// badStr = 'Finn responds, "Let's go!"'; // Throws an error
badStr = 'Finn responds, "Let\'s go!"'; //use \ to escape the quotes in middle 
console.log(badStr);
//.....
var myStr ="This is the start."+" This is the end."; // Only change this line
console.log(myStr);

var myStr1 = "This is the first sentence.";
myStr1 += " This is the second sentence"
console.log(myStr1);

var myName ="Sudip";
var myStr ="My name is " + myName + "and I am well";

//Appending Variables to Strings
var someAdjective = "wonderful";
var myStr = "Learning to code is ";
 myStr += someAdjective;
 console.log(myStr);

// Find the Length of a String
var lastNameLength = 0;
var lastName = "Loveblace";
lastNameLength = lastName.length;
console.log(lastNameLength);

//Use Bracket Notation to Find the First Character in a String
var firstLetterOfLastName ="";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; 
console.log(firstLetterOfLastName);

//Understand String Immutability
//In JavaScript, String values are immutable, which means that they cannot be altered once created.
var myStr = "Jello World";
//myStr[0] = "H"; //this doesnt work
myStr="Hello world"
console.log(myStr);

//Use Bracket Notation to Find the Nth Character in a String
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
 console.log(thirdLetterOfLastName);

 //Use Bracket Notation to Find the Last Character in a String
 //In order to get the last letter of a string, you can subtract one from the string's length.
 var myName = "SudipKunwar";
 var lastLetterOfName = myName[myName.length-1];
 console.log(lastLetterOfName);

//Use Bracket Notation to Find the Nth-to-Last Character in a String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length -2]; //gives second last letter of word
console.log(secondToLastLetterOfLastName);

//Word Blanks
//fill the missing words --MadLibs Game
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";


var wordBlanks = " The " + myNoun + " looking " + myAdjective + " can " + myVerb + " very " + myAdverb + "." ; 
console.log(wordBlanks);

//Store Multiple Values in one Variable using JavaScript Arrays
//var sandwich = ["peanut butter", "jelly", "bread"]
var myArray = ["sudip",706];
console.log(myArray);

//Nest one Array within Another Array---This is also called a multi-dimensional array.
var myArray = [["sudip",706],["pramod",701]];
console.log(myArray);

//Access Array Data with Indexes
var myArray = ["sudip",60,70];
var myData = myArray[0];
console.log(myData);

//Modify Array Data With Indexes
//Unlike strings, the entries of arrays are mutable and can be changed freely.
var myArray = [18,64,99];
myArray[0]=45;
console.log(myArray);

//Access Multi-Dimensional Arrays With Indexes.....One way to think of a multi-dimensional array, is as an array of arrays. 
// the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.
// var arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [[10,11,12], 13, 14]
//   ];
//   arr[3]; // equals [[10,11,12], 13, 14]
//   arr[3][0]; // equals [10,11,12]
//   arr[3][0][1]; // equals 11
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData);
var myData1 = myArray[3][0][2];
console.log(myData1);