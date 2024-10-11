const assert = require('assert');

s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];
const 전체초성 = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';

const get초성 = char => {
    //한글만 초성 찾고
    const u_char = char.charCodeAt(0);
    if (u_char >= 44032 && u_char <= 55203) {
        return 전체초성[Math.floor((u_char - 44032) / 28 / 21)];
    }
    //한글이 아닌 값(숫자, 특수문자 etc..)은 그대로 반환
    return char;
};

const make초성패턴 = (str, length) => {
    return str
        ? Array.from(str)
              .slice(0, length)
              .map(char => get초성(char))
              .join('')
        : null;
};

const searchByKoreanInitialSound = (strs, pattern) => {
    return strs.filter(str => {
        const [first, second] = str.split(' ');

        const first_Pattern = make초성패턴(first, pattern.length);
        const second_Pattern = make초성패턴(second, pattern.length);

        return first_Pattern === pattern || second_Pattern === pattern;
    });
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

// 리팩토링(전)
// const searchByKoreanInitialSound = (strs, pattern) => {
//     const 전체초성 = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';

//     let searched = [];
//     strs.forEach(str => {
//         const [first, second] = str.split(' ');
//         let first_초성 = '';
//         let second_초성 = '';
//         for (let i = 0; i < pattern.length; i++) {
//             first_패턴 +=
//                 전체초성[
//                     Math.floor(
//                         (String(first?.[i]).charCodeAt(0) - 44032) / 28 / 21,
//                     )
//                 ] ?? first?.[i];
//             second_패턴 +=
//                 전체초성[
//                     Math.floor(
//                         (String(second?.[i]).charCodeAt(0) - 44032) / 28 / 21,
//                     )
//                 ] ?? second?.[i];
//         }

//         if (first_패턴 === pattern || second_패턴 === pattern)
//             searched.push(str);
//     });
//     return searched;
// };
