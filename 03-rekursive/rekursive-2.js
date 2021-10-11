const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {
    if (arr.length == 1) {
        return arr[0];
    }
    let temp = arr.slice();
    temp.pop();
    let i = arr.length - 1;
    return arr[i] + sumOfArray(temp);
} 

const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
    let j = 0;
    if (arr.length == 1) {
        return j;
    }
    let temp = arr.slice();
    temp.pop();
    let i = arr.length - 1;
    if (arr[i] >= avg) {
        j++;
    }
    return j + countAboveAvg(temp, avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);