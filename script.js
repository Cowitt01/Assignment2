
/*
Cory Witt
script.js
INFO 1579
Shaw
06/15/2025
*/

"Use Strict";

let cargoWeight = [];           //this variable will hold an array of different item weights
let totalCargoWeight = 0;       //this variable will hold the total weight of all items
let itemWeight = 0;             //this variable will hold the weight of a single item
let maxWeightLbs = 1000;        //this variable specifies the maximum weight for all cargo
let average = 0;                //this variable will hold the average weight of all items

//Start of Do\While loop where user input will be accepted. If user input is not greater than zero lbs 
//or value entered is not -1. prompt user to enter a valid value. If value entered is greater than 
//zero lbs, accumulate value in the cargoWeight array. If -1 is entered by the user, discontinue 
//processing.

do {

//Prompt user for entry
itemWeight = parseFloat(prompt("Please enter the item weight in pounds or input -1 to exit."));
if(itemWeight >= 0) {
    cargoWeight[cargoWeight.length] = itemWeight;
} else if (itemWeight != -1) {
    alert("Item weight must be a valid number that is greater than zero pounds!");
} 

} while (itemWeight != -1)  

//At this point, user has entered a -1 to exit Do / While loop.
// If the total number of weight entries is greater than zero, 
// average the weights in the cargoWeight array, contstruct / print the appropriate html message
// to screen, and exit loop.

if(cargoWeight.length > 0) {
    for (let cargoweightItem of cargoWeight) {
        totalCargoWeight = parseFloat(totalCargoWeight + cargoweightItem);
    }
    average = parseFloat(totalCargoWeight / cargoWeight.length);
}

let html = 
`
    <h1>Space Weight</h1>  
    <p>Total cargo weight: ${totalCargoWeight} </p>
    <p>Average item weight: ${average} </p> 
`;

 if (totalCargoWeight < maxWeightLbs) {
    html +=
    `
    <p>Congratulations! The rocket can take off!</p>
    `;

 }else{
    html +=
`
    <p>Oh no! Your rocket is too heavy to take off!</p>
    <p>The rocket must be less than 1000 pounds to take off!</p>
`;


 }
 
document.write(html);