const assert = require("assert");

// 문제) 여기서 모든 요소를 순회하지 않는 것은?
// find, findLast, findIndex, findLastIndex, some, every (only false를 만났을 때), for(let…) { if(i..) break; }
("find, findLast, findIndex, findLastIndex, some, for(let…) { if(i..) break; }");
("every는 조건을 만족하지 않는 요소를 만났을 때만 순회를 중단");

//id를 부여해서 실행하는 findId 함수를 작성하시오.
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [hong, kim, lee, park];
const findId = (id) => (a) => a.id === id;
const idxId11 = users.findLastIndex(findId(1));
assert.strictEqual(idxId11, 0);

const Prime = {
  //1~ arr.length-1 까지 소수 판별 배열
  makePrimes(arr) {
    const max = Math.max(...arr);
    const primes = Array.from({ length: max + 1 }, () => true);
    primes[0] = primes[1] = false;
    for (let idx = 2; idx <= max; idx++) {
      if (primes[idx]) {
        for (let i = idx * idx; i <= max; i += idx) {
          primes[i] = false;
        }
      }
    }
    return primes;
  },
  //특정 배열의 원소 중 소수가 존재하는지 체크하는 함수
  hasPrime(arr) {
    const primes = this.makePrimes(arr);
    for (const num of arr) {
      if (primes[num]) {
        return true;
      }
    }
  },
  //특정 배열의 원소 중 소수만 추출하는 함수
  findPrimes(arr) {
    const primes = this.makePrimes(arr);
    const primeNumbers = arr.filter((num) => primes[num]);
    return primeNumbers;
  },
};
const arr = [
  97, 8, 5, 7, 11, 2, 4, 6, 12, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
  61, 67, 71, 73, 79, 83, 89, 10,
];
assert.strictEqual(Prime.hasPrime([1, 2, 3]), true);
assert.strictEqual(Prime.hasPrime(arr), true);

assert.deepStrictEqual(Prime.findPrimes([1, 2, 3]), [2, 3]);
assert.deepStrictEqual(
  Prime.findPrimes(arr),
  [
    97, 5, 7, 11, 2, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89,
  ]
);
