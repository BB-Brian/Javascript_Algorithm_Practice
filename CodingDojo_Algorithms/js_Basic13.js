// The "Basic 13" - From page 27 of the Coding Dojo Algorithm Book.

// Sample Values:
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2 = [1, -11, 12, -22, 13, -33, -44, 15];
y = 4

// Challenge: Print 1 - 255
// Print all the integers from 1 to 255.

function print1To255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}

print1to255();


// Challenge: Print Odds 1-255
// Print all odd integers from 1 to 255.

function printOdds1To255() {
    for (let i = 0; i <= 255; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOdds();


// Challenge: Print Ints and Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

function printIntsAndSum0To255() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
        console.log(i);
        sum += i
        console.log(sum);
    }
}

printInts();


// Challenge: Print Array Values
// Iterate through a given array, printing each value.

function printArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArrayVals(arr1);


// Challenge: Print Max of Array
// Given an array, find and print its largest element.

function printMaxOfArray(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}

printMaxOfArray(arr1);


// Challenge: Print Average of Array
// Analyze an array's values and print the average. 

function printAverageOfArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum/arr.length);
}

printAverageOfArray(arr1);


// Challenge: Return Odds Array 1-255;
// Create an array with all the odd integers between 1 and 255 (inclusive).

function returnOddsArray1To255(){
    let arr = [];
    for(let i = 1; i <= 255; i++){
        if(i % 2 !== 0){
            arr.push(i);
        }
    }
    return(arr);
}

returnOddsArray1To255();


// Challenge: Square Array Values
// Square each value in a given array, returning that same array with changed values.

function squareArrayVals(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] *= arr[i];   
    }
    return arr;
 }

 squareArrayVals(arr1);


// Challenge: Return Array Count Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.

function returnArrayCountGreaterThanY(arr, y){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count ++;
        }
    }
    console.log(count);
}

returnArrayCountGreaterThanY(arr1, y);


// Challenge: Zero Out Array Negative Numbers
// Return the given array, after setting any negative values to zero.

function zeroOutArrayNegativeVals(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

zeroOutArrayNegativeVals(arr2);


// Challenge: Print Max, Min, Average, Array Values
// Given an array, print the max, min and average values for that array.

function printMaxMinAverageVals(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    console.log("Max = " + max + ",", "Min = " + min + ",", "Average = " + sum/arr.length);
}

printMaxMinAverageVals(arr1);


// Challenge: Shift Array Values Left
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length-1] = 0;
    console.log(arr);
}

shiftArrayValsLeft(arr1);


// Challenge: Swap String for Array Negative Values
// Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapStringForArrayNegativeVals(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}

swapStringForArrayNegativeVals(arr2);
