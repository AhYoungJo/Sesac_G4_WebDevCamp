const a78 = [7, 8];
const a88 = [1, 2, [...a78]];
const a99 = [1, 2, a78];

const arr2 = a78.concat([4, 5]);
const arr3 = a78.concat(4, 5);
const arr4 = a78.concat(arr2);
const arr5 = [...a78, ...arr3];