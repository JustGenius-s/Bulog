import { expect, test } from "vitest";
import Stack from '../src/space/DataStructure/Stack'

test("flatten object", () => {
    // 思路：是一个动态规划问题
    // 返回条件为：object 为基本类型
    // 状态转移方程为：object = {key: value} => object = {key + '.' + key: value}
    // 可以把一个 . 操作理解为一次栈操作
    // 本质上就是一个 DFS 遍历

    type Data = String | Number

    function flatten (object: Object) {

        const result = {};

        function dfs (obj, prefix) {
            for (const key in obj) {
                const value = obj[key];

                const ownKey = prefix == '' ? key : prefix + '.' + key;

                if (typeof value !== 'object') {
                    result[ownKey] = value
                }
                else dfs(value, ownKey);
            }
        }
        
        dfs(object, '');

        return result;
    }

    const object = {
        a: {
            b: {
                c: 1,
                d: 2
            },
            e: {
                f: 3,
                g: 4
            }
        },
        d: 2
    }

    expect(flatten(object)).toEqual({
        'a.b.c': 1,
        'a.b.d': 2,
        'a.e.f': 3,
        'a.e.g': 4,
        'd': 2
    })
})