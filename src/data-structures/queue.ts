// @ts-ignore
// @ts-ignore

class Queue<T> {
    constructor() {
        this.front = null;
        this.back = null;
    }

    front: Node_<T>;
    back: Node_<T>;

    static fromArray<T>(arr: Array<T>): Queue<T> {
        let s: Queue<T> = new Queue()
        arr.map(x => {
            let n: Node_<T> = new Node_<T>(x)
            s.enqueue(n)
        })
        return s
    }

    enqueue(n: Node_<T>): void {
        if (!this.front) {
            this.front = n
            this.back = n
            return
        }
        else if (!this.front.next) {
            this.front.next = n
        }
        this.back.next = n
        this.back = n

    }

    dequeue(): Node_<T> {
        let tmp = this.front
        if (!tmp) {
            console.log('empty queue')
            return
        }
        if (!tmp.next) {
            this.front = null
            this.back = null
        } else {
            this.front = this.front.next
        }
        return tmp
    }

    length(): number {
        let res = 0
        let n: Node_<T> = this.front
        while (n) {
            res++
            n = n.next
        }
        return res;
    }

    print ():void {
        let n = this.front
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

let n = new Node_(3)
let m = new Node_(4)
// @ts-ignore
// let testQueue = new Queue()
// testQueue.enqueue(n)
// testQueue.enqueue(m)
// console.log(testQueue.length())
// testQueue.print()
// console.log(testQueue)

// Tests

const addSomeElements = (s, ...args): void => {
    args.map(x=> {
        let n = new Node_<number>(x)
        s.enqueue(n)
    })
    console.log('TEST 1: ADD SOME ELEMENTS')
    s.print()
}

const deleteFewElements = (s, quantity:number): void => {
    for (let i = 0; i < quantity; i++) {
        s.dequeue()
    }
    console.log(`TEST 2: DELETE ${quantity} elements`)
    s.print()
}



// const _
// @ts-ignore
let testQueue = Queue.fromArray(Array.from(Array(5).keys()))
addSomeElements(testQueue, 333, 444, 555)
deleteFewElements(testQueue, 5)
console.log('TEST 3: add element')
testQueue.enqueue(new Node_(10))
testQueue.print()
