import { expect, test } from "vitest";

import { LinkedList } from "../src/space/DataStructure/LinkedList";

// 数据结构测试

// 链表
test("LinkedList", () => {
    const linkedList = new LinkedList<number>();

    // 测试链表初始化
    expect(linkedList.size()).toBe(0);
    expect(linkedList.findIndex(0)).toBe(-1);
    expect(() => linkedList.delete(0)).toThrowError("Index out of bounds");

    // 测试链表添加元素
    linkedList.append(1);
    linkedList.append(20);
    linkedList.append(25);
    expect(linkedList.size()).toBe(3);

    // 测试链表插入元素
    linkedList.insert(2, 30);
    expect(linkedList.size()).toBe(4);
    expect(linkedList.get(1)).toBe(20);
    expect(linkedList.get(2)).toBe(30);

    // 测试链表删除元素
    linkedList.delete(1);
    expect(linkedList.size()).toBe(3);
    expect(linkedList.get(1)).toBe(30);
});
