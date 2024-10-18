//전역에서 await 사용 가능 (2020부터)
// const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
// const user1 = await res.json();
// console.log("🚀 ~ user1:", user1);



function fetching() {
    fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()).then(user1 => console.log('user1s=', user1));
}

// fetching();

async function fetching2() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user1 = await res.json();
    console.log("🚀 ~ fetching2 ~ user1:", user1);
}

// fetching2();


// const user2 = await fetch('https://jsonplaceholder.typicode.com/users/1').thㄴen(res => res.json()).then(x => console.log('x=', x));


const afterTime = (sec) = new Promise((resolve) => {
    setTimeout(resolve, sec * 1000, sec);
});
//async가 능사는 아니다. 서로 연관이 없는 비동기라면 Promise all을 쓰는 것이 더 적합하기 때문이다.
// console.log(await Promise.all([afterTime(1), afterTime(2), afterTime(3)]));


//map에도 async를 걸어주면 Promise의 상태가 우선 출력되고, 그 후 1, 2, 3이 출력된다. 왜? async가 Promise를 반환하므로, Promise가 전부 다 끝났을 때 (setteld)이 됐을 때 비로소 실행이 되기 때문이다. so, 비정상 코드!
// const mapResult = [1, 2, 3].map(async (val) => {
//     const r = await afterTime(val);
//     console.log('r=', r);
//     return r;
// });
// console.log('mapResult=', mapResult);

//true,false 
const odds = [1, 2, 3].filter(async val => {
    const r = await afterTime(val);
    return r % 2 === 1;
});
console.log('odds=', odds);

const result = await Promise.all([1, 2, 3].map(afterTime)).filter(a => a % 2 === 1);