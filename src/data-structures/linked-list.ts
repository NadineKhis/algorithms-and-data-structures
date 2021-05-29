import {defaultEquals, EqualsFunction} from "./utils/utils";
class LinkedListNode<T> {
    val: T;
    next: LinkedListNode<T> | null;
    prev: LinkedListNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

interface List<T> {
    head: LinkedListNode<T>
    tail: LinkedListNode<T>
    size: number
}

class LinkedList<T> {
    private list: List<T> | undefined

    constructor() {
        this.list = undefined;
    }

    // NICETIES
    size(): number {
        if (this.list) return this.list.size
        return 0
    }

    isEmpty(): boolean {
        return !this.list
    }

    // INSERTION
    addFront(val: T): void {
        const newNode = new LinkedListNode(val)
        if (this.list) {
            this.list.head.prev = newNode;
            newNode.next = this.list.head

            this.list.head = newNode
            this.list.size += 1
        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1
            }
        }
    }

    addBack(val: T): void {
        const newNode = new LinkedListNode(val)
        if (this.list) {
            this.list.tail.next = newNode;
            newNode.prev = this.list.tail;

            this.list.tail = newNode
            this.list.size += 1
        } else {
            this.list = {
                head: newNode,
                tail: newNode,
                size: 1
            }
        }
    }

    addAt(i: number, val: T): void {
        if (i == 0) {
            this.addFront(val)
            return
        }
        if (i == this.size()) {
            this.addBack(val)
            return
        }
        if (i < 0 || i >= this.size() || !this.list) throw new Error('out of bounds')


        let cur = this.list.head;
        for (let j = 0; j < i - 1; j++) {
            cur = cur.next!
        }

        const newNode = new LinkedListNode(val)

        cur.next!.prev = newNode
        newNode.next = cur.next

        newNode.prev = cur
        cur.next = newNode
        this.list.size += 1
    }

    // ACCESSING
    peekFront(): T {
        if (!this.list) throw new Error('array is empty')
        return this.list.head.val
    }

    peekBack(): T {
        if (!this.list) throw new Error('array is empty')
        return this.list.tail.val
    }

    // SEARCHING
    get(i: number): T {
        if (i < 0 || i >= this.size() || !this.list) throw new Error('out of bounds')

        let j = 0
        let cur = this.list.head
        while (j < i) {
            cur = cur.next!
            j++
        }
        return cur.val
    }

    indexOf(value: T, equalsFunction?: EqualsFunction<T>): number {
        if (!this.list) return -1

        const equalsF = equalsFunction || defaultEquals

        let i = 0
        let cur = this.list.head

        while (!equalsF(cur.val,value)) {
            cur = cur.next!
            i++
        }
        return i
    }

    contains (value: T, equalsFunction?: EqualsFunction<T>): boolean {
        const index = this.indexOf(
            value,
            equalsFunction ? equalsFunction : undefined
        )
        return index !== -1
    }

    // DELETION
    removeFront(): T {
        if (!this.list) throw new Error('array is empty')
        const val = this.list.head.val

        if (this.list.head.next) {
            this.list.head.next.prev = null
            this.list.head = this.list.head.next

            this.list.size -= 1
        } else {
            this.list = undefined
        }
        return val
    }
    removeBack(): T {
        if (!this.list) throw new Error('array is empty')
        const val = this.list.tail.val

        if (this.list.tail.prev) {
            this.list.tail.prev.next = null
            this.list.tail = this.list.tail.prev

            this.list.size -= 1
        } else {
            this.list = undefined
        }
        return val
    }
    remove(val: T) : T {
        const index = this.indexOf(val)

        if (index === -1) throw new Error("val doesn't exist in the list")
        return this.removeAt(index)
    }
    removeAt(i: number): T {
        if (i == 0) {
            return this.removeFront()
        }
        if (i == this.size() - 1) {
            return this.removeBack()
        }

        if (i < 0 || i >= this.size() || !this.list) throw new Error("val doesn't exist in the list")

    }
}

let list = new LinkedList()
list.addBack(5)
list.addBack(5)
list.addBack(5)
console.log(list.size())
