const collection = {
    clear() {
        this.length = 0;
    },
    print() {
        console.log(this);
    },
    remove() {
        if (this.constructor === Stack) return this.pop();
        if (this.constructor === Queue) return this.shift();
    },
    isEmpty() {
        return this.length === 0;
    },
    peek() {
        if (this.constructor === Stack) return this[this.length - 1];
        if (this.constructor === Queue) return this[0];
    },
    poll() {
        if (this.constructor === Stack) return this.pop();
        if (this.constructor === Queue) return this.dequeue(0);
    },
    length() {
        return this.length;
    }
};

class Queue extends Array {
    constructor(...args) {
        super(...args);
    }
    enqueue(num) {
        this.push(num);
    }
    dequeue() {
        return this.shift();
    }
}
class Stack extends Array {
    constructor(...args) {
        //super() = constructor, super.--() = 메서드
        super(...args);
    }
}

Object.assign(Stack.prototype, collection);
Object.assign(Queue.prototype, collection);

const stack = new Stack();
const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log(queue);

stack.push(1);
stack.push(2);
// stack.peek();
console.log("🚀 ~ stack.peek():", stack.peek());
console.log("🚀 ~ stack.length:", stack.length);

console.log(stack);