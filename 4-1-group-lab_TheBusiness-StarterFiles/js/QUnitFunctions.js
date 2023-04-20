function isEven(val) {
    return val % 2 === 0;
}

function addNumbers(val1, val2){
    
    if((!isNaN(val1)) && (!isNaN(val2)))
        return val1 + val2;
    else
        return "error";
    
}

/* Nic Functions */

function add(a, b) {
    return a + b;
}