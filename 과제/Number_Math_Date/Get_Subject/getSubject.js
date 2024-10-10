const getNextWeekExt = () => {
    const weeks = ['일', '월', '화', '수', '목', '금', '토'];
    let widx = -1;
    return elName => {
        widx++;
        if (widx >= weeks.length) widx = 0;
        return (elName.textContent = `${weeks[widx]}`);
    };
};

const Debounce = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    };
};
const Throttle = (cb, delay) => {
    let timer;
    return (...args) => {
        if (timer) return;
        timer = setTimeout(() => {
            cb(...args), (timer = null);
        }, delay);
    };
};
const spanKor = document.getElementById('span-kor');
const spanMath = document.getElementById('span-math');

const getKorean = Debounce(getNextWeekExt(), 500);
const getMath = Throttle(getNextWeekExt(), 500);

const clickHandlerForKorean = () => getKorean(spanKor);
const clickHandlerForMath = () => getMath(spanMath);
