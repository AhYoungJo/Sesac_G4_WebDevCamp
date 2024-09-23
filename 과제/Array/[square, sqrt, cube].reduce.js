const arr = [1, 2, 3, 4, 5];
const square = n => n ** 2;
const sqrt = n => Math.sqrt(n);
const cube = n => n ** 3;
const calcFns = [square, sqrt, cube];

const result = arr.map(num =>
    calcFns.reduce((acc, calcFn) => calcFn(num), num),
);

console.log(result);

/**
 * TryThis. 수행 순서를 자유롭게 변경하도록 해보세요.
[square, sqrt, cube].reduce
[cube, square, sqrt].reduce
 */
