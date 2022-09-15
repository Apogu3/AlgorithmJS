
/* WRITE A FUNCTION WHICH TAKES IN A STRING AMD RETURNS 
COUNTS OF EACH CHARACTER IN THE STRING */

charCount("aaaaaa");
/* {
    a: 8
}
*/

charCount("Your phone number is 1234567")
/*
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    b: 1,
    e: 1,
    h: 1,
    i: 1,
    m: 1,
    n: 2,
    o: 2,
    p: 2,
    r: 2,
    s: 1,
    u: 2,
    y: 1
*/

function charCount(strng){
    var end = {};
    for(var char of strng){
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            end[char] = ++end[char] || 1;
       }
    }
    return end;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
       !(code > 64 && code < 91) &&
       !(code > 96 && code < 123)){
        return false;
       }
    return true;
}

