function doWorkout(){
    return "Workout!"
}

function eatBreakfast(){
    let food = cookFood()
    return `Eating ${food}`
}

function cookFood(){
    let items = ["Cereal", "Bacon", "Coffee"]
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(){
    doWorkout()
    eatBreakfast()
    console.log("Okay ready to go to work!")
}

wakeUp()