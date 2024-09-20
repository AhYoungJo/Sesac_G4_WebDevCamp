// const sum = arr.reduce((s, a) => s += a, 0);
// const sum = arr.reduce((s, a) => s += a);
// const sum = arr.reduce((s, a) => s + a);

const users = [{ id: 1, name: 'Hong' }, { id: 20, name: 'Kim' }, { id: 3, name: 'Lee' }];

users.reduce((s, user) => `${s} ${user.name}`, '');

//ex) objs의 각 원소를 reduce를 이용하여 합쳐보세요.;
const objs = [{ id: 1 }, { name: 'Hong' }, { addr: 'Seoul', id: 5 }];

//초기값을 안 주면, 첫 번째 요소가 초기값으로 들어간다
const obj = objs.reduce((acc, obj) => {
    return ({ ...acc, ...obj });
});
console.log("🚀 ~ obj:", obj);