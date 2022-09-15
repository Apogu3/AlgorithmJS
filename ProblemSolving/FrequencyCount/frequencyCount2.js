function equalFreq(num1, num2) {
    let numOne = num1.toString();
    let numTwo = num2.toString();
    if(numOne.length !== numTwo.length) return false;

    let count1 = {};
    let count2 = {};

    for (let i = 0; i < numOne.length; i++) {
        count1[numOne[i]] = (count1[numOne[i]] || 0) + 1
    }

    for (let j = 0; j < numOne.length; j++){
        count2[numTwo[j]] = (count2[numTwo[j]] || 0) + 1
    }

    for (let key in count1){
        if(count1[key] !== count2[key]) return false;
    }
    return true;
}
equalFreq(123,231)
