/**
 * @file Queue.ts - A collection of Queue for use in various algorithms.
 */

/** 
 * A simple queue data structure.
 * @template T The type of the elements in the queue.
 */
export class Queue<T> {
    queueSize = 0;
    queueDataStore: T[] = [];

    /**
     * Gets the size of the queue.
     * @returns The size of the queue.
     */
    get size(): number {
        return this.queueSize;
    }

    /**
     * Adds an element to the end of the queue.
     * @param element The element to be added.
     * @returns void
     */
    push(element: T): void {
        this.queueDataStore[this.queueSize++] = element;
    }

    /**
     * Removes and returns the element at the front of the queue.
     * If the queue is empty, returns undefined.
     * @returns The element at the front of the queue, or undefined if the queue is empty.
     */
    pop(): T | undefined {
        if (this.queueSize > 0) {
            this.queueSize--;
            return this.queueDataStore.shift();
        }
    }

    /**
     * Clears the queue by resetting the queue size and emptying the queue data store.
     */
    clear(): void {
        this.queueSize = 0;
        this.queueDataStore = [];
    }
}
