// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// In the code above, we have declared a variable called number which is assigned a value of 1
// We then increment the number by 1 using the increment operator (++)
// we create a control structure to check the logic if the number is greater than 2,
//  and if it evaluates to true, then we print to the console "Yes"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declared a variable name and the value was a string.
// we then created a control structure to strictly verfify the name which is a string. If the name match the global variable name declared then the console will print the message in there.
// If the name does not match the global variable name declared then the console will print the second message in the second statement. 


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// There have been 2 varibles which one has been declared already the the second.
// We are now strictly assigning  the value of 123 which is an integer to the variable code. 
// We then created a control structure to check if the code is equal to 123. \
// now we multiply the values of the variable code by 2 and stores it in the same variable container
// So if code has values that are really integers, then multiply by 2
//
//  Then we have another logic to check if the new value of code (thus the currrent sum from the code*2) is greater than 250
// If true then print to the console 'duper'.



//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// WRITE YOUR DESCRIPTION HERE
// We have 3 variables declared and assigned values to them. isStudent is a boolean value,
// age is an integer and zip is an integer as well. We then created a control structure to 
// check if the boolean value of isStudent is true and the value of zip is greater than 
// 80000. If both conditions are met, then print to the console 'You're a 
// student on the West Coast!'. If not, then we have another condition to check if the 
// boolean value of isStudent is false or the value of age is less than 30. If
// either of these conditions are met, then print to the console 'What are your hobbies?'. If not, 
// then we have another condition to check if the boolean value of isStudent is true. If true
// then print to the console 'Welcome to Prime!'. If not, then print to the console
// 'How about the weather?'
//  The order of the conditions is important here, because if the first condition is met, then
//  the rest of the conditions will not be checked.





// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - mix is set to true, but the instructions say to set it to false. And the colors does not have their said values in the variable
// Should be mix = false;
// let colorOne = 'blue'; // Initial colorOne value
let colorTwo = 'red'; // Initial colorTwo value
let mix = false; // Corrected mix value


if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

