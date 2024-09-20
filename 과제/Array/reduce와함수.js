const arr = [1, 2, 3, 4, 5];
const square = n => n ** 2;
const sqrt = n => Math.sqrt(n);
const cube = n => n ** 3;
const calcFns = [square, sqrt, cube];

const result = arr.map((num) =>
    calcFns.reduce((acc, calcFn) =>
        acc + calcFn(num)
        , num)
);

console.log(result);
