let values1 = ['Apple',1, false];
let values2 = ['Fries',2, true,'Apple'];
let values3 = ['Apple',9, 'Apple'];

// let B = []

// values1.forEach(A => {if (values2.includes (A) && values3.includes)
//     B.push(A);
// })
// console.log(B)

//ANSWER
for (let val1 of values1) {
    for (val2 of values2) {
        for (val3 of values3) {
          if (val1 === val2 && val2 === val3) {
            console.log(val1);
          }  
        }
    }
}
