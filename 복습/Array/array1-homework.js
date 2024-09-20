const assert = require("assert");

// 문제) 여기서 모든 요소를 순회하지 않는 것은?
// find, findLast, findIndex, findLastIndex, some, every (only false를 만났을 때), for(let…) { if(i..) break; }
("find, findLast, findIndex, findLastIndex, some, for(let…) { if(i..) break; }");
("every는 false를 만났을 때만 순회를 중단");

//id를 부여해서 실행하는 findId 함수를 작성하시오.
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [hong, kim, lee, park];
// const findId = (id) => (a) => a.id === id;
const findId = (id) => {
  return function (obj) {
    return obj.id === id;
  };
};


const idxId11 = users.findLastIndex(findId(1));
assert.strictEqual(idxId11, 0);

const Prime = {
  //숫자가 소수인지 판별하는 함수
  isPrime(num) {
    if (typeof num !== "number") throw new TypeError("input must be a number");
    if (num < 2) return false;
    return Array.from({ length: Math.floor(Math.sqrt(num)) - 1 }, (_, n) => n + 2).every(n => num % n !== 0);
  },
  //배열에 소수가 있는지 판별하는 함수
  hasPrime(arr) {
    if (!Array.isArray(arr)) throw new TypeError("input is not an array");
    return arr.some(this.isPrime);
  },
  isAllPrimes(arr) {
    if (!Array.isArray(arr)) throw new TypeError("input is not an array");
    // return arr.every(num => this.isPrime(num));
    return arr.every(this.isPrime);
  },
  //특정 배열의 원소 중 소수만 추출하는 함수
  findPrime(arr) {
    if (!Array.isArray(arr)) throw new TypeError("input is not an array");
    // return arr.filter(num => this.isPrime(num));
    return arr.filter(this.isPrime);
  },
};
const arr = [
  97, 8, 5, 7, 11, 2, 4, 6, 12, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
  61, 67, 71, 73, 79, 83, 89, 10,
];

assert.strictEqual(Prime.hasPrime([1, 2, 3]), true);
assert.strictEqual(Prime.hasPrime(arr), true);

assert.deepStrictEqual(Prime.findPrime([1, 2, 3]), [2, 3]);
assert.deepStrictEqual(
  Prime.findPrime(arr),
  [
    97, 5, 7, 11, 2, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89,
  ]
);


