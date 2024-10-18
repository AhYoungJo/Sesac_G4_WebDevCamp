const assert = require('assert');

const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];
const 범위 = {
    ㄱ: '가-깋',
    ㄲ: '까-낗',
    ㄴ: '나-닣',
    ㄷ: '다-딯',
    ㄸ: '따-띻',
    ㄹ: '라-맇',
    ㅁ: '마-밓',
    ㅂ: '바-빟',
    ㅃ: '빠-삫',
    ㅅ: '사-싷',
    ㅆ: '싸-앃',
    ㅇ: '아-잏',
    ㅈ: '자-짛',
    ㅉ: '짜-찧',
    ㅊ: '차-칳',
    ㅋ: '카-킿',
    ㅌ: '타-팋',
    ㅍ: '파-핗',
    ㅎ: '하-힣',
};

const isHanGel = char => {
    const u_char = char.charCodeAt(0);
    if (u_char >= '가'.charCodeAt(0) && u_char <= '힣'.charCodeAt(0))
        return true;
    if (u_char >= 'ㄱ'.charCodeAt(0) && u_char <= 'ㅎ'.charCodeAt(0))
        return true;
    return false;
};

const searchByKoreanInitialSound = (strs, pattern) => {
    // 패턴의 각 초성에 해당하는 범위로 정규식 생성
    //초성이면 초성 검색 범위로 지정해줘야 함 
    const reg = new RegExp(
        `${[...pattern]
            .map(char => (isHanGel(char) ? `[${범위[char]}]` : char))
            .join('')}`,
    );

    return strs.filter(str => reg.test(str));
};

assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅇ'), [
    '강원도 고성군',
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅅㄱ'), [
    '강원도 고성군',
    '고성군 토성면',
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅌㅅㅁ'), [
    '고성군 토성면',
    '토성면 북면',
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅂㅁ'), [
    '토성면 북면',
    '북면',
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅍㅁ'), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱ1ㅅ'), ['김1수']);
