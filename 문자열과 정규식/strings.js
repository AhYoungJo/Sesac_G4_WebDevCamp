const str = '한글';
const num1 = 7, num2 = 24;
str.padStart(5, ' ');   // '   한글'
str.padEnd(5);   // '한글   '
num1.toString().padStart(2, 0);   // '07'
num2.toString().padStart(2, 0);   // '24'
str.trimStart();   // '한글'
str.trimEnd();   // '한글'
str.startsWith('한');     // true
' 세종'.startsWith(' ');   // true
str.endsWith('글');


//- 지금은 사라진 메서드
//str.substr(-2);
str.substring(str.length - 2);

//- 템플릿 태그 함수,,,
//String.raw
console.log(`c:\name\table`);
/**
 * c:
ame     able
*/

console.log(String.raw`c:\name\table's`);
//c:\name\table

// String.raw({ raw: ["foo", "bar", "baz"], }, 2 + 3, "Java" + "Script",);
console.log("🚀 ~ String.raw: :", String.raw({ raw: ["foo", "bar", "baz"], }, 2 + 3, "Java" + "Script",));


console.log("🚀 ~ 'A'.charCodeAt(0):", 'A'.charCodeAt(0));
console.log("🚀 ~ 'z'.charCodeAt(0):", 'z'.charCodeAt(0));

console.log("🚀 ~ String.fromCharCode(65):", String.fromCharCode(65));

console.log("🚀 ~ String.fromCharCode(90, 122):", String.fromCharCode(90, 122));

console.log("--------------------------------");
console.log('ㅎ'.charCodeAt(0));

for (let i = 12623; i <= 12640; i++) {
    console.log(String.fromCharCode(i));
}

//한글 범위
console.log("🚀 ~ [...'ㄱ힣'].map(a => a.charCodeAt(0)):", [...'ㄱ힣'].map(a => a.charCodeAt(0)));
