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

const queue = new Queue();
console.log(queue);
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log(queue);
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
