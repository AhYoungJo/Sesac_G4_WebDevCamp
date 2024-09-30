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
        [this.start, this.end] = [
            LINE2.findIndex(station => station === start),
            LINE2.findIndex(station => station === end),
        ];
    }
    [Symbol.iterator]() {
        //도착지 index가 더 작다는 건 한 바퀴를 더 돌아야 한다는 것
        let crt = this.start;
        let count = 0;

        //index 0까지 포함해서 전체는 총 48
        let total =
            this.start <= this.end
                ? this.end - this.start
                : LINE2.length - this.start + this.end;
        return {
            next() {
                let prev = LINE2[crt];
                count++;
                crt++;

                //종착지 넘어가면 초기화
                if (crt >= LINE2.length) {
                    count--;
                    crt = 0;
                }

                return {
                    value: prev,
                    done: count > total,
                };
            },
        };
    }
}

const routes = new Subway('문래', '신림');
// console.log(routes);
assert.deepStrictEqual(
    [...routes],
    ['문래', '대림', '구로디지털단지', '신대방'],
);

const it1 = routes[Symbol.iterator]();
assert.deepStrictEqual(it1.next(), {value: '문래', done: false});
assert.deepStrictEqual(it1.next(), {value: '대림', done: false});
assert.deepStrictEqual(it1.next(), {value: '구로디지털단지', done: false});
assert.deepStrictEqual(it1.next(), {value: '신대방', done: false});
assert.deepStrictEqual(it1.next(), {value: '신림', done: true});

const routes2 = new Subway('구로디지털단지', '성수');
// console.log(routes2);
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
