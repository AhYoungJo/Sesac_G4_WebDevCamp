console.log(...[1, 2, 3])
// 1, 2, 3

let x = ...[1,2,3] // 틀린 문법 🚫  syntaxError
값이 아니라 '값들의 목록'
== 값이 아니다.

쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용할 수 있다.

- 함수 호출문의 인수 목록
- 배열 리터럴의 요소 목록 => [1, 2, 3] => ...[1, 2, 3]
- 객체 리터럴의 프로퍼티 목록 

1. 함수 호출문의 인수 목록

가변 인자 함수 (예시) <- 개별적인 값들의 목록을 만든 후, 함수의 인수로 전달해야 하는 함수
매개변수의 개수가 정해져있지 않으니까.
1, 2
4, 5, 6
234234234234
Math.max() 메서드
Math.max(1) // 1
Math.max(1, 2) // 2
Math.max(1, 2, 3) // 3

Math.max([1, 2, 3])

데이터를 개별적으로 보내주기엔 어렵단말이야. 왜냐하면, 데이터 양이 엄처처처청 많아.
걔를 집합으로 묶어서 전달을 하는 편.
[], {}

Math.max(...[1, 2, 3]) === Math.max(1, 2, 3)

Math.max.apply(null, [1, 2, 3])


- 레스트 파라미터: 함수에 전달된 인수들의 목록을 배열로 전달받기 위해 매개변수 이름 앞에 ...을 붙이는 것
function foo(...rest) {
    console.lkog(rest) // 1, 2, 3 => [1, 2, 3]
}

2. 배열 리터럴 내부에서 사용하는 경우
- 훨씬 기존 방식보다 간결 & 가독성 좋다.

2-1. concat (합칠 때)

var arr = [1, 2].concat([3, 4]) // [1, 2, 3, 4]
const arr = [...[1, 2], ...[3, 4]]

let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = [...arr1, ...arr2]

2-2. 중간부터 요소를 추가 or 삭제할 때

기존: splice메서드를 사용했다.
현재: ...arr2

```js
let arr1 = [1, 4]
arr1.splice(1, 0, arr2) //arr1 = [1, [2, 3], 4]
Array.prototype.splice.apply(arr1, [1, 0].concat(arr2))
// [1, 2, 3, 4]

arr.splice(1, 0, ...arr2);
// [1, 2, 3, 4]
```

2-3. 배열을 복사할 때
기존: slice 메서드를 사용했다.
```js
var origin = [1, 2]
//과거
var copy = origin.slice()
//현재
const copy2 = [...origin];
```

현재 방법으로 사용해서 복사를 할 경우 '얕은 복사본을 생성한다'

```js
const origin = [1, 2, [2, [5, 6], 3], 4, 5]
const obj = {
    
}
const copy = [...origin]

copy.push(6)
//origin의 값이 변경될까? 여기에 영향을 줄까?
//origin에 영향을 주진 않아.
copy[2].push(6) // 영향을 줄까? Yes
```

2-4. 이터러블을 배열로 변환할 때

```js
function sum() {
    Array.prototype.slice.call(arguments)
    return args.reduce(....)
}
```
스프레드 문법은 오로지 '이러터블이면서 유사 배열 객체'
'이터러블이 되어야 한다'

이터러블이 아닌 유사 배열 객체에는 쓸 수 없어.

3. 객체 리터럴 내부에서 사용하는 경우
스프레드 프로퍼티 제안 => 스프레드 프로퍼티를 이렇게도 사용해라....

"일반 객체를 대상으로도 스프레드 문법의 사용을 허용한다."

```js
//객체를 정말 빠르게 복사할 수 있어. (단, 얕은 복사)
const obj = {x: 1, y: 2}
const copy = {...obj}

//객체 병합도 엄청 간단하다.
const merged = {x: 1, y:2, ...{obj}}

//객체의 특정 프로퍼티를 변경할 때, 또는 추가할 때
const changed = Object.assign({}, {x:1, y:2}, {y: 100}) //changed = {x: 1, y: 100}
const changed = {...{x: 1, y:2}, ... {y: 10, z: 3}} // {x: 1, y: 10, z: 3}
```

const obj = {
    x: 1,
    x: 2,
    x: 3
}

obj.x = 3

