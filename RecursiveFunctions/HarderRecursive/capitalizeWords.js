function capatilizeWords(array) {
    if(array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capatilizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
}
capatilizeWords(['big', 'words'])