const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    let j = 0;
    if (arr.length == 0) {
        return console.log("angka tidak ditemukan")
    }
    let temp = arr.slice();
    temp.pop();
    let i = arr.length - 1;
    if (arr[i] == num) {
        return console.log("angka ditemukan pada index: ", i);
    }
    searchInArray(temp, num);
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);