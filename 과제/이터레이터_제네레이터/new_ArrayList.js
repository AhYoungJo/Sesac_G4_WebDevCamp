class Collection {
    #list = [];
    // constructor(...args) {
    //     this.#list = [...args.flat(1)];
    // }
    constructor(arr = []) {
        this.#list = this.arrayToList(arr);
    }
    // [Symbol.iterator]() {
    //     let idx = 0;
    //     const arr = this.#list;
    //     return {
    //         next() {
    //             return { value: arr[idx++], done: idx > arr.length };
    //         },
    //     };
    // }

    *[Symbol.iterator]() {
        for (let i = 0; i < this.#list.length; i++) {
            yield this.#list[i];
        }
    }

    get _list() {
        return this.#list;
    }
    set _list(value) {
        this.#list = value;
    }
    get size() {
        if (Array.isArray(this._list)) return this._list.length;
        let length = 0;
        let node = this._list;
        while (true) {
            if (!node) break;
            length++;
            node = node.rest;
        }
        return length;
    }
    clear() {
        return Array.isArray(this._list)
            ? (this._list.length = 0)
            : (this._list = null);
    }
    get isEmpty() {
        return this.size === 0;
    }
    listToArray() {
        const arr = [];
        let node = this._list;
        while (true) {
            if (!node) break;
            arr.push(node.value);
            node = node.rest;
        }
        return (this._list = arr);
    }
    get peek() {
        return this.listToArray().at(-1);
    }
    print() {
        console.log(
            `${this.constructor.name}(${this.size}) ${this.toString()}`,
        );
    }
    *iterator() {}
    toString() {
        return JSON.stringify(this._list);
    }
    remove() {
        let isList = !Array.isArray(this._list);
        let arr = isList ? this.listToArray() : this._list;
        let removed = arr.pop();
        this._list = isList ? this.arrayToList(arr) : arr;
        return removed;
    }
    toArray() {
        return this.listToArray();
    }
    arrayToList(arr = this._list) {
        let node;
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            node = node != null ? {value: arr[i], rest: node} : {value: arr[i]};
        }
        return (this._list = node);
    }

    indexOf(value) {
        return this.#list.indexOf(value);
    }
    contains(value) {
        return this.#list.includes(value);
    }
    add(value1, value2) {}
}

class ArrayList extends Collection {
    // constructor(arr = []) {
    //     super();
    //     this._list = this.arrayToList(arr);
    // }
    // arrayToList(arr = this._list) {
    //     let node;
    //     for (let i = arr.length - 1; i >= 0; i -= 1) {
    //         node = node != null ? {value: arr[i], rest: node} : {value: arr[i]};
    //     }
    //     return (this._list = node);
    // }
    // listToArray() {
    //     const arr = [];
    //     let node = this._list;
    //     while (true) {
    //         if (!node) break;
    //         arr.push(node.value);
    //         node = node.rest;
    //     }
    //     return (this._list = arr);
    // }
}

const alist = new ArrayList([1, 2, 3, 4]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
// alist.add(5, 1); // { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3 } }}
// alist.remove(2); // { value: 1, rest: { value: 3 } }
// alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
// alist.add(33, 1);
// alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
// alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
// alist.get(2);
// alist.size; // 22, 4
// alist.indexOf(300); // 1
// alist.contains(300);
// alist.contains(301); // true, false
// alist.isEmpty;
// alist.peek; // false, 3
// alist.toArray(); // [1, 300, 22, 3]
// alist.iterator().next(); // { value: 1, done: false }
// alist.clear(); // all clear
