<h1>프로퍼티 어트리뷰트</h1>

**JS 엔진은 프로퍼티를 생성할 때 자동으로 프로퍼티 어트리뷰트를 정의한다.**

***

<h3>1. 프로퍼티 어트리뷰트?</h3>
프로퍼티 어트리뷰트는 프로퍼티의 상태를 나타낸다.

<br/>

프로퍼티의 상태: 
1. [[Value]] 프로퍼티의 값
2. [[Writable]] 값의 갱신 여부
3. [[Enumberalbe]] 열거 가능 여부
4. [[Configurable]] 재정의 가능 여부

> [[내부 슬롯 or 내부 메서드]]

`Object.getOwnPropertyDescriptor()`메서드를 이용해서 간접적으로 프로퍼티 어트리뷰트에 접근할 수 있다.

```js
const fruit = {
    name: 'Apple',
};

console.log(Object.getOwnPropertyDescriptor(fruit, 'name'));
// {value: 'Apple', writable: true, enumerable: true, configurable: true}


fruit.taste = 'Sweet';

cosole.log(Object.getOwnPropertyDescriptor(fruit));

/*
{
    name: {value: 'Apple', writable: true, enumerable: true, configurable: true},
    taste: {value: 'Apple', writable: true, enumerable: true, configurable: true}
}

*/

```

***


<h3>2. 프로퍼티의 종류</h3>

1. 데이터 프로퍼티 (data property):
    - 키와 값으로 구성된 일반적인 프로퍼티
2. 접근자 프로퍼티 (accessor property):
   - '**다른 데이터의 프로퍼티 값을 읽을 때 or 저장할 때 호출되는 접근자 함수**'로 구성된 프로퍼티  
  >
|접근자 프로퍼티의 어트리뷰트|
|-|
[[Get]] : 값을 읽을 떄 호출되는 접근자 함수 
[[Set]] : 값을  저장할 때 호출되는 접근자 함수
[[Enumerable]] : 데이터 프로퍼티와 동일
[[Configurable]] : 데이터 프로퍼티와 동일

```js
const rectangle = {
  width: 0,
  height: 0,

//get, set 키워드로 width, height, area 접근자 프로퍼티 만들기

  get width() {
    return this._width;
  },

  set width(value) {
    this._width = value;
  },

  get height() {
    return this._height;
  },

  set height(value) {
    this._height = value;
  },

  get area() {
    return this._width * this._height;
  }
};

rectangle.width = 10;
rectangle.height = 20;
console.log(rectangle.area); // 출력: 200

```

**😣메소드와 접근자 프로퍼티가 헷갈려요!**

**1. 접근자 프로퍼티(Accessor Property):**
- 객체 속성을 가져오거나 설정할 때 특정한 동작을 수행하는 **객체의 속성**이다.
- get 키워드를 사용하여 값을 가져오는 동작(getter)을 정의할 수 있고, set 키워드를 사용하여 값을 설정하는 동작(setter)을 정의할 수 있다.
- 실제로는 함수 호출처럼 보이지만, 접근자 프로퍼티는 일반적으로 속성에 값을 할당하거나 속성을 읽을 때 추가적인 동작을 수행한다.
- 예시: rectangle.width, rectangle.height


**2. 메소드(Method):**
- 객체의 동작을 나타내는 **함수**이다.
- 객체의 상태를 변경하거나 특정한 계산을 수행한다.
- 호출할 때는 함수 호출 연산자인 괄호(())를 사용한다.
- 예시: rectangle.calculateArea()


***

<h3>3. 프로퍼티 정의 및 객체 변경 금지</h3>

- 프로퍼티 어트리뷰트는 편집이 가능하다. 프로퍼티를 추가할 때 처음부터 프로퍼티 어트리뷰트를 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의할 수 있다.

`Object.defineProperty`메서드를 사용해서 정의한다.
```js
const fruit = {};

Object.defineProperty(fruit, 'name', {
    value: 'Apple',
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(fruit, 'taste', {
    value: 'Melon',
})
```

- 아래의 메서드를 활용해서 객체의 프로퍼를 어느 범위까지 변경하도록 설정한 것인지, 즉 객체의 변경 가능 범위를 지정할 수 있다. 단, 얕은 변경으로 직속 프로퍼티에만 적용된다. (만약 중첩 객체에도 영향을 주고 싶다면 재귀적으로 처리해야 한다.)

구분 | 메서드 | 프로퍼티 추가 | 프로퍼티 삭제 | 프로퍼티 값 읽기 | 프로퍼티 어트리뷰트 재정의
-|-|---|---|---|---|
객체 확장 금지 | Object.preventExtensions | ❌ | ⭕ | ⭕ | ⭕ | ⭕
객체 밀봉 | Object.seal | ❌ |  ❌ | ⭕ | ⭕ |  ❌
객체 동결 | Object.freeze | ❌ |  ❌ | ⭕ | ❌ |  ❌
