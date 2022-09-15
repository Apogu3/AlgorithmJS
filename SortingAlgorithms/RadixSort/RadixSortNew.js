/* This finds the digit in a given number through the math below */
function getDigit(num, i) {//We have math.abs to work on negative numbers//
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {//math.log10 how many times 10 can go into the given value//
    if (num === 0) return 1;//then floor the number aka remove decimal values rounding down//
    return Math.floor(Math.log10(Math.abs(num))) + 1;//Then add 1 to the remaining value// 
}

function mostDigits(nums) {//Passes variable (nums) through function//
    let maxDigits = 0;//Sets starting max variable to 0//
    for (let i = 0; i < nums.length; i++) {//Loops through entire array (nums) finding the largest number//  
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));//Compares current maxDigits(value) with the next value(nums[i]) and returns the larger value//
    }
    return maxDigits;
}

function radixSort(nums) {//Function taking a listg of nums//
    let maxDigitCount = mostDigits(nums);//Variable that passes largest number and amount of numbers in the number//
    for (let k = 0; k < maxDigitCount; k++) {//Loop gives us a index k that we can pass into the getDigit method to pass each number// 
        // Below creates our 10 slots
        let digitBuckets = Array.from({length: 10}, () => []);//Creates 10 virtual buckets or slots AKA an array of 10 empty arrays//
        for (let i = 0; i < nums.length; i++){//Loops over every number//
            let digit = getDigit(nums[i],k);//Gives us the digit in the index of each number//
            digitBuckets[digit].push(nums[i]);//Places each array(number) in correct slot/bucket(number)//
        }
        console.log(digitBuckets);
        // this pushes values into array in original form
        nums = [].concat(...digitBuckets);//Reassign nums variable pass in every element in digitBuckets as individual arguments//
        console.log(nums);
    }
    return nums;
}

radixSort([10320,123,8,49,1234,54321])
