function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    // LOOPING BOTH AT THE SAME TIME
    while( i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            // IF ARRAY 1 IS SMALLER
            results.push(arr1[i]);
            i++;
        } else {
            // IF EQUAL OR ARRAY 1 IS GREATER
        results.push(arr2[j])
        j++;
        } // THIS ENDS THE LOOP AT END OF SMALLEST ARRAY!!!
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++; // IF END IS HIT, WHATEVER REMAINS IN LARGER
             // ARRAY GETS ADDED TO MERGE!!
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
     return results;
}
function mergeSort(arr) {
    if(arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length/2); // Defining Midpoint
    let left = mergeSort(arr.slice(0, mid)); // First Half Array
    let right = mergeSort(arr.slice(mid)); // Second Half Array
    return merge(left, right); // Returning full array sorted
}

mergeSort([10,24,76,73])

