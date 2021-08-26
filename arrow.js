// function expression

const expression  = function add(num1,num2){
    return num1 + num2
}

console.log(expression(30,30));
// function expression (anonymouse)

const anonymouse = function(num1,num2){
    return num1 - num2
}
console.log(anonymouse(50,10));

// arro function

const arrow = (num1,num2) =>(num1 + num2)
console.log(arrow(10,10));