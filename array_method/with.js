//비엄격모드에서만 사용 가능한 with는 지정한 객체의 속성들을 스코프 안에서 직접 참조할 수 있게 해주는 구문으로 Array.prototype.with와는 아예 다른 개념

//배열의 특정 인덱스 값을 교체하여 새로운 배열을 반환하는 메서드
const arr = [1, 2, 3, 4, 5];

//하나의 요소만 변경한채로 새로운 배열을 만들기
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

//배열 메서드 연속하여 연결하기
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]

//희소 배열에서 with() 사용하기
const arr2 = [1, , 3, 4, , 6];
console.log(arr2.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]

const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // length가 3이기 때문에 with()메서드는 이를 무시합니다.
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]
