//숫자 타입이 아닐 때, 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다.

function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// Expected output: 28.695307297889173

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: NaN
