const assert = require("assert");

for (let i = 0.1; i < 1; i = i + 0.1) console.log(Math.abs(i.toFixed(1)));

for (let i = 1; i <= 10; i = i + 1) {
  if (i % Math.sqrt(i) !== 0) {
    console.log(`무리수 ${i}: ${Math.sqrt(i).toFixed(3)}`);
  }
}

const today = new Date();
const WEEK_NAMES = "일월화수목금토";
console.log("🚀 ~ WEEK_NAMES[today.getDay()]:", WEEK_NAMES[today.getDay()]);

// switch (today.getDay()) {
//   case 0:
//     console.log("일");
//     break;
//   case 1:
//     console.log("월");
//     break;
//   case 2:
//     console.log("화");
//     break;
//   case 3:
//     console.log("수");
//     break;
//   case 4:
//     console.log("목");
//     break;
//   case 5:
//     console.log("금");
//     break;
//   case 6:
//     console.log("토");
//     break;
//   default:
//     console.log("일치하는 요일 없음");
// }

// function addPoints(a, b) {
//   const int_A = Math.trunc(a);
//   const int_B = Math.trunc(b);
//   const length_intA = int_A.toString().length + 1;
//   const length_intB = int_B.toString().length + 1;
//   const length_decimalA = a - int_A && a.toString().length - length_intA;
//   const length_decimalB = b - int_B && b.toString().length - length_intB;
//   const decimal_A = +-(int_A - Number(a)).toFixed(length_decimalA);
//   const decimal_B = +-(int_B - Number(b)).toFixed(length_decimalB);
//   const fixed_point =
//     length_decimalA >= length_decimalB ? length_decimalA : length_decimalB;
//   return +(int_A + int_B + decimal_A + decimal_B).toFixed(fixed_point);
// }

// function addPoints(a, b) {
//   console.log(a.toString().length, b.toString().length, +(a + b));
//   return +(a + b).toFixed(
//     a.toString().length > b.toString().length
//       ? a.toString().length
//       : b.toString().length
//   );
// }

function addPoints(a, b) {
  // a와 b의 소수점 이하 자릿수 계산
  const decimalA = (a.toString().split(".")[1] || "").length;
  const decimalB = (b.toString().split(".")[1] || "").length;

  // 소수점 이하 자릿수 중에서 큰 값을 찾음
  const maxDecimals = Math.max(decimalA, decimalB);

  // 소수점 이하 자릿수를 최대 자릿수로 맞춰줌
  const factor = Math.pow(10, maxDecimals);

  console.log(decimalA, decimalB, factor);
  const adjustedA = Math.round(a * factor);
  const adjustedB = Math.round(b * factor);

  console.log(adjustedA, adjustedB);

  // 소수점을 맞춰준 값을 더한 후 다시 나누어 원래 값으로 되돌림
  const result = (adjustedA + adjustedB) / factor;

  return result;
}

assert.deepStrictEqual(addPoints(0.21354, 0.1), 0.31354);
assert.deepStrictEqual(addPoints(0.14, 0.28), 0.42);
assert.deepStrictEqual(addPoints(0.34, 0.226), 0.566);
assert.deepStrictEqual(addPoints(10.34, 200.226), 210.566);
assert.deepStrictEqual(addPoints(0.143, -10.28), -10.137);
assert.deepStrictEqual(addPoints(0.143, -10), -9.857);
