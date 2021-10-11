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

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));