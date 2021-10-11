const arr1 = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
    let arrayLength = arr.length - 1;
    let arrayReverse = [];
    for (i = arrayLength; i >= 0; i--){
        arrayReverse.push(arr[i]);
    }
    return arrayReverse;
}

const newArr = reverse(arr1);
const newArr2 = reverse(arr2);

console.log(arr1, newArr);
console.log(arr2, newArr2);