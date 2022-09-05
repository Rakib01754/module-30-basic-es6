function sum(num1, num2 = 15) {
    const sum = num1 + num2;
    return sum;
}
const result = sum(10);
console.log(result);

function sum2(num1 = 50, num2 = 20) {
    const sum = num1 + num2;
    return sum;
}
const result2 = sum2();
console.log(result2);

function fullName(first, last = 'khan') {
    const name = `${first}  ${last}`;
    return name;
}
const result3 = fullName('rakib');
console.log(result3);