function sumZero(num) {
    let first = 0;
    let end = num.length - 1;
    while(first < end) {
        let sum = num[first] + num[end];
        if(sum === 0) {
            return [num[first], num[end]];
            // if sum is greater than zero
        } else if (sum > 0) {
            end --;
            // if sum is less than zero 
        } else {
            first++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,7])