# 3C. Write a non-directional graph program
Write a program that counts the number of nodes in a non-directional graph and finds out whether there is a cycle in the graph

# Task setup & prerequisites

Make sure you have node installed. Then run

```
npm install
```

Then compile the project 

```
tsc
```

And run the program
```
node graph.js
```

# About the solution

This solution is implemented using TypeScript. I chose it due to my personal prefernces, I think it might make the code more readable as well.

When it comes to the actual implementation I went with **Depth-First Search (DFS)** algorithm. DFS explores each path in a recursive way, traversing as deep as possible before backtracking.  It's also simple to implement. I thought that these reasons matched well with the goal of detecting possible cycles, since we have to backtrack when we encounter an already visited node.

## Practical implementation (two main functions)

### createGraph 
This function creates a graph from the given nodes and paths. The graph is implemented as an adjacency list where the keys are individual nodes and values their children. This is done with JavaScript Map. **The amount of nodes is calculated from the size of the created graph**.

```
function createGraph(nodes: number[], paths: number[][]): Map<number, number[]>
```

### hasCycle
This is the DFS implementation and **finds wether the graph has a cycle or not**. The function takes a graph and a starting node as parameters. It also intializes a set to keep track of visited nodes, and parent node to keep track of where we are coming from.

```
function hasCycle(
	graph: Map<number, number[]>,
	start: number,
	visited: Set<number> = new Set(),
	parent: number = null
): boolean 
```

In short the steps are these:
1. Add node to visited list
2. Get chidren of the current node
3. Loop through the children
4. If the child node has not been visited, keep traversing the path
5. If the child the child node has been visited and is not the parent -> cycle is found
6. Otherwise return false -> the graph has no cycles

# How to test the program

The program code includes two example graphs similar to the ones in the task description. If you want to test the program yourself, you can modify or add more graphs like this:


```
// Specify nodes in the graph
const nodes = [1, 2, 3, 4, 5, 6];

// Specify paths/edges in the graph
const paths = [
	[1, 2],
	[2, 3],
	[2, 4],
	[4, 5],
	[4, 6],
];

// Create a graph by calling createGrah with the paramters.
const graph = createGraph(nodes, paths);

// Get the result
const result = hasCycle(graph)
const totalNodes = graph.size
```
