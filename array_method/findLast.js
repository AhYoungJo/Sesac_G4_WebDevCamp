// 몇 가지 요소가 있는 배열
const cart = ["사과", "바나나", "배", "사과"];

// 주어진 배열의 마지막 요소를 반환하는 함수
function returnLast(arr) {
  return arr.at(-1);
}

function findLastItem(arr) {
  return arr.findLast((el) => el === "사과");
}

function findItem(arr) {
  return arr.find((el) => el === "사과");
}

cart.push("오렌지");

const item = findLastItem(cart);
console.log(item);
