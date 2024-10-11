//특정 날짜를 받으면 해당 월의 달력을 출력하시오.

const getCalendar = date => {
    if (!/^20[0-9]{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date)) {
        return `잘못된 입력입니다. 유효한 날짜를 입력해주세요. (ex: '2024-01-31')`;
    }

    const d = new Date(date);
    let startDate = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    const endDate = new Date(d.getFullYear(), d.getMonth() - 1, 0).getDate();

    let days = new Array(startDate).fill(' ');
    const calendar = [
        ['일 ', '월', '화', '수', '목', '금', '토'],
        ['    ', d.getFullYear() + '년', d.getMonth() + '월'],
    ];
    for (let i = 1; i <= endDate; i += 1) {
        let e = i.toString().padStart(2, ' ');
        days[startDate] = e;
        startDate += 1;
        if (days.length === 7) {
            calendar.push(days);
            days = [];
            startDate = 0;
        }
    }
    calendar.push(days);

    return calendar.map(line => line.join(' ')).join('\n');
};
