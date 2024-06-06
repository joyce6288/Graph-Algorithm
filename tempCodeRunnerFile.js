class from the Graph.js file
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

// Use the bfs (Breadth-First Search) method to explore the graph
// The bfs method starts at a given vertex and explores all the neighbor vertices at the present depth before moving on to vertices at the next depth level
let start = 'A'; // start vertex for the bfs method
let bfsResult = graph.bfs(start);

// Log the result of the bfs method to the console
// This will print the order in which the vertices were visited during the bfs
console.log(bfsResult);