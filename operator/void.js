let a = 1,
  b = 2,
  c = (a++, b++),
  d = (a--, b + a);

console.log(a, b, c, d);
//1, 3, 2, 4

d = void (c = a + b);
console.log(a, b, c, d);
//1, 3, 4, undefined
