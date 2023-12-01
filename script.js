// Part 1: Refactoring Old Code

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

