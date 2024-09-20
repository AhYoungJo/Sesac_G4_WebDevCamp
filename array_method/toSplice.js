const months = ["Jan", "Mar", "Apr", "May"];

// 인덱스 1에 요소 추가
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// 인덱스 2부터 2개의 요소 삭제
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// 인덱스 1의 한 요소를 두 개의 새로운 요소로 교체
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// 원래 배열은 수정되지 않음
console.log(months); // ["Jan", "Mar", "Apr", "May"]

//toSpliced()메서드는 항상 밀집 배열을 생성합니다.
const arr = [1, , 3, 4, , 6];
console.log(arr.toSpliced(1, 2)); // [1, 4, undefined, 6]

const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
Array.prototype.toSpliced.call(arrayLike, 0, 1, 2, 3);
//[2, 3, undefined, 4]

/**
 * 0: 시작 인덱스입니다. 0부터 작업을 시작합니다.
 * 1: 삭제할 요소의 수입니다. 인덱스 0의 요소 하나를 삭제합니다.
 * 2, 3: 새로 삽입할 요소들입니다. 인덱스 0에 2와 3을 삽입합니다.
 */

// 동작
// 1. 0번째 요소인 5가 삭제됩니다.
// 2. 그 자리에 2와 3이 삽입됩니다.
// 3. 원래 2번째에 있던 값 4는 그대로 유지됩니다.
// 4. 1번째에는 값이 없었기 때문에 undefined가 들어갑니다.
