const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let tempAvr = 0;
    let arrayLength = arr.length - 1;
    let oversizedArr = 0;
    for (i = 0; i <= arrayLength; i++){
        tempAvr = tempAvr + arr[i];
    }
    tempAvr = tempAvr / arr.length;
    for (i = 0; i <= arrayLength; i++){
        (arr[i] > tempAvr) ? oversizedArr++ : oversizedArr;
    }
    return oversizedArr;
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))