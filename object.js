const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  12345n: 2, // 12345
  [123456n]: 3, // 123456
  ["123457n"]: 3, // "1234567n"
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

console.log(Object.keys(user), Object.keys(user).length);
console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length);
user.addr = "Seoul";
console.log("addr" in user, user.hasOwnProperty("addr"));
console.log("Ref.has>", Reflect.has(user, "addr"));
console.log(user["1234567"]);
console.log(user.true);

//Object.create vs Reflect.constructor-------------------------------------
// 1. Person 생성자 함수
function Person(name) {
  this.name = name;
  // 생성자 내부에서 greet 메서드 정의
  // this.greet = function () {
  //   return `Hello, my name is ${this.name}`;
  // };
}

// 생성자 외부에서 greet 메서드 정의하는 법
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const john = Reflect.construct(Person, ["John"]);
console.log(john.greet()); // "Hello, my name is John"

const me = Object.create(Person.prototype);
me.name = "John";
console.log(me.greet()); // "Hello, my name is John"

// 프로토타입 객체
const person = {
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

const my = Object.create(person);
my.name = "John";

console.log(me.greet()); // "Hello, my name is John"

//**Object.create()**는 주로 프로토타입 상속을 통해 객체를 생성하고, 특정 객체를 상속하고자 할 때 유용합니다.
// **Reflect.construct()**는 생성자 함수를 호출하여 동적으로 객체 인스턴스를 생성할 수 있으며, 메타프로그래밍에서 더 자주 사용됩니다.

// Object.create는 prototype에!!
const u1 = Object.assign({}, user);
const u2 = { ...user };
const u3 = new Object(user);
const u4 = Object.create(user);
// const u4 = Object.create({}, { p: { value: 42 }, q: { value: 55 } });  --> 그냥 빈 객체가 만들어짐
console.log("u1=", user === u1);
console.log("u2=", user === u2);
console.log("u3=", user === u3); // true!!
console.log("u4=", user === u4);

console.log("u4.proto=", Object.getPrototypeOf(u4));
