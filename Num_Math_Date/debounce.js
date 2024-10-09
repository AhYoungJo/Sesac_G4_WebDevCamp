const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(cb, delay, ...args);
    };
};
const act = debounce(a => a + 1, 1000);
act(100);

//특정 타임 안에 재요청이 일어나면 타이머 초기화해서, 여러번의 요청이 있어도 이벤트 핸들러가 단 한번만 실행되게