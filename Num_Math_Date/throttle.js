const throttle = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) return;
        timer = setTimeout(() => {
            cb(...args);
            timer = null;
        }, delay);
    };
};
const act = throttle(a => a + 1, 1000);
act(1);

//특정 타이머동안에 몇 번을 요청해도 1번밖에 실행이 안 된다.

