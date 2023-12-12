// Linked List:
// 链表是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针(Pointer)。
// 链表中的数据单位叫做“结点”(Node)。每个结点包含两个部分：数据域和指针域。数据域用来存储数据，指针域用来存储下一个结点的地址。
// 链表的第一个结点叫做“头结点”。头结点不存储数据，不进行任何操作，它的存在就是为了方便对链表的操作。
// 链表的最后一个结点叫做“尾结点”。尾结点的指针指向一个空地址(NULL)，表示这是链表上最后一个结点。

/**
 * A class representing a linked list node.
 * @template T The type of elements in the list.
 */
class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

/**
 * A class representing a linked list data structure.
 * @template T The type of elements in the list.
 */
class LinkedList<T> {
    pos = 0;
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
}