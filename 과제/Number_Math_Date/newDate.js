//1)
Date.UTC(1970, 0, 2); // 86400000 (1970년 1월 2일 00:00:00 UTC)
Date.parse(1970, 0, 2); // 54000000 (1970년 1월 1일 15:00:00 UTC 환산 후 밀리초 계산)

//2)
const getRandomDay = () => {
    const day = new Date();
    //day가 0이면 이전 달의 마지막 날
    return new Date(day.getFullYear(), day.getMonth() + 1, 0).getDate();
};

const getRandomFiveDates = () => {
    const [year, month] = [new Date().getFullYear(), new Date().getMonth()];
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

//내년(2025년)의 오늘(6월 29일)의 요일을 출력하시오.

//오늘(10월 7일)로 부터 100일 후의 날짜는?
