// class Stack extends Array {
//     constructor(...args) {
//         //super() = constructor, super.--() = 메서드
//         super(...args);
//     }
// }

class Stack {
    #arr = [];
    constructor(...args) {
        this.#arr = [...args.flat(1)];
    }
    toString() {
        return JSON.stringify(this.#arr);
    }
    // print() {
    //     console.log(this.toString());
    // }
    push(...args) {
        this.#arr.push(...args);
        return this;
    }
    pop() {
        this.#arr.pop();
        return this;
    }
    clear() {
        this.#arr.length = 0;
    }
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // ⇐⇒ (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기
console.log(stack.toString());
