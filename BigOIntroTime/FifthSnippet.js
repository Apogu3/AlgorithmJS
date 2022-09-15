
/* Returns a list of at least 6 regardless what n is */

function logAtLeast6(n) {
    for (var i = 1; i <= Math.max(6, n); i++) {
        console.log(i);
    }
}