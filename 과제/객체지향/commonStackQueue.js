class Collection extends Array {
    #arr = [];
    constructor(...args) {
        super();
        this.#arr = args;
    }

    //어뷰징, accessor 이기 때문에 외부에서 arr를 수정할 수 없음
    get _arr() {
        return this.#arr;
    }

    get isStack() {
        return this.constructor === Stack;
    }
    get isQueue() {
        return this.constructor === Queue;
    }
    clear() {
        this.#arr.length = 0;
    }
    print() {
        console.log(this);
    }
    remove() {
        if (this.isStack) return this.#arr.pop();
        if (this.isQueue) return this.#arr.shift();
    }
    isEmpty() {
        return this.length === 0;
    }
    peek() {
        if (this.isStack) return this[this.length - 1];
        if (this.isQueue) return this[0];
    }
    poll() {
        if (this.isStack) return this.pop();
        if (this.isQueue) return this.dequeue(0);
    }
    length() {
        return this.length;
    }
};

class Queue extends Collection {
    enqueue(num) {
        this._arr.push(num);
    }
    dequeue() {
        return this._arr.shift();
    }
}
class Stack extends Collection {

}

// Object.assign(Stack.prototype, collection);
// Object.assign(Queue.prototype, collection);

const stack = new Stack();
const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log("🚀 ~ queue:", queue);

stack.push(1);
stack.push(2, 3, 4);
console.log(stack);
console.log("🚀 ~ stack.peek():", stack.peek());
console.log("🚀 ~ stack.length:", stack.length);
console.log("🚀 ~ stack.remove:", stack.remove());
console.log(stack);
