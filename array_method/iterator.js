const s = new Set([1, 2, 3]);
console.log(s);

s.forEach((e) => console.log(e));

const letter = 'letter';

//letter.forEach((e) => console.log(e));
[...letter].forEach((e) => console.log(e));