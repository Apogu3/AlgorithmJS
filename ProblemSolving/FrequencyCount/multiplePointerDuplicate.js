function areThereDuplicates(...args) {
    // Two Pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length) {
        if(args[start] === args[next]) {
            return true;
        }
        start ++
        next ++
    }
    return false;
}
areThereDuplicates(2,4,6,6)