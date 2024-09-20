function makeArray(n) {
  if (n <= 1) return [1];
  return [...makeArray(n - 1), n];
}

function makeReverseArray(n) {
  if (n <= 1) {
    return [1];
  }

  return [n, ...makeReverseArray(n - 1)];
}

//Loop--------------------------------------
function fibonacciLoop(n) {
  if (n <= 1) return n;
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
const FIBONACCI_LOOP = fibonacciLoop(30);
console.log("🚀 ~ FIBONACCI_LOOP:", FIBONACCI_LOOP); //🚀 ~ FIBONACCI_LOOP: 832040

//순수재귀--------------------------------------
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
const FIBONACCI_RECURSIVE = fibonacciRecursive(30);
console.log("🚀 ~ FIBONACCI_RECURSIVE:", FIBONACCI_RECURSIVE); //🚀 ~ FIBONACCI_RECURSIVE: 832040

//메모이제이션1(함수 선언문)--------------------------------------
// function memo(fn) {
//   const memory = {};
//   return function B(n) {
//     return memory[n] || (memory[n] = fn(n));
//   };
// }

// const memoizedFibo = memo(function (p) {
//   if (p <= 1) return p;
//   return memoizedFibo(p - 1) + memoizedFibo(p - 2);
// });

//메모이제이션2(화살표 함수)--------------------------------------
const memo = (fn) => {
  const memory = {};
  return (n) => {
    if (n in memory) {
      return memory[n];
    } else {
      return (memory[n] = fn(n));
    }
  };
};
//메모이제이션을 할 경우 F1이 무조건 먼저 실행되어야 함.
//const F1 = memoizedFibo(p - 1); 하나로 메모가 쭉 되니까.
const memoizedFibo = memo((p) => {
  if (p <= 1) return p;

  const F1 = memoizedFibo(p - 1);
  const F2 = memoizedFibo(p - 2);
  return F1 + F2;
});

const MEMOIZED_FIBO = memoizedFibo(30);

console.log("🚀 ~ MEMOIZED_FIBO:", MEMOIZED_FIBO); //🚀 ~ MEMOIZED_FIBO: 832040

function solution(brown, yellow) {
  //brown / 2 : 홀수면 -1, 짝수면 일단 고
  // 4*2 = 8, 2
  // 3*2 = 6, 4

  // 1 / 4 .. 소수가 나온다? yellow가 더 작거나 딱 맞아 떨어지지 않거나.

  const isEven = (brown / 2) % 2 === 0;
  let bWidth = isEven ? brown / 2 : brown / 2 - 1;
  let innerYWidth = bWidth - 2;
  let yHeight = yellow % innerYWidth === 0 ? yellow / innerYWidth : 0;

  // 6, 4
  function count(bWidth, innerYWidth) {
    if (innerYWidth <= 0) return [bWidth, yHeight];
    if (yellow % innerYWidth === 0) {
      yHeight = yellow / innerYWidth;
      if (bWidth * (yHeight + 2) - yellow === brown) {
        return [bWidth, yHeight + 2];
      }
    }

    return count(bWidth - 1, bWidth - 3);
  }

  return count(bWidth, innerYWidth);
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
