function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
        console.log("ONE TIME PASS")
    }
    return arr;
}
bubbleSort([37,45,29,8,12,88,100])