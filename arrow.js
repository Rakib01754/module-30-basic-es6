// normal as usual function 

function sumation(a, b) {
    const sum = a + b;
    return sum;

}
const result = sumation(10, 20);
// console.log(result);

// as usual but direct return function 
function sumation1(a, b) {
    return a + b;
}
const result2 = sumation(20, 20);
// console.log(result2);

// anonymus function 


// function expression 

const add = function (a, b) {
    return a + b;
}
const result3 = add(30, 20);
// console.log(result3);



// arrow function with return 
const add1 = (a, b) => {
    return a + b
};

const sumation2 = add1(100, 200);
// console.log(sumation2);

// arrow function with implicit return 

const add3 = (num1, num2, num3) => num1 + num2 + num3;
const result4 = add3(2, 5, 3);
console.log(result4);


