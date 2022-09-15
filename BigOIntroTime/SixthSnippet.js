
/* Returns a list of maximum 8 regardless of the value of n */

function logAtMost8(n) {
    for (var i = 1; i <= Math.min(8, n); i++) {
        console.log(i);
    }
}