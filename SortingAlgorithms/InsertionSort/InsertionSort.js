function insertionSort(arr) {
    //PICKING SECOND ELEMENT IN ARRAY
    for(var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
    //COMPARING SECOND ELEMENT WITH ONE BEFORE IT 
        for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
            console.log(arr)
        }
        //CONTINUE TO NEXT ELEMENT 
        arr[j+1] = currentValue;
    }
    return arr;
}
insertionSort([2,1,9,76,4,20])

// STARTS AT SECOND ELEMENT IN ARRAY THEN COMPARES IT TO 
// THE ONE BEFORE. THEN CONTIUES THAT DOWN THE ARRAY UNTIL
// ARRAY IS SORTED SMALLEST TO LARGEST