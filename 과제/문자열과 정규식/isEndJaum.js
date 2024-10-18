const assert = require('assert');

//종성 인덱스 구하기 (종성의 index가 존재한다 => U_lastChar는 종성이다.)
//1.(초성 인덱스 * 21 + 중성 인덱스) * 28 + 종성 인덱스 + 44032 = 검색하고자하는 한글의 유니코드 (예: 48124 - 'ㄴ')
//2.(초성 인덱스 * 21 + 중성 인덱스) * 28 + 종성 인덱스 = 4092
//3.(초성 인덱스 * 21 + 중성 인덱스) * 28) % 28 + 종성 인덱스 = 4092 % 28

const isJongSeong = char => {
    return (char - 44032) % 28 > 0;
};

const isEndJaum = str => {
    const lastChar = str[str.length - 1].charCodeAt(0);

    if (isJongSeong(lastChar)) return true;
    //초성이거나, 한글이 아닐 때 적용하는 매칭 패턴
    const regExp = /[ㄱ-ㅎmnr136780]$/;
    return regExp.test(str);
};

assert.deepStrictEqual(isEndJaum('강원도'), false);
assert.deepStrictEqual(isEndJaum('바라당'), true);
assert.deepStrictEqual(isEndJaum('ㅜㅜ'), false);
assert.deepStrictEqual(isEndJaum('케잌'), true);
assert.deepStrictEqual(isEndJaum('점수 A'), false);
assert.deepStrictEqual(isEndJaum('24'), false);
assert.deepStrictEqual(isEndJaum('ㅇ'), true);

module.exports = isEndJaum;
