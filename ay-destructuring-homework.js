//1. 객체 User의 id와 name 출력하기
const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

// function consoleUser(user) {
//   const { id, name } = user;
//   console.log(id, name);
// }

// function consoleUser({ id, name }) {
//   console.log(id, name);
// }

const consoleUser = ({ id, name }) => {
  console.log("🚀 ~ consoleUser ~ id, name:", id, name);
};

consoleUser(hong); // 1 Hong
consoleUser(lee); // 2 Lee

//2. userInfo에 passwd 제외한 나머지 프로퍼티 받아서 출력하기
const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { passwd, ...userInfo } = user;
console.log("🚀 ~ userInfo:", userInfo); // { id: 1, name: 'Hong', addr: 'Seoul' }

//3. id를 id1, id2, id3로 할당하기
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
// const [[{ id: id1 }], [...[{ id: id2 }, { id: id3 }]]] = arr;
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
let [[{ id: id4 }], [id6, id7]] = arr;

let {
  0: {
    0: { id: id8 },
  },
  1: {
    0: { id: id9 },
    1: { id: id10 },
  },
} = arr;
console.log(id1, id2, id3);
console.log("🚀 ~ id1:", id1); //1
console.log("🚀 ~ id2:", id2); //2
console.log("🚀 ~ id3:", id3); //3
// console.log("🚀 ~ id6:", id6); //3
// console.log("🚀 ~ id7:", id7); //3
console.log("🚀 ~ id8:", id8);
console.log("🚀 ~ id9:", id9);
console.log("🚀 ~ id10:", id10);

//4. key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수 작성하기
const user2 = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial(k) {
  const { [k]: val } = user2;
  const [, ...restStrings] = [...val];
  return restStrings.join("");
}
console.log(getValueExceptInitial("name")); // 'ong'
console.log(getValueExceptInitial("passwd")); // 'yz'
console.log(getValueExceptInitial("addr")); // 'eoul'

const obj = { id: 1, name: "John" };
const { id: id5, name } = obj;

//객체 구조 분해 할당에서 다른 변수에 속성값을 넣는 건 가능하지만 객체의 키 이름은 변경할 수 없음
console.log(id5); // 1
console.log(name); // John
