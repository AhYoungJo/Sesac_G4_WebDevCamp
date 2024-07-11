// //객체 리터럴 방식으로 생성한 객체
const circle = {
    radius: 5,
    getDiameter(){
        //메서드는 자신이 속한 객체를 가리키는 식별자를 재귀적으로 참조할 수 있다.
        //재귀? 
        return 2 * circle.radius;
    }
}
console.log('객체 리터럴은 내부에서 자기 자신을 참조할 수가 있다. circle.getDiameter(): ', circle.getDiameter());


/**
 * 어떻게 가능한가?
 * 객체 리터럴의 평가 실행 -> 객체 생성 -> circle 변수에 할당 -> getDiameter함수 호출
 * 
 * 함수 호출 시점에 이미 객체가 생성되어 circle 변수에 할당되어 있기 때문에
 */

/** 그런데 이렇게 재귀적으로 참조하는 것은 바람직하지 않음.
 * why? 생성자 함수로 객체 생성하는 방식을 알아보자
 */

///////////////////////////////////////////////////////
// //생성자 함수로 생성한 객체 / 얘는 인스턴스로 객체를 생성
function Circle(radius){
    //이때는 생성할 인스턴스를 가리키는 식별자를 알 수 없음 -> 참조 불가능
    ???.radius = radius;
}

// //생성자 함수로 객체를 생성할 때는, 생성자 함수 작성 > new 연산자로 인스턴스 생성 순서로 객체가 만들어지기 때문
const circle1 = new Circle(2)


//그럼 메서드를 어떻게 추가하지?
//자바스크립트: "특수한 식별자 this를 제공해줄게"
function Circle(radius) {
    this.radius = radius;
}
// //인스턴스 생성 전이라 참조할 값이 없어 undefined
console.log(Circle.radius)

// //인스턴스 생성한 뒤 그제서야 식별자 circle2를 탐조해서 값을 제대로 출력
const circle2 = new Circle(2)
console.log(circle2.radius)



////////////////////////////////////////////////////////////////////////
// this는 어떻게 호출하느냐에 따라 가리키는 값이 달라짐
// 즉, 호출 방식에 따라 this 바인딩이 동적으로 결정됨.
// 바인딩? 식별자와 값을 연결하는 과정을 의미
// 보통 클래스 기반 언어에서 this는 자신이 생성할 인스턴스를 가리키는데, JS에선 이렇게 동적으로 결정됨
/** 1. 객체 리터럴에서 this: 호출한 자기자신 
 *  2. 생성자 함수에서 thiis: 생성할 인스턴스
*/
//3. 전역: 브라우저에선 window, node.js에서는 global
console.log('this: ', this)

//4. 일반 함수: 브라우저에선 window, node.js에서는 global
function square(number){
    console.log(this)
    return number * number;
}
square(2);


//use strict 모드를 적용하면 undefined
function square(number){
    "use strict"; 
    console.log(this)
    return number * number;
}
square(2);

//5. 콜백 함수:
//(1) 콜백함수를 일반 함수처럼 호출하면 this에 '전역 객체'가 바인딩 됨
var value = 1;
const obj = {
    value: 100,
    foo(){
        console.log("foos's this: ", this);
        setTimeout(function(){
            console.log("callback's this: ", this);
            console.log("callback's value: ", this.value);
        }, 100);
    }
}
obj.foo();

// obj 객체의 this와 콜백 함수의 this를 매치 시키는 방법 중...
//첫 번째 방법: 명시적으로 this를 다른 변수에 할당해서 사용하기
var value1 = 1;
const obj1 = {
    value: 100,
    foo(){
        const that = this;
        setTimeout(function(){
            console.log("callback's value: ", that.value);
        }, 100);
    }
}
obj1.foo();

//두 번째 방법: bind 메서드 사용하기
var value2 = 1;
const obj2 = {
    value: 100,
    foo(){
        setTimeout(function(){
            console.log("callback's value: ", this.value);
        }.bind(this), 100);
    }
}
obj2.foo();

//세 번째 방법: 콜백함수를 화살표 함수로 작성하기
var value3 = 1;
const obj3 = {
    value: 100,
    foo(){
        setTimeout(() => console.log("callback's value: ", this.value), 100);
    }
}
obj3.foo();

//this는 보통 자기 참조를 하기 위해 사용하는 것이기 때문에, 
//객체의 메서드나 생성자 함수 내부에서만 사용하는 것이 좋다.



//우리가 아는 메서드는 객체의 프로퍼티에 바인딩된 함수 객체
//즉, 객체의 프로퍼티와 함수 객체가 각각의 메모리에 존재하고, 서로 연결되어 있는 것
//이 함수 객체는 독립적인 것으로 간주.
//그래서, 이 함수 객체를 다른 객체의 프로퍼티에 할당하는 것도 가능하고, 일반 변수에 할당하는 것도 가능
const person = {
    name: 'Lee',
    getName(){
        return this.name;
    }
}
console.log(person.getName());

const anotherPerson = {
    name: 'Kim',
} 
anotherPerson.getName = person.getName;
console.log(anotherPerson.getName());

const getName = person.getName;
console.log("const getName = ", getName(), "(비어있음)")
//일반 함수로 호출됐기 때문에 this가 가리키는 값은 전역 객체인 window이다.
console.log("getName() === window.name는 사실일까? ", getName() === window.name)

//메서드의 this는 이 메서드의 원래 소유자가 누구인지보단, 
//메서드를 호출한 대상이 누구인가와 관련 있다~!




