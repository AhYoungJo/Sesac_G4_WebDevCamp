class Queue {
    #arr = [];
    constructor(...args) {
        this.#arr = [...args.flat(1)];
    }
    toString() {
        return JSON.stringify(this.#arr);
    }
    enqueue(...args) {
        this.#arr.push(...args);
        return this;
    }
    dequeue() {
        this.#arr.shift();
        return this;
    }
}

const queue = new Queue();
queue.enqueue(3).enqueue(2).enqueue(1); // 추가하기
queue.dequeue(); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
console.log(queue.toString());
