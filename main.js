/* eslint-disable indent */
'use strict';

//max min
//function max
//initalize a max


//while the counter is < array.length
//white (counter i < array.length)
//  if current max value < array[index]
//      new max = array[index]
//i++
function max(numArray) {
    let i = 0;
    let currentMax = -Infinity;
    while (i < numArray.length) {
        if(currentMax < numArray[i]) {
            currentMax = numArray[i];
        }
        i++;
    }
    return currentMax;
}
//return max

//function min
function min(numArray) {
    let i = 0;
    let currentMin = Infinity;
    while (i < numArray.length) {
        if(currentMin > numArray[i]) {
            currentMin = numArray[i];
        }
        i++;
    }
    return currentMin;
}


console.log(max([2, 3, 4, 5, 7]));
console.log(min([4, 3, 67, 2, 1]));

//function takes average
//let total = 0
//average.forEach(num => toatl += num)
//return total / average.length

function getAverage(numArray) {
    let total = 0;
    numArray.forEach(num => total += num);
    return total / numArray.length;
}

console.log(getAverage([2, 4, 5, 7]));