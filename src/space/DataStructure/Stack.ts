/**
 * @file Stack.ts - A collection of Stack for use in various algorithms.
 */

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
    get size(): number {
        return this.stackSize;
    }

    /**
     * Adds an element to the top of the stack.
     * @param element The element to add to the stack.
     */
    push(element: T): void {
        this.stackDataStore[this.stackSize++] = element;
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
     * Returns the top element of the stack without removing it.
     * @returns The top element of the stack, or undefined if the stack is empty.
     */
    top(): T | undefined {
        return this.stackDataStore[this.stackSize - 1];
    }

    /**
     * Removes all elements from the stack.
     */
    clear(): void {
        this.stackSize = 0;
        this.pointer = 0;
        this.stackDataStore = [];
    }
}
