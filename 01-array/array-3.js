const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
function searchInArray(arr, num) {
    let tempArr = [];
    let findIndex = 0;
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            tempArr.push(arr[i][j])
        }
    }
    for (i = 0; i < tempArr.length; i++){
        if (tempArr[i] == num) {
            return findIndex = i;
        }
        else if (tempArr[i] != num){
            continue;
        }
    }
    if (findIndex == 0) {
        return null;
    }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));