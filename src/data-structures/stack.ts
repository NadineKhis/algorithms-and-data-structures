class Stack<T> {
    constructor() {
        this.top = null;
    };

    static fromArray<T>(arr: Array<T>): Stack<T> {
        let s: Stack<T> = new Stack()
        arr.map(x => {
            let n: Node_<T> = new Node_<T>(x)
            s.add(n)
        })
        return s
    }

    public top: Node_<T>;

    public isEmpty(): boolean {
        return !this.top
    }

    add(n: Node_<T>): void {
        n.next = this.top
        this.top = n
    }

    pop(): Node_<T> {
        if (this.top) {
            let tmp = this.top
            this.top = this.top.next
            return tmp
        } else console.log('The stack is empty')
    }

    print(): void {
        let n = this.top
        if (!n) console.log('there is no data')
        while (n) {
            console.log(n.data)
            n = n.next
        }
    }
}

class Node_<T> {
    constructor(t: T) {
        this.data = t
        this.next = null
    }

    data: T;
    next: Node_<T>;
}

// Tests

const _deleteFewElements = (s, n): void => {
    for (let i = 0; i < n; i++) {
        s.pop()
    }
    console.log(`TEST 1: DELETE ${n} ELEMENTS`)
    s.print()
}

const _clearStack = (s): void => {
    while (s.top) {
        s.pop()
    }
    console.log('TEST 2: CLEAR STACK')
    s.print()
}

const _addSomeElements = (s, ...args): void => {
    args.map(x => {
        let n = new Node_<number>(x)
        s.add(n)
    })
    console.log(`TEST 3: ADD SOME ELEMENTS`)
    s.print()
}

// @ts-ignore
let testStack = Stack.fromArray(Array.from(Array(10).keys()))
testStack.print()
_deleteFewElements(testStack, 3)
_clearStack(testStack)
_addSomeElements(testStack, 400, 600, 800)
