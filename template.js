// old system for add multi line 

// const multiLine = 'my name is md rakibul hasan \n' +
//     'i am 25 years old \n' +
//     'i am a web developer \n';
// console.log(multiLine);

// new in es6 by using backtick 

const multiline = `my name is md rakibul hasan
i am 25 years old
i am a front end developer`

console.log(multiline);


// old system 
const a = 50;
const b = 40;
// const sumOfNumbers = 'the sum of ' + a + ' ' + 'and' + ' ' + b + ' ' + 'is' + ' ' + (a + b);
// console.log(sumOfNumbers);

// new version 
const newSum = `the sum of ${a} and ${b} is ${a + b}`;
console.log(newSum);
