// Part 1: Refactoring Old Code
// Part 2: Expanding Functionality
console.log('\nPart 1 and 2\n')
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
console.log('\nPart 3: Transforming Data\n')

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
console.log('\nPart 4: Sorting and Manipulating Data\n')

// Sort array in place
peopleArray.sort();

peopleArray.pop();
peopleArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });
peopleArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })

console.log(peopleArray);

// Calculate the average age of the group
let numberOfPeople = peopleArray.length;
let totalAge = 0;

for (let i=0 ; i < peopleArray.length; i++) {
    let personObj = peopleArray[i];
    totalAge += parseInt(personObj.age);
}

console.log(`The average age of the group is ${totalAge/numberOfPeople}`)


// Part 5: Full Circle
console.log('\nPart 5: Full Circle\n');

//convert array of objects to multi-dimensional array, then covert to csv string 
const csvArray = [];

// find the headers from the 1st object, add to array
let csvHeaders = Object.keys(peopleArray[0]);
csvArray.push(csvHeaders);

// get the rest of the data from object value, store in an array, then add to csvArray
for (let person in peopleArray) {
    let personObj = peopleArray[person];
    let personArr = [];

    for (const key in personObj) {
        personArr.push(personObj[key]);
    }

    csvArray.push (personArr);
}

// convert csvArray to csv string using nested loop: not perfect, put an extra comma at end of row
// let csvConvertedStr = '';

// for (let i = 0; i<csvArray.length; i++) {
//     let row = csvArray[i];

//     for (let k=0; k<row.length; k++) {
//         csvConvertedStr += row[k]
//         csvConvertedStr += ',';
//     }
//     csvConvertedStr += '\n';
// }

// console.log(csvConvertedStr);


// CONVERT USING BUILT-IN METHOD
let csvConvertedStr = '';

for (let i = 0; i<csvArray.length; i++) {
    let row = csvArray[i];
    csvConvertedStr += row.join(',');
    csvConvertedStr += '\n';
}

console.log(csvConvertedStr);
