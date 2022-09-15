function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var lowest = i; // i = 0!!
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j; // THIS MEANS NEW MINIMUM!!
            }
        }
        // THIS IS IMPLEMENTING SWAP IF NEW MINIMUM!
        console.log(i, lowest);
        if(i !== lowest) { // IF MINIMUM IS NOT VALUE INITIALLY 
            // BEGAN WITH!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            // SWAP WITH LOWEST ITEM
        }
    }
    return arr;
}
selectionSort([0,2,34,22,10,19,17])