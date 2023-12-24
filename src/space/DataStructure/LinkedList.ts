// Linked List:
// 1. Singly Linked List (SLL) - each node has only one link to the next node.
// 2. Doubly Linked List (DLL) - each node has two links, to the next and previous node.
// 3. Circular Linked List (CLL) - the last node points to the first node.


/**
 * A class representing a linked list data structure.
 * @template T The type of elements in the list.
 */
export class LinkedList<T> {
    head: LinkedListNode<T> | null = null;
    tail: LinkedListNode<T> | null = null;
    length = 0;

    /**
     * Adds a new element to the end of the list.
     * @param {T} data Node data.
     */
    append(data: T) {
        const node = new LinkedListNode(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            if (this.tail) {
                this.tail.next = node;
                this.tail = node;
            }
        }
        this.length++;
    }

    /**
     * Returns the element at the specified position in the linked list.
     * @param pos - The position of the element to return.
     * @throws {LinkedListError} If the position is out of bounds.
     */
    get(pos: number) {
        if (pos < 0 || pos >= this.length) {
            throw new LinkedListError("Index out of bounds");
        }
        let current = this.head;
        for (let i = 0; i < pos; i++) {
            current = current!.next;
        }
        return current!.data;
    }

    /**
     * Inserts a new node with the specified data at the given position in the linked list.
     * @param pos - The position at which to insert the new node.
     * @param data - The data to be stored in the new node.
     * @throws {LinkedListError} If the position is out of bounds.
     */
    insert(pos: number, data: T) {
        if (pos < 0 || pos > this.length) {
            throw new LinkedListError("Index out of bounds");
        }
        const node = new LinkedListNode(data);
        if (pos === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let prev = this.head;
            for (let i = 0; i < pos - 1; i++) {
                prev = prev!.next;
            }
            node.next = prev!.next;
            prev!.next = node;
        }
        this.length++;
    }

    /**
     * Deletes the element at the specified position in the linked list.
     * 
     * @param pos - The position of the element to delete.
     * @throws {LinkedListError} If the position is out of bounds.
     * @throws {TypeError} If the list is empty.
     */
    delete(pos: number) {
        if (pos < 0 || pos >= this.length) {
            throw new LinkedListError("Index out of bounds");
        }
        if (pos === 0) {
            this.head = this.head!.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < pos - 1; i++) {
                prev = prev!.next;
            }
            prev!.next = prev!.next!.next;
        }
        this.length--;
    }

    /**
     * Finds the index of the specified data in the linked list.
     * @param data The data to search for.
     * @returns The index of the data if found, otherwise -1.
     */
    findIndex(data: T) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    /**
     * Returns the size of the linked list.
     * @returns The number of elements in the linked list.
     */
    size() {
        return this.length;
    }

}

/**
 * A class representing a linked list node.
 * @template T The type of elements in the list.
 */
export class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedListError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "LinkedListError";
    }
}