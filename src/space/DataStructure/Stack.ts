// Stack:
// 栈是一种遵从后进先出（LIFO）原则的有序集合。在栈中，新添加的或待删除的元素都保存在栈的末尾，称作栈顶，另一端就叫栈底。

/**
 * A stack data structure implementation.
 * @template T The type of elements stored in the stack.
 */
export default class Stack<T> {
    stackSize = 0;
    pointer = 0;
    stackDataStore: T[] = [];

    /**
     * Returns the number of elements in the stack.
     * @returns The number of elements in the stack.
     */
    length(): number {
        return this.stackSize;
    }

    /**
     * Removes and returns the top element from the stack.
     * If the stack is empty, returns undefined.
     * @returns The top element of the stack, or undefined if the stack is empty.
     */
    pop(): T | undefined {
        if (this.stackSize > 0) {
            this.stackSize--;
            return this.stackDataStore.pop();
        }
    }

    /**
     * Adds an element to the top of the stack.
     * @param element The element to add to the stack.
     */
    push(element: T) {
        this.stackDataStore[this.stackSize++] = element;
    }

    /**
     * Removes all elements from the stack.
     */
    clear() {
        this.stackSize = 0;
        this.pointer = 0;
        this.stackDataStore = [];
    }
}
