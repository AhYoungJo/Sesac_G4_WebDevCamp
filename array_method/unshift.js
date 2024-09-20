//비순수 메서드

const array1 = [1, 2, 3];

const arr = array1;

arr.unshift(4, 5);
// Expected output: 5
console.log(arr);
console.log(array1);
