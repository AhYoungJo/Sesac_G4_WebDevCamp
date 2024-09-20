const a = Array.from({ length: 5 }, (_, i) => i + 1);

// console.log(a);

const b = [...a.keys()];
const c = [...a.values()];

console.log(b);
console.log(c);

//객체로 배열 만드는 법
//Array.from({ 0: 1, 1: 2, id: 3, length: 3 });
//Array.from({...array})만 하면 []빈 배열만 생성된다. length값이 없기 때문에

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [hong, kim, lee, park];

const find3 = a => a.id === 3;
const idxId2 = users.findIndex(find3);

// Try this: id를 부여해서 실행하는 findId 함수를 작성하시오.
const findId = (id) => a.id === id;
const idxId11 = users.findLastIndex(findId(1));
//id => hong.id === 1
console.log('🚀  idxId11:', idxId11);
