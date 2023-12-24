// List:
// 列表是一组有序的数据。每个列表中的数据项称为元素。在 JavaScript 中，列表中的元素可以是任意数据类型。列表中可以保存多少元素并没有事先限定，实际使用时元素的数量受到程序内存的限制。
// 列表中的元素个数成为列表的长度。在计算机科学中，列表和数组是两个不同的概念。在其他语言中，列表和数组之间存在着明确的区别。但是在 JavaScript 中，数组就是列表。
// 为了弥补 JavaScript 中数组的不足，我们需要创建一个列表类来实现列表抽象数据类型。在下面的代码中，我们将使用一个数组来存储列表中的元素。

/**
 * A class representing a list data structure.
 * @template T The type of elements in the list.
 */
export default class List<T> {
    listSize = 0;
    listDataStore: T[] = [];

    /**
     * Returns the number of elements in the list.
     * @returns {number} The number of elements in the list.
     */
    size(): number {
        return this.listSize;
    }

    /**
     * Returns the index of the first occurrence of the specified element in the list, or -1 if the list does not contain the element.
     * @param {T} element The element to search for in the list.
     * @returns {number} The index of the first occurrence of the specified element in the list, or -1 if the list does not contain the element.
     */
    findIndex(element: T): number {
        return this.listDataStore.indexOf(element);
    }

    /**
     * Adds a new element to the end of the list.
     * @param {T} element The element to add to the list.
     */
    append(element: T): void {
        this.listDataStore[this.listSize++] = element;
    }

    /**
     * Deletes an element at the specified position in the list.
     * @param pos The position of the element to delete.
     * @throws {LinkedListError} If the position is out of bounds.
     */
    delete(pos: number): void {
        if (pos < 0 || pos >= this.listSize) {
            throw new LinkedListError("Index out of bounds");
        }
        this.listDataStore.splice(pos, 1);
        this.listSize--;
    }

    /**
     * Removes the first occurrence of the specified element from the list.
     * @param {T} element The element to remove from the list.
     * @returns {boolean} True if the element was removed successfully, false otherwise.
     */
    deleteElement(element: T): boolean {
        const index = this.findIndex(element);
        if (index > -1) {
            this.listDataStore.splice(index, 1);
            this.listSize--;
            return true;
        }
        return false;
    }


    /**
     * Inserts an element at the specified position in the list.
     * @param pos - The position at which to insert the element.
     * @param element - The element to be inserted.
     * @throws {ListError} If the index is out of bounds.
     */
    insert(pos: number, element: T): void {
        if (pos < 0 || pos > this.listSize) {
            throw new ListError("Index out of bounds");
        }
        this.listDataStore.splice(pos, 0, element);
        this.listSize++;
    }

    /**
     * Inserts a new element into the list after a specified element.
     * @param {T} element The element to insert into the list.
     * @param {T} after The element to insert the new element after.
     * @returns {boolean} True if the element was inserted successfully, false otherwise.
     */
    insertAfter(element: T, after: T): boolean {
        const insertPos = this.find(after);
        if (insertPos > -1) {
            this.listDataStore.splice(insertPos + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    }

    /**
     * Returns true if the list contains the specified element, false otherwise.
     * @param {T} element The element to search for in the list.
     * @returns {boolean} True if the list contains the specified element, false otherwise.
     */
    contains(element: T): boolean {
        return this.listDataStore.includes(element);
    }

    /**
     * Removes all elements from the list.
     */
    clear(): void {
        this.listSize = 0;
        this.listDataStore = [];
    }
}

export class ListError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ListError";
    }
}