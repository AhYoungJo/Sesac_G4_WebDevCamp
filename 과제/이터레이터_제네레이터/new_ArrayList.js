class Collection {
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
    clear() {
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
    print() {
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
        return this.isStack ? this.#arr.pop() : this.#arr.shift;
    }
    toArray() {
        return [...this.#arr];
    }
}

class ArrayList extends Collection {
    arrayToList() {}
    listToArray() {}
}

const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
// alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
// alist.add(5, 1); // { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3 } }}
alist.remove(2); // { value: 1, rest: { value: 3 } }
// alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
// alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
// alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
// alist.get(2);
alist.size; // 22, 4
// alist.indexOf(300); // 1
// alist.contains(300);
// alist.contains(301); // true, false
alist.isEmpty;
alist.peek; // false, 3
alist.toArray(); // [1, 300, 22, 3]
// alist.iterator().next(); // { value: 1, done: false }
alist.clear(); // all clear
