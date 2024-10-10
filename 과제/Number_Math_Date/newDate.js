//1)
Date.UTC(1970, 0, 2); // 정답, 86400000 (1970년 1월 2일 00:00:00 UTC)
Date.parse(1970, 0, 2); // 오답, 54000000 (1970년 1월 1일 15:00:00 UTC 환산 후 밀리초 계산)

//2)
const getRandomDay = () => {
    const day = new Date();
    //day가 0이면 이전 달의 마지막 날
    return new Date(day.getFullYear(), day.getMonth() + 1, 0).getDate();
};

const getRandomFiveDates = () => {
    const day = new Date();
    const [year, month] = [day.getFullYear(), day.getMonth()];
    let randomDates = [];
    for (let i = 1; i <= 5; i += 1) {
        let random = Math.floor(Math.random() * getRandomDay() + 1);
        randomDates.push(new Date(year, month, random));
    }
    //toDateString() => 'Mon Oct 21 2024'
    //toISOString().slice(0, 10) => '2024-10-23'
    return randomDates
        .sort((a, b) => b - a)
        .map(d => d.toISOString().slice(0, 10));
};

console.log(getRandomFiveDates());

//3)
const dayOfNextYear = () => {
    const today = new Date();
    const day = new Date(
        today.getFullYear() + 1,
        today.getMonth(),
        today.getDate(),
    ).getDay();

    return '일월화수목금토'[day];
};

//오늘(10월 7일)로 부터 100일 후의 날짜는?
const after100 = () => {
    const today = new Date();
    return new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 100,
    );
};
