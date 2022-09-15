function both(a1, a2) {//Accepts 2 arrays//
    if(a1.length !== a2.length) {
        return false;
    }
    for (let i = 0; i < a1.length; i++){
        let correctIndex = a2.indexOf(a1[i] ** 3)
        if(correctIndex === -1) {
            return false;
        }
        console.log(a2);
        a2.splice(correctIndex,1)
    }
    return true;
}

both([1,2,2,4,6], [1,8,64,8,216])