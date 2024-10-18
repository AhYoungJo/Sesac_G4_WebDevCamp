class Collection {
    #arr = [];
    constructor(arr = []) {
        this.#arr = [...arr.flat(1)];
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.#arr.length; i++) {
            yield this.#arr[i];
        }
    }
    get _arr() {
        return this.#arr;
    }
    set _arr(value) {
        this.#arr = value;
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
        if (this.#arr.constructor === Stack) return this.#arr.at(-1);
        if (this.#arr.constructor === Queue) return this.#arr[0] ? -1 : 0;
    }
    get poll() {
        if (this.#arr.constructor === Stack) return this.#arr.pop();
        if (this.#arr.constructor === Queue) return this.dequeue();
        return this.remove;
    }
    get print() {
        console.log(
            `${this.constructor.name}(${this.size}) ${this.toString()}`,
        );
    }
    toString() {
        return JSON.stringify(this.#arr);
    }
    remove() {
        return isStack ? this.#arr.pop() : this.#arr.shift;
    }
}

class ArrayList extends Collection {
    #list = {};
    constructor(arr = []) {
        super(); // 부모 클래스 생성자 호출
        this.#list = ArrayList.arrayToList(arr);
    }
    static arrayToList(arr = this._list) {
        let node;
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            node = node != null ? { value: arr[i], rest: node } : { value: arr[i] };
        }
        return (this._list = node);
    }

    static listToArray() {
        const arr = [];
        let node = this._list;
        while (true) {
            if (!node) break;
            arr.push(node.value);
            node = node.rest;
        }
        return (this._list = arr);
    }
    get _list() {
        return this.#list;
    }
    set _list(value) {
        this.#list = value;
    }
    get peek() {
        let [isList, arr] = this.ifListConverToArr();
        this._list = this.ifListRevertToList(isList, arr);
        return arr.at(-1);
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
    get isEmpty() {
        return this.size === 0;
    }
    clear() {
        return Array.isArray(this._list)
            ? (this._list.length = 0)
            : (this._list = null);
    }
    print() {
        console.log(
            `${this.constructor.name}(${this.size}) ${this.toString()}`,
        );
    }
    *iterator() {
        function* iterate() {
            for (let i = 0; i < this._list.length; i++) {
                yield `${i}: ${this._list[i]}`;
            }
        }
        const a = iterate();
        console.log(a.next());
    }
    toString() {
        return JSON.stringify(this._list);
    }
    ifListConverToArr() {
        const isList = !Array.isArray(this._list);
        const arr = isList ? ArrayList.listToArray(this._list) : this._list;
        return [isList, arr];
    }
    ifListRevertToList(isList, arr) {
        return isList ? ArrayList.arrayToList(arr) : arr;
    }

    toArray() {
        const [, arr] = this.ifListConverToArr();
        return arr;
    }

    indexOf(value) {
        return this._list.indexOf(value);
    }
    contains(value) {
        let [isList, arr] = this.ifListConverToArr();
        const isInclude = arr.includes(value);
        this._list = this.ifListRevertToList(isList, arr);
        return isInclude;
    }
    add(value, index) {
        let [isList, arr] = this.ifListConverToArr();

        index == null ?
            arr.push(value) :
            arr.splice(index, 0, value);

        return this._list = this.ifListRevertToList(isList, arr);
    }
    remove(value) {
        let [isList, arr] = this.ifListConverToArr();
        const remain = arr.filter(v => v !== value);
        return this._list = this.ifListRevertToList(isList, remain);
    }
    set(index, value) {
        let [isList, arr] = this.ifListConverToArr();
        arr[index] = value;
        return this._list = this.ifListRevertToList(isList, arr);
    }
    get(index) {
        let [isList, arr] = this.ifListConverToArr();
        this._list = this.ifListRevertToList(isList, arr);
        return arr[index];
    }
    indexOf(value) {
        let [isList, arr] = this.ifListConverToArr();
        this._list = this.ifListRevertToList(isList, arr);
        return arr.indexOf(value);
    }

}

const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
console.log(alist);
console.log(alist.toString());
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.add(5, 1); // {"value":1,"rest":{"value":5,"rest":{"value":2,"rest":{"value":3}}}}
alist.remove(2); // { value: 1,  rest: { value: 5, rest: { value: 3 } } }
console.log(alist.toString());
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print(); //ArrayList(5) { "value": 1, "rest": { "value": 33, "rest": { "value": 22, "rest": { "value": 5, "rest": { "value": 3; } } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.print(); //{ "value": 1, "rest": { "value": 300, "rest": { "value": 22, "rest": { "value": 5, "rest": { "value": 3; } } } } }
alist.get(2); //22
alist.size; // 5
alist.indexOf(300); // 1
alist.contains(300); //true
alist.contains(301); // false
alist.isEmpty; //false
alist.peek; // 3
// alist.toArray(); // [ 1, 300, 22, 5, 3 ]
// alist.iterator().next(); // { value: 1, done: false }
console.log("🚀 ~ alist.iterator().next():", alist.iterator().next());
// alist.clear(); // all clear
