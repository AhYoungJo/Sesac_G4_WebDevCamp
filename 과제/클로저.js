function currentCount() {
  let currCount = 0; // private variable
  return {
    connect() {
      currCount += 1;
    },
    disconnect() {
      currCount -= 1;
    },
    getCount() {
      return currCount;
    }, // getter method
    get count() {
      return currCount;
    }, // readonly getter (accessor)
  };
}

const counter = currentCount();

counter.disconnect();
console.log("🚀 ~ counter.currCount:", counter.getCount());

//-----------------------

const assert = require("assert");

function makeArray(n) {
  if (n <= 0) return [];
  //   if (n <= 1) return [1];
  return [...makeArray(n - 1), n];
}

// function makeReverseArray(n) {}

assert.deepStrictEqual(makeArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// assert.deepStrictEqual(makeReverseArray(5), [5, 4, 3, 2, 1]);
