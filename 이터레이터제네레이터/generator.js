function* route() {
    const start = yield "출발 역은?";  // yield가 있으므로 caller에게 제어권 넘김. yield뒤는 그냥 메시지!
    const end = yield "도착 역은?";
    return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
}

const caller = route();   // next() 함수가 있는것으로 볼 때, "내 안에 이터레이터 있다!"
//generator type의 객체를 반환
// console.log(caller);
// caller.next();      // undefined보내면 제너레이터는 {value: '출발 역은?', done: false}를 caller에게 보내(반환하)고 일시 정지.
// console.log("🚀 ~ caller.next():", caller.next());
// caller.next('문래'); // start에 '문래'를 주입하고, {value: '도착 역은?', done: false}를 caller에게 보내고 일시 정지.
// console.log("🚀 ~ caller.next('문래'):", caller.next('문래'));
// caller.next('신림'); ///
// console.log("🚀 ~ caller.next('신림'):", caller.next('신림'));

//return을 만나면 value는 done


