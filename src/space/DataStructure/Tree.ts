/**
 * @file List.ts - A collection of Tree for use in various algorithms.
 */

export class BinaryTree<T> {
    nodes: T[];

    constructor(nodes: T[] = []) {
        this.nodes = nodes;
    }

    value(node: number): T {
        return this.nodes[node];
    }

    left(node: number): number {
        return 2 * node + 1;
    }

    right(node: number): number {
        return 2 * node + 2;
    }

    parent(node: number): number {
        return Math.floor((node - 1) / 2);
    }
}