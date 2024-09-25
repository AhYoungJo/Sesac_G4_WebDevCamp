class Stack extends Array {
    constructor(...args) {
        //super() = constructor, super.--() = 메서드
        super(...args);
    }
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // ⇐⇒ (1,2)
console.log(stack);
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
