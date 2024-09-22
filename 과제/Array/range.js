const assert = require('assert');
function range(start, end, sequence) {
    //1. start만 값이 주어졌을 때,
    //start를 배열의 길이로 볼 수 있음(0 제외)
    //그리고 1씩 증가하는 규칙 하나만 필요함
    //단, 음수면 -1을 곱해서 -1, -2, -3... 요소들을 음수로 만들어 추가, 그 후 reverse해서 오름차순으로 정렬하기
    //(예외)start가 0일때: 배열 길이 1확보, element는 0 입력
    if (start != null && end == null && sequence == null) {
        sequence = start < 0 ? -1 : 1;
        const length = Math.abs(start || 1);
        const ranged_arr = Array.from(
            Array(length),
            (_, i) => sequence * (i + ((Math.abs(start) && 1) || 0)),
        );
        const isNegative = start < 0;
        return isNegative ? ranged_arr.reverse() : ranged_arr;
    }

    //2. end값이 주어졌을 떄,
    //start - end의 절대값 + 1(+자기자신)을 배열의 길이로 볼 수 있음
    //start부터 end까지 1씩 증가하거나 감소해서 배열을 생성
    //만약 시작값이 종료값보다 크거나, 아니면 종료값이 애초에 음수라면 1씩 감소해야 하기 때문에, 이럴땐 operator를 -1로 설정
    // A[0] = start - (operator * 0)
    // A[1] = start - (operator * 1)
    // A[2] start - (operator * 2)
    // .....
    if (start != null && end != null && sequence == null) {
        const length = Math.abs(start - end) + 1;
        sequence = start > end || end < 0 ? -1 : 1;
        return Array.from(
            Array(length),
            (_, i) => ((Math.abs(start) && start) || 0) + sequence * i,
        );
    }

    //3.증가값까지 주어졌을 때
    if (start != null && end != null && sequence != null) {
        //start: 1, end: 10, 2
        //start: 10, end: 1, -2
        //start: 5, end: 5, 0
        //[5]

        let calc = start;
        let result = [calc];
        function calculation_minus(num) {
            if (sequence >= 0) return result;
            calc = num + sequence;
            if (calc <= end) {
                return result; // 종료 조건: calc가 end보다 작으면 종료
            } else {
                result.push(calc);
                return calculation_minus(calc); // 재귀 호출
            }
        }
        function calculation_plus(num) {
            if (sequence <= 0) return result;
            calc = num + sequence;
            if (calc > end) {
                return result; // 종료 조건: calc가 end보다 작으면 종료
            } else {
                result.push(calc);
                return calculation_plus(calc);
            }
        }
        return start >= end
            ? calculation_minus(start)
            : calculation_plus(start);
    }
}

// range(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.log('🚀 ~ range(1, 10, 1):', range(1, 10, 1));
// range(1, 10, 2); // [1, 3, 5, 7, 9]

// range(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// range(10, 1, -2); // [10, 8, 6, 4, 2]
console.log('🚀 ~ range(5):', range(5));
console.log('🚀 ~ range(100):', range(100));
console.log('🚀 ~ range(-5):', range(-5));
console.log('🚀 ~ range(0):', range(0));
console.log('🚀 ~ range(5, 5):', range(5, 5));
console.log('🚀 ~ range(1, 10):', range(1, 10));
console.log('🚀 ~ range(10, 1):', range(10, 1));
console.log('🚀 ~ range(0, 5):', range(0, 5));
console.log('🚀 ~ range(0, -1):', range(0, -1));
console.log('🚀 ~ range(0, -3):', range(0, -3));
console.log('🚀 ~ range(-3, 0):', range(-3, 0));
console.log('🚀 ~ range(5, 1):', range(5, 1));
console.log('🚀 ~ range(0, 0):', range(0, 0));
console.log('🚀 ~ range(3, -1):', range(3, -1));

console.log('🚀 ~ range(1, 10, 2):', range(1, 10, 2)); // [ 1, 3, 5, 7, 9 ]

console.log('--------------');
console.log('🚀 ~ range(10, 1, -2):', range(10, 1, -2)); //[10, 8, 6, 4, 2]
console.log('🚀 ~ range(5, 5, 0):', range(5, 5, 0)); //[5]
console.log('🚀 ~ range(5, 5, -1):', range(5, 5, -1)); //[5]
console.log('🚀 ~ range(5, 1, 1):', range(5, 1, 1)); //[]
console.log('🚀 ~ range(1, 5, -1):', range(1, 5, -1)); //[]
console.log('🚀 ~ range(1, 5, 6):', range(1, 5, 6)); //[1]

console.log('🚀 ~ range(2, 1, -5):', range(2, 1, -5)); //[2]
console.log('🚀 ~ range(0, -1, -5):', range(0, -1, -5)); //[0]
console.log('🚀 ~ range(1, 5, 0):', range(1, 5, 0)); //[1] //내 에상은 1, 1, 1, 1이 나와야 하는거 아님?
console.log('🚀 ~ range(0, 0, 5):', range(0, 0, 5)); //[0]
