const arr = [1, 2, 3, 4, 5];

// ex1) [2,3]을 추출
console.log("🚀 ~ arr.slice(1, 3):", arr.slice(1, 3));


// ex2) [3]부터 모두 다 추출
console.log("🚀 ~ arr.slice(2, arr.length):", arr.slice(2, arr.length));

// ex3) [2,3,4] 제거하기
console.log("🚀 ~ arr.toSpliced(1, 3):", arr.toSpliced(1, 3));
// console.log("🚀 ~ arr.splice(1, 3):", arr.splice(1, 3));
// console.log("🚀 ~ arr.pop():", arr.pop());
// console.log(arr);

// ex4) 복원하기
console.log("🚀 ~ arr.toSpliced(...arr):", arr.toSpliced(...arr));

// ex5) [3] 부터 끝까지 제거하기
console.log("🚀 ~ arr.toSpliced(2, arr.length):", arr.toSpliced(2, arr.length));

// ex6) 복원하기
console.log("🚀 ~ arr.toSpliced(2, arr.length, 3, 4, 5):", arr.toSpliced(2, arr.length, 3, 4, 5));

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// - 방법1) 3부터 모두 지우고 'X', 'Y', 'Z', 4, 5 추가
// // - 방법2) 3만 지우고 'X', 'Y', 'Z' 추가
// console.log("🚀 ~ arr.with(3, 'X', 'Y'):", arr.with(3, () => ('X', 'Y')));
console.log("🚀 ~ arr.toSpliced(2, 1, 'X', 'Y', 'Z'):", arr.toSpliced(2, 1, ..."XYZ"));

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
console.log("🚀 ~ 위 7번 문제를 splice를 사용하지 말고:", [...arr.slice(0, 2), ..."XYZ", ...arr.slice(3)]);
