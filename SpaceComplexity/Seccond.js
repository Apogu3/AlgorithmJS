
/* Returns the value multiplied by 2 in an array */

function double(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}