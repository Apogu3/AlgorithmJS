/* returns all possible pairs between 0 and n!!
 for example: (2) 0 0,0 1,0 2,1 0,1 1,1 2,2 0,2 1,2 2 */

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}