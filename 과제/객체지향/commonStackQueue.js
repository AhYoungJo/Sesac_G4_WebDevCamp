class collection {
    #arr = [];
    constructor(...args) {
        this.#arr = [...args.flat(1)];
    }
    get _arr() {
        return this.#arr;
    }
    get size() {
        return this.#arr.length;
    }
    get clear() {
        this.#arr.length = 0;
    }
    get isStack() {
        return this.#arr.constructor.name === 'Stack';
    }
    get isEmpty() {
        return this.#arr.length === 0;
    }
    get peek() {
        // if (this.#arr.constructor === Stack) return this.#arr.at(-1);
        // if (this.#arr.constructor === Queue) return this.#arr[0]; -1 : 0);
    }
    get poll() {
        // if (this.#arr.constructor === Stack) return this.#arr.pop();
        // if (this.#arr.constructor === Queue) return this.dequeue();
        return this.remove;
    }
    get print() {
        // console.log(this);
        console.log(
            `${this.constructor.name}(${this.size}) ${this.toString()}`,
        );
    }
    toString() {
        return JSON.stringify(this.#arr);
    }
    remove() {
        // if (this.#arr.constructor === Stack) return this.#arr.pop();
        // if (this.#arr.constructor === Queue) return this.#arr.shift();
        return isStack ? this.#arr.pop() : this.#arr.shift;
    }
}

class Stack extends collection {
    // print() {
    //     console.log(this.toString());
    // }

    push(...args) {
        this._arr.push(...args);
        return this;
    }

    pop() {
        this._arr.pop();
        return this;
    }
}

class Queue extends collection {
    enqueue(...args) {
        this._arr.push(...args);
        return this;
    }
    dequeue() {
        this._arr.shift();
        return this;
    }
}

// class Queue extends Array {
//     constructor(...args) {
//         super(...args);
//     }
//     enqueue(num) {
//         this.push(num);
//     }
//     dequeue() {
//         return this.shift();
//     }
// }
// class Stack extends Array {
//     constructor(...args) {
//         //super() = constructor, super.--() = 메서드
//         super(...args);
//     }
// }

// 또 다른 방법 mixin
// Object.assign(Stack.prototype, collection);
// Object.assign(Queue.prototype, collection);

const stack = new Stack();
const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log("🚀 ~ queue:", queue);

stack.push(1);
stack.push(2);
// stack.peek();
console.log('🚀 ~ stack.peek():', stack.peek());
console.log('🚀 ~ stack.length:', stack.length);

console.log(stack);
