const arr = [1, 2, 3, 2, 3];
arr.indexOf(3); // 2
arr.indexOf(5); // -1
arr.indexOf(3, 3); // 4
arr.lastIndexOf(3); // 4
arr.lastIndexOf(3, -2); // 2

//findIndex, findLastIndex는 콜백함수를 인수로 전달, 더 상세한 검색이 가능
const orr = [{ id: 1 }, { id: 2 }, { id: 1 }];
orr.findIndex((a, i) => a.id === 1);

// ES2023 ~
orr.findLastIndex((a, i) => a.id === 1);

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [hong, kim, lee, park];
const findId = (id) => (obj) => obj.id === id;
const idxId11 = users.findLastIndex(findId(1));
const idxId3 = users.findLastIndex(findId(3));

console.log(idxId11);
console.log(idxId3);
