// 몇 가지 요소가 있는 배열
const cart = ["사과", "바나나", "배"];

// 주어진 배열의 마지막 요소를 반환하는 함수
function returnLast(arr) {
  return arr.at(-1);
}

// 'cart' 배열에서 마지막 요소를 가져옴
const item1 = returnLast(cart);
console.log(item1); // '배'

// 'cart'배열에 요소를 추가
cart.push("오렌지");
const item2 = returnLast(cart);
console.log(item2); // '오렌지'

/**
 * 인덱스가 음수가 아니라면, at() 메서드는 대괄호 표기법과 동일합니다. 예를 들어, array[0]과 array.at(0)은 모두 배열의 첫 번째 항목을 반환합니다. 그러나 배열의 끝에서부터 요소를 계산할 땐 Python이나 R처럼 array[-1]을 사용할 수 없습니다. 대괄호 안의 모든 값은 문자 그대로 문자열 속성으로 처리되므로 array["-1"]을 읽게 됩니다. 이는 배열 인덱스가 아닌 일반 문자열 속성입니다.
 */
