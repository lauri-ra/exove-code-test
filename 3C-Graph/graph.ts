// Function for creating a graph from the given nodes and paths/edges.
function createGraph(nodes: number[], paths: number[][]): Map<number, number[]> {
	// Create the graph as an adjacency list.
	// We have a node as the key and its children as the values
	const graph: Map<number, number[]> = new Map();

	// Add a single node to the graph.
	nodes.forEach((node) => {
		graph.set(node, []);
	});

	// Connect a path/edge between two nodes
	paths.forEach(([parent, child]) => {
		graph.get(parent).push(child);
		graph.get(child).push(parent);
	});

	return graph;
}

// This function uses Depth-First Search (DFS) to traverse the graph and detect cycles
// It returns true if a cycle is found and false otherwise
function hasCycle(
	graph: Map<number, number[]>,
	start: number,
	visited: Set<number> = new Set(),
	parent: number = null
): boolean {
	// Mark the starting node as visited
	visited.add(start);

	// Get all the child nodes
	const children = graph.get(start);

	// Loop through the children
	for (const childNode of children) {
		// If the the child node has not been visited, keep traversing the path.
		if (!visited.has(childNode)) {
			// Call the function recursvily with the child node
			// If a cycle is detected, return true
			if (hasCycle(graph, childNode, visited, start)) {
				return true;
			}
		}
		// If the child node has been visited and is not the parent, a cycle is detected
		else if (childNode !== parent) {
			return true;
		}
	}

	// No cycle detected, return false
	return false;
}

// Initialize varibales for the cyclic graph
const cyclicNodes = [1, 2, 3, 4, 5];
const cyclicPaths = [
	[1, 2],
	[2, 3],
	[2, 4],
	[4, 5],
	[2, 5],
];

// Create the graph, and check the results
const cyclicGraph = createGraph(cyclicNodes, cyclicPaths);
console.log('Total nodes in the cyclic graph:', cyclicGraph.size);
console.log('Does this graph have a cycle', hasCycle(cyclicGraph, 1));

// Initialize varibales for the non-cyclic graph
const nonCyclicNodes = [1, 2, 3, 4, 5, 6];
const nonCyclicPaths = [
	[1, 2],
	[2, 3],
	[2, 4],
	[4, 5],
	[4, 6],
];

const nonCyclicGraph = createGraph(nonCyclicNodes, nonCyclicPaths);
console.log('Total nodes in the non-cyclic graph:', nonCyclicGraph.size);
console.log('Does this graph have a cycle', hasCycle(nonCyclicGraph, 1));
