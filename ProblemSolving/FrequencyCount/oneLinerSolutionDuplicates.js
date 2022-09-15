function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}
areThereDuplicates(1,2,3,1)