const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 10, 21, 2]

console.log(["a", "c", , "b"].toSorted()); // ['a', 'b', 'c', undefined]
console.log([, undefined, "a", "b"].toSorted()); // ["a", "b", undefined, undefined]

const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
  3: 3, // length가 3이기 때문에 toSorted()는 이를 무시합니다
};
console.log(Array.prototype.toSorted.call(arrayLike));
// toSorted() 메서드는this의 length 속성을 읽습니다 (toReversed, to Splcie도 똑같음)
// [4, 5, undefined]
//[2, 1, 0]

let a6 = ['Kim', 'Lee', 'Hong'];
// a6.sort(); // a6 = ['Hong', 'Kim', 'Lee']
// a6.sort((a, b) => b - a); // ?
// a6.sort((a, b) => b > a); // ?

//-1, 0, 1 이 수직선에 있다고 생각하기
a6.sort((a, b) => a < b ? 1 : -1);
console.log("🚀 ~ a6:", a6);
// a6.sort((a, b) => b > a ? 1 : (b < a ? -1 : 0));
