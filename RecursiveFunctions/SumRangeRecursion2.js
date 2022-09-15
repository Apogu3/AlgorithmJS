function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

sumRange(5)


// return 3 + sumRange(2)
// return 2 + sumrange(1)
// return 1 THIS IS END OF RECURSIVE CALL THEN RETURNS WAITING SUM!
// return 2 + 1 which is sumRange of 2
// then sumrange of 2 is 3
// sumrange of 3 is waiting for sumrange of 2 (3) which it new it would be 3 plus the end sumRange
// which is 3. so the answer is 3 + 3 = '6'