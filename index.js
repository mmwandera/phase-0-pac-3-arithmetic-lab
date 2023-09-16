// add
function add(num1,num2){
    return num1+num2
}

// subtract
function subtract(num1,num2){
    return num1-num2
}

// multiply
function multiply(num1,num2){
    return num1*num2
}

// divide
function divide(num1,num2){
    return  num1/num2
}

// increment
function increment(n){
    return n += 1
}

// decrement
function decrement(n){
    return n-= 1
}

// makeInt(string) should take in a string, parse it into a base 10 integer and return it.
function makeInt(string){
   let parsedInteger = parseInt(string,10)
   return parsedInteger
}

// preserveDecimal(string) should take in a string, parse it into a float and return it.
function preserveDecimal(string){
    let parsedFloat = parseFloat(string)
    return parsedFloat
}