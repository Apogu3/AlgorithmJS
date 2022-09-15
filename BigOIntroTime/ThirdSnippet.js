function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {//Counts up from 0 to n //
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) { //Counts down from n to 0//
        console.log(j);
    }
    console.log("Back down. Bye!");
}