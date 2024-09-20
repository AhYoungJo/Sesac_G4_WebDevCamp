// arr.slice([begin[, end]])
// 음수도 가능

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = arr.slice();
console.log(arr === arr2);
//지금은 디스트럭처링 문법 써서 함


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


//단순히 Function.prototype.bind()를 사용해 객체에 slice()를 바인딩 하면 됩니다. 
function list() {
    return Array.prototype.slice.call(arguments);
}

let list1 = list(1, 2, 3); // [1, 2, 3]
