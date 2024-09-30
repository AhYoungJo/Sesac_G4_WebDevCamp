//다음의 지하철 노선 중에서, 출발역 ~ 도착역까지만을 반환하는 클래스를 작성하시오. (단방향만!)
const assert = require('assert');
const LINE2 = [
    '신도림',
    '성수',
    '신설동',
    '용두',
    '신답',
    '용답',
    '시청',
    '충정로',
    '아현',
    '이대',
    '신촌',
    '공항철도',
    '홍대입구',
    '합정',
    '당산',
    '영등포구청',
    '문래',
    '대림',
    '구로디지털단지',
    '신대방',
    '신림',
    '봉천',
    '서울대입구',
    '낙성대',
    '사당',
    '방배',
    '서초',
    '교대',
    '강남',
    '역삼',
    '선릉',
    '삼성',
    '종합운동장',
    '신천',
    '잠실',
    '잠실나루',
    '강변',
    '구의',
    '건대입구',
    '뚝섬',
    '한양대',
    '왕십리',
    '상왕십리',
    '신당',
    '동대문역사문화공원',
    '을지로4가',
    '을지로3가',
    '을지로입구',
];
class Subway {
    constructor(start, end) {
        [this.start, this.end] = [LINE2.indexOf(start), LINE2.indexOf(end)];
    }
    [Symbol.iterator]() {
        let crt = this.start;
        let current = '';
        let count = 0;
        let isDone = false;
        //index 0까지 포함해서 전체는 총 48
        //다시 순회해야 할 경우, 현재 위치와 전체길이 사이의 차를 이용
        let total =
            this.start <= this.end
                ? this.end - this.start
                : LINE2.length - this.start + this.end;
        return {
            next() {
                //이동횟수가 전체 이동 횟수를 넘어가면 종료
                if (isDone) return { done: isDone };

                //다음 위치를 구하면서 crt랑 count값이 바뀌기 때문에 미리 값 저장
                //value에 담아줄 현재 위치를 먼저 할당
                current = LINE2[crt];

                //다음 위치 구하기
                count++;
                crt++;

                //만약 다음 위치가 끝을 넘어가면 초기화
                if (crt >= LINE2.length) {
                    crt = 0;
                }

                //종착 위치는 value에 들어가고 난 뒤 종료되도록
                if (count > total) isDone = true;
                return {
                    value: current,
                    done: false,
                };
            },
        };
    }
}

const routes = new Subway('문래', '신림');
assert.deepStrictEqual(
    [...routes],
    ['문래', '대림', '구로디지털단지', '신대방', '신림'],
);

const it1 = routes[Symbol.iterator]();
assert.deepStrictEqual(it1.next(), { value: '문래', done: false });
assert.deepStrictEqual(it1.next(), { value: '대림', done: false });
assert.deepStrictEqual(it1.next(), { value: '구로디지털단지', done: false });
assert.deepStrictEqual(it1.next(), { value: '신대방', done: false });
assert.deepStrictEqual(it1.next(), { value: '신림', done: false });
assert.deepStrictEqual(it1.next(), { done: true });

const routes2 = new Subway('구로디지털단지', '성수');
assert.deepStrictEqual(
    [...routes2],
    [
        '구로디지털단지',
        '신대방',
        '신림',
        '봉천',
        '서울대입구',
        '낙성대',
        '사당',
        '방배',
        '서초',
        '교대',
        '강남',
        '역삼',
        '선릉',
        '삼성',
        '종합운동장',
        '신천',
        '잠실',
        '잠실나루',
        '강변',
        '구의',
        '건대입구',
        '뚝섬',
        '한양대',
        '왕십리',
        '상왕십리',
        '신당',
        '동대문역사문화공원',
        '을지로4가',
        '을지로3가',
        '을지로입구',
        '신도림',
        '성수',
    ],
);

const it2 = routes2[Symbol.iterator]();
// while (true) {
//     const x = it2.next();
//     console.log(x);
//     if (x.done) break;
// }

const route3 = new Subway('문래', '합정');
assert.strictEqual([...route3].length, 46);

const route4 = new Subway('신도림', '을지로입구');
assert.strictEqual([...route4].length, 48);
