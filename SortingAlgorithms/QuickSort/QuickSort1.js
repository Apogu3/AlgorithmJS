function pivot(arr, start=0, end=arr.length+1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    var pivot = arr[start]; //Start of the Array
    var swapIdx = start; //Keeps track of where we swap pivot to at the very end
    
    // This loops over every element after pivot
    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) { // Compares pivot to next element
            swapIdx++;// Swapidx is 1 it will swap counter with pivot
            swap(arr, swapIdx, i);
        }
        console.log(arr)
    }
    swap(arr,start,swapIdx)
    console.log(arr)
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right){
    let pivotIndex = pivot(arr, left, right) // Pivot index is 3
    quickSort(arr, left, pivotIndex-1) // left
    quickSort(arr, pivotIndex+1, right) // right
    }
    return arr;
}
quickSort([4,6,9,1,2,5,3])