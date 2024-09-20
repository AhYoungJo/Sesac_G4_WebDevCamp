//AND(&), OR(|), XOR(^), NOT(~)
let a = 0b1010,
  b = 0b1100; // cf. 8진수(0o), 16진수(0x)
console.log(a, b);
console.log(a & b, a | b, a ^ b, ~b); // 10진수 출력. 2진수로 출력하세요.
a >> 1, a >>> 1, a << 1;
const R = 1,
  W = 2,
  E = 4; // 0b001, 0b010, 0b100
let auth = parseInt("011", 2);
const hasWriteAuth = auth & W;
const hasExeAuth = auth & E;
const hasReadAndExeAuth = auth & (R | E);
auth = auth ^ E; // XOR
