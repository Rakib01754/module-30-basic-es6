// find max number from an array 


// old system 

// const numArr = [10, 20, 30, 40, 50, 60];

// const maxNumber = numArr => {
//     let maxNum = numArr[0];
//     for (let i = 0; i < numArr.length; i++) {
//         const index = numArr[i];
//         if (index > maxNum) {
//             maxNum = index;
//         }
//     }
//     return maxNum;
// }
// const result = maxNumber(numArr);
// console.log(result);


// on es6  by spreading an array to a 

// const numArr = [15, 35, 85, 140, 25, 145, 36];
// const maxNumber = Math.max(...numArr);
// console.log(maxNumber);


// add an array to another array and push some new value to the adjusted array 


const firstArr = [15, 35, 85, 140, 25, 145, 36];

const secondArr = [10, 20, 30, 40, 50, 60];

const adjustArr = [...firstArr, ...secondArr];
adjustArr.push(500);
console.log(adjustArr);