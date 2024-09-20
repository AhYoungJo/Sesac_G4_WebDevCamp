const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false

//const sym = new Symbol(); // TypeError

const sym4 = Symbol("foo");
typeof sym4; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"

Symbol.for("foo"); // 새로운 전역 심볼을 생성
Symbol.for("foo"); // 이미 생성된 심볼을 반환

// 동일한 전역 심볼이지만 지역적으로는 그렇지 않음
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// 키는 설명으로 사용되기도 함
var sym5 = Symbol.for("mario");
sym5.toString(); // "Symbol(mario)"

//----------------------------
//Symbol.keyFor() 정적 메서드는 주어진 심볼에 해당하는 공유 심볼의 키를 전역 심볼 레지스트리에서 검색합니다.
const globalSym = Symbol.for("foo"); // 새로운 전역 심볼 생성
Symbol.keyFor(globalSym); // "foo"

const localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// 잘 알려진 심볼은 글로벌 심볼 레지스트리에 등록되지 않은 심볼입니다.
Symbol.keyFor(Symbol.iterator); // undefined
