// Part 1: Refactoring Old Code
// Part 2: Expanding Functionality
console.log('Part 1 and 2')
// Refactoring code from previous assignment 308.3.1

let csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let resultArr = [];

//find the heading row
let headerEndIndex = csvData.indexOf('\n');
let headerRow = csvData.slice(0,headerEndIndex);
console.log('headers: ' + headerRow);

//split the header row by the comma and add to reasultArr, log the number of columns
headerArr = headerRow.split(',');
resultArr.push(headerArr);
console.log('Number of columns: ' + headerArr.length)

//split the rest of the data into rows
let dataRows = csvData.slice(headerEndIndex+1).split('\n');

//split each row into cell array and push to reasultArr
for (let i=0; i < dataRows.length ; i++) {
    let row = dataRows[i];
    let rowArr = row.split(',');
    resultArr.push(rowArr);
}

console.log(resultArr);



// Part 3: Transforming Data
console.log('Part 3: Transforming Data')

const inputArr = [
    ["ID", "Name", "Occupation", "Age"], 
    ["42", "Bruce", "Knight", "41"], 
    ["57", "Bob", "Fry Cook", "19"], 
    ["63", "Blaine", "Quiz Master", "58"], 
    ["98", "Bill", "Doctor’s Assistant", "26"]
];

const peopleArray = [];

//starting from the row after header row, loop through each row
for (let i = 1; i < inputArr.length; i++) {
    //create a person object for each row in the data
    let row = inputArr[i];
    let personObj = {};

    //loop through the array elements of the row and add the key-value pair to personObj
    for (let k=0; k < row.length; k++) {
        // convert the keys to lower case
        let key = inputArr[0][k].toLowerCase();
        personObj[key] = row[k];
    }
    // after finish the row, add personObj to peopleArray
    peopleArray.push(personObj);
}

console.log(peopleArray);

// Part 4: Sorting and Manipulating Data
console.log('Part 4: Sorting and Manipulating Data')

const sortedArr = peopleArray.sort();

sortedArr.pop();
sortedArr.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });
sortedArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(sortedArr);

// Calculate the average age of the group
let numberOfPeople = sortedArr.length;
let totalAge = 0;

for (let i=0 ; i < sortedArr.length; i++) {
    let personObj = sortedArr[i];
    totalAge += parseInt(personObj.age);
}

console.log(`The average age of the group is ${totalAge/numberOfPeople}`)
