function anagram(a1, a2) {
    if (a1.length !== a2.length) {
        return false;
    }

    const find = {};

    for (let i = 0; i < a1.length; i++) {
        let letter = a1[i];
        // if the letter exists, increment, otherwise set to 1 
        find[letter] ? find[letter] += 1 : find[letter] = 1;
    }
    console.log(find);

    for (let i = 0; i < a2.length; i++) {
        let letter = a2[i];
        // if cant find letter or letter is zero then its not an anagram
        if (!find[letter]) {
            return false;
        } else {
            find[letter] -= 1;
        }
    }
    return true;
}
anagram('love', 'levo')