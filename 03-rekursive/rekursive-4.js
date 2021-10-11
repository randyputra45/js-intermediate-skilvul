let count = 0;
function trianglePattern(a,b) {
    let space = "";
    if (a === 0) {
        return;
    }
    for (let i = 0; i < b; i++) {
        if (i < a - 1) {
            space += " " 
        }else{
            space += String.fromCharCode(count + 65);
            count++; 
        }
    }
    console.log(space);
    trianglePattern(a - 1, b)
}

trianglePattern(5, 5);