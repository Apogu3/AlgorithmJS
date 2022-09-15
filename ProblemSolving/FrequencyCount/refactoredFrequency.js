function both(a1, a2) {
    if(a1.length !== a2.length) {
        return false;
    }
    let freqCount1 = {}
    let freqCount2 = {}
    for(let val of a1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1
    }
    for(let val of a2) {
        freqCount2[val] = (freqCount2[val] || 0) + 1
    }
    for(let key in freqCount1) {
        if (!(key ** 3 in freqCount2)) {
            return false;
        }
        if (freqCount2[key ** 3] !== freqCount1[key]) {
            return false;
        }
    }
    console.log(freqCount1);
    console.log(freqCount2);
    return true;
}

both([2, 4, 6, 4], [8, 64, 216, 64])