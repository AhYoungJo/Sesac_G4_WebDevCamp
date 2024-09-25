class Queue extends Array {
    constructor(...args) {
        super(...args);
    }
    enqueue(num) {
        // this.push(num);
        return this.unshift(num);
    }
    dequeue() {
        // return this.shift();
        return this.pop();
    }
}
class Stack extends Array {
    constructor(...args) {
        //super() = constructor, super.--() = 메서드
        super(...args);
    }
}

const queue = new Queue();
console.log(queue);
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log(queue);
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

const stack = new Stack([1, 2]); // or new Stack([1,2]); // ⇐⇒ (1,2)
console.log(stack);
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
