//1.다음 코드를 올바르게 수정하시오. (1초 후에 강아지의 이름을 출력)

// globalThis.showMyname = function () {
//   console.log(`My name is ${globalThis.name}.`);
// };
// globalThis.name = "아영";

const dog = {
  name: "Maxx",
  showMyName() {
    //bind하기 전: showMyName의 this => Timeout
    //bind 후: showMyName의 this => dog
    console.log("showMyName this>>", this);
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    // setTimeout(function () {
    //   console.log("12=", this); // Timeout
    // }, 1000);

    //Q.this는 Tiemout객체를 가리킬텐데 showMyName 함수를 호출할 수 있는거지?
    //setTimeout(this.showMyName, 1000);

    //bind(this) 추가
    setTimeout(this.showMyName.bind(this), 1000);

    //화살표 함수 버전:
    //setTimeout(() => this.showMyName(), 1000); //화살표 함수의 this는 lexcial scope, setTimeout안의 화살표 함수의 정의 시점은 dog 메서드 'what'sYourName'가 호출될 때, so 화살표 함수의 'this'는 'what'sYourName'가 정의된 환경 'dog'를 가리킴
  },
};

dog.whatsYourName();

//----------------------------------------------------------------------
//2-1.함수를 한번만 실행하게 하는 once 함수를 작성하시오.
const once = (callback) => {
  let eventOn = true;
  return (x, y) => {
    return eventOn ? ((eventOn = true), callback(x, y)) : "undefined";
  };
};
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

// console.log(fn(1, 6));
// console.log(fn(8, 10));

//2-2. 매 n초 후 다시 한번 실행할 수 있도록 개선해보세요.
const onceInterval = (callback, resetDelay = 10000) => {
  let eventOn = true;

  return function onceEvent(x, y) {
    if (eventOn) {
      eventOn = false;
      callback(x, y);

      setTimeout(() => {
        eventOn = true;
      }, resetDelay);
    }
  };
};

const fnn = onceInterval((x, y) =>
  console.log(`금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`)
);

// fnn(1, 6);
// setTimeout(() => fnn(3, 5), 9000);
// setTimeout(() => fnn(5, 7), 2000);
// setTimeout(() => fnn(8, 9), 11000);

//----------------------------------------------------------------------
//3. template 함수를 작성하세요.

const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);

const template = (fn) => {
  return (...args) => (before(), fn(...args), after());
};

const temp = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행

// temp("sico", "hello");
// temp2(1, "sico", "sico@gmail.com", 5);

const Dog = function (name) {
  console.log(this, new.target, this instanceof Dog);
  this.name = name;
  this.bark = function Barking() {
    console.log(
      "bark=",
      new.target,
      this.name,
      name,
      this.bark instanceof Barking
    );
    return ["bark=", new.target, this.name, name];
  };
  this.bark2 = () => console.log("bark2=", new.target, this.name, name);
};

const dog2 = Dog("Doggy");
const lucy = new Dog("Lucy");
lucy.bark(); // ?

//The new.target inside bark will now be the bark function itself.
const newLucy = new lucy.bark(); // ?
console.log("newLucy:", newLucy);

lucy.bark2(); // ?
console.log("type=", typeof lucy);

// function getDiffMillis(dt1, dt2) {
//   // new Date 객체의 geTime 메소드만 구조분해할당으로 추출하려고 시도
//   //근데 에러 why?
//   //The getTime method is not bound to any object when you destructure it, so it’s trying to execute without a valid this reference. In JavaScript, methods like getTime expect to be called on an object (in this case, a Date object), and when you call it like getTime1(), it doesn't know which object to reference as this.
//   //Date라는 객체의 메서드인데, 메서드만 따로 추출하면 해당 메서드가 어떤 객체(인스턴스)를 참조해야 할지 알 수가 없다.
//   //따라서 new Date(dt1).getTime()을 직접 호출한 값을 할당하던지,
//   const getTime1 = new Date(dt1).getTime();
//   const getTime2 = new Date(dt2).getTime();
//   return geTime1 + getTime2;
//   //아니면 getTime에 new Date(dt1)의 인스턴스를 bind시켜주던지,
//   const getTime1 = new Date(dt1).getTime.bind(new Date(dt1));
//   const getTime2 = new Date(dt2).getTime.bind(new Date(dt2));
//   return getTime1() + getTime2();
//   //또는 new Date(dt1)의 인스턴스를 어딘가 저장해둔 후 해당 인스턴스로 호출을 해야 한다.
//   const ins1 = new Date(dt1);
//   const ins2 = new Date(dt1);
//   return ins1.getTime() + ins2.getTime();
// }
// // const date = new Date("2021-01-02")
// // const timeInMillis = date.getTime();
// console.log("🚀 ~ getDiffMillis:", getDiffMillis("2021-01-01", "2021-01-02"));

// class Dog2 {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     // return `getName> ${this.name}`; //error
//     return `getName> ${this}`; ///undefined
//   }

//   fn() {
//     // return `fn> ${this.name}`; //error
//     return `fn> ${this}`; //undefined
//   }

//   static sfn() {
//     // return `sfn> ${this.name}`; //error
//     return `sfn> ${this}`; ///undefined
//   }
// }
// const lucy2 = new Dog2("Lucy");
// const { sfn } = Dog2;
// const { name: aa, fn: fnnn, getName } = lucy2;

// console.log(aa, sfn(), fnnn(), getName()); // ?
