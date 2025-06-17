
/*
Cory Witt
script.js
INFO 1579
Shaw
06/15/2025
*/

"Use Strict";

let cargoWeight = [];           //this will hold an array of different item weights
let totalCargoWeight = 0;       //this will hold the total weight of all items
let itemWeight = 0;             //this will hold the weight of a single item
let maxWeightLbs = 1000;        //this specifies the maximum weight for all cargo
let average = 0;                //this will hold the average weight of all items

//add your loop around this 
do {

itemWeight = parseFloat(prompt("Please enter the item weight in pounds or input -1 to exit."));
if(itemWeight >= 0) {
    cargoWeight[cargoWeight.length] = itemWeight;
} else if (itemWeight != -1) {
    alert("Item weight must be a valid number that is greater than zero pounds!");
} 

} while (itemWeight != -1)

if(cargoWeight.length > 0) {
    for (let cargoweightItem of cargoWeight) {
    //for (let i = 0; i < cargoWeight.length; i++) {
        totalCargoWeight = parseFloat(totalCargoWeight + cargoweightItem);
    }
    average = parseFloat(totalCargoWeight / cargoWeight.length);
}

//alert("Total cargo weight is " + totalCargoWeight +"; average item weight is " + average);

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