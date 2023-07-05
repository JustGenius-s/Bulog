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
  pos = 0;
  listDataStore: T[] = [];

  /**
   * Returns the number of elements in the list.
   * @returns {number} The number of elements in the list.
   */
  size(): number {
    return this.listSize;
  }

  /**
   * Removes all elements from the list.
   */
  clear() {
    this.listSize = 0;
    this.pos = 0;
    this.listDataStore = [];
  }

  /**
   * Returns the element at the current position in the list.
   * @returns {T} The element at the current position in the list.
   */
  getElement(): T {
    return this.listDataStore[this.pos];
  }

  /**
   * Returns the index of the first occurrence of the specified element in the list, or -1 if the list does not contain the element.
   * @param {T} element The element to search for in the list.
   * @returns {number} The index of the first occurrence of the specified element in the list, or -1 if the list does not contain the element.
   */
  find(element: T): number {
    return this.listDataStore.indexOf(element);
  }

  /**
   * Adds a new element to the end of the list.
   * @param {T} element The element to add to the list.
   */
  append(element: T) {
    this.listDataStore[this.listSize++] = element;
  }

  /**
   * Removes the first occurrence of the specified element from the list.
   * @param {T} element The element to remove from the list.
   * @returns {boolean} True if the element was removed successfully, false otherwise.
   */
  remove(element: T): boolean {
    const index = this.find(element);
    if (index > -1) {
      this.listDataStore.splice(index, 1);
      this.listSize--;
      return true;
    }
    return false;
  }

  /**
   * Inserts a new element into the list after a specified element.
   * @param {T} element The element to insert into the list.
   * @param {T} after The element to insert the new element after.
   * @returns {boolean} True if the element was inserted successfully, false otherwise.
   */
  insert(element: T, after: T): boolean {
    const insertPos = this.find(after);
    if (insertPos > -1) {
      this.listDataStore.splice(insertPos + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  /**
   * Sets the current position to the first element of the list.
   */
  font() {
    this.pos = 0;
  }

  /**
   * Sets the current position to the last element of the list.
   */
  end() {
    this.pos = this.listSize - 1;
  }

  /**
   * Sets the current position to the next element of the list.
   */
  next() {
    if (this.pos < this.listSize) {
      this.pos++;
    }
  }

  /**
   * Sets the current position to the previous element of the list.
   */
  prev() {
    if (this.pos > 0) {
      this.pos--;
    }
  }

  /**
   * Returns the current position in the list.
   * @returns {number} The current position in the list.
   */
  currPos(): number {
    return this.pos;
  }

  /**
   * Sets the current position to a specified position in the list.
   * @param {number} position The position to set the current position to.
   * @warning Unsafe operation.
   */
  moveTo(position: number) {
    if (position < 0 || position >= this.listSize) {
      throw new Error("Invalid position");
    }
    this.pos = position;
  }

  /**
   * Returns true if the list contains the specified element, false otherwise.
   * @param {T} element The element to search for in the list.
   * @returns {boolean} True if the list contains the specified element, false otherwise.
   */
  contains(element: T): boolean {
    return this.listDataStore.includes(element);
  }
}
