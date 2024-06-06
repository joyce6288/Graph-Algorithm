// Import the Graph class from the Graph.js file
const Graph = require('./Graph.js');

// Create a new instance of the Graph class
const graph = new Graph();

// Add vertices to the graph
// These represent the nodes or points in the graph
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

// Add edges to the graph
// These represent the connections or paths between the vertices
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

// Use the dfs (Depth-First Search) method to explore the graph
// The dfs method starts at a given vertex and explores as far as possible along each branch before backtracking
let start = 'A'; // start vertex for the dfs method
let dfsResult = graph.dfs(start);

// Log the result of the dfs method to the console
// This will print the order in which the vertices were visited during the dfs
console.log(dfsResult);