const arr = [[1, 1], [16, 2], [81, 3]];
// const arr = [1, 2, 3, 4];

const a1 = arr.map(a =>
    a.map(x => [x ** 2, Math.sqrt(x)])).flat(2);

const a2 = arr.flatMap(a =>
    a.flatMap(x => [x ** 2, Math.sqrt(x)]));

const a3 = arr.flatMap(a =>
    [a.map(x => x ** 2), a.map(x => Math.sqrt(x))].flat());

const a4 = arr.flatMap(a => a.map(x => [x ** 2, Math.sqrt(x)]));

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);