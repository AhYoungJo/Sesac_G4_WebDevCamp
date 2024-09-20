Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER;
console.log("🚀 ~ Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("🚀 ~  Number.MAX_SAFE_INTEGE:", Number.MAX_SAFE_INTEGE);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log("🚀 ~ cf.BigInt(n);:", BigInt(Number.MAX_SAFE_INTEGER + 1));

Math.round(); //언제나 정수 반환
Number.isInteger();
let n = 203.418;
console.log("🚀 ~ n.toFixed(2);:", n.toFixed(2)); //자릿수 반올림
console.log(
  "🚀 ~ Math.trunc(n) === Math.floor(n):",
  Math.trunc(n) === Math.floor(n)
);
console.log(
  "🚀 ~ Math.trunc(n) === Math.ceil(n):",
  Math.trunc(n) === Math.ceil(n)
);

//Math.floor, trunc, ceil

//첫번째 소수점에서 버림
Math.floor(4.7); // 결과: 4
Math.floor(4.2); // 결과: 4 (더 작은 정수로 버림)
Math.floor(-4.7); // 결과: -5 (더 작은 정수로 올림)

//소수점 영향X, 정수 부분만 반환
Math.trunc(4.7); // 결과: 4
Math.trunc(4.2); // 결과: 4
Math.trunc(-4.7); // 결과: -4 (정수부분만 반환)
console.log("🚀 ~ Math.trunc(4.7):", Math.trunc(4.7));

//첫번째 소수점에서 올림
Math.ceil(4.7); // 결과: 5
Math.ceil(4.2); // 결과: 5 (더 큰 정수로 올림)
Math.ceil(-4.7); // 결과: -4 (더 큰 정수로 버림)
console.log("🚀 ~ Math.ceil(4.7):", Math.ceil(4.7));

//첫번째 소수점에서 반올림
Math.round(4.7); // 결과: 5
Math.round(4.3); // 결과: 4
Math.round(4.5); // 결과: 5
Math.round(-4.5); // 결과: -4

//toFixed() 특정 소수좀 자리까지 반올림
let num = 4.5673;
num.toFixed(2); // 결과: "4.57"
num.toFixed(0); // 결과: "5"
num.toFixed(1); // 결과: "4.6"
num.toFixed(3); // 결과: "4.567"

console.log("🚀 ~ Number.EPSILON", Number.EPSILON);
console.log("🚀 ~ 0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);
console.log("🚀 ~ Math.abs(0.1 + 0.2) === 0.3:", Math.abs(0.1 + 0.2) === 0.3);
console.log(
  "🚀 ~ Math.round(0.1 + 0.2) === 0.3:",
  Math.round(0.1 + 0.2) === 0.3
);
console.log(
  "🚀 ~ (0.1 + 0.2).toFixed(0) === 0.3:",
  (0.1 + 0.2).toFixed(0) === 0.3
);

console.log("🚀 ~ 2.5 % 1 === 0.5:", 2.5 % 1 === 0.5);
console.log("🚀 ~ 2.4 % 1 === 0.4:", 2.4 % 1 === 0.4);
console.log("🚀 ~ Math.abs(2.4 % 1) === 0.4:", Math.abs(2.4 % 1) === 0.4);
