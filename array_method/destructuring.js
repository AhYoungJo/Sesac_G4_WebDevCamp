const [, x, , y, , z] = [1, 2, 3, 4, 5, 6]; // x = arr[1]; y = arr[3] …
console.log(x, y, z); // ?
[f, g] = [1, 2];

console.log(f, g);

// console.log(globalThis);

let [a, b] = [1, 2];
[b, a] = [a, b];

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];
const [, { id: usrId2 }] = users;
const [, , { id: usrId3 }] = users;
console.log(usrId2); // ? 2
console.log(usrId3); // ? 2

const obj = { i: 1, j: 2, l: 3, m: 4, n: 5 };
// let { j, i, n, k = i * j * n } = obj;
// console.log(j, i, n, k);
// const { kk = i * 10, i: ii, j: jj } = obj;

// const { k = i * 10, i, j } = obj;
const { i, k = i * 10, j } = obj;
