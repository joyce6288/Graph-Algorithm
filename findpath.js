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

// Use the findPath method to find a path from the start vertex to the end vertex
// The start vertex is 'A' and the end vertex is 'E'
let start = 'A'; // start vertex
let end = 'E'; // end vertex
let path = graph.findPath(start, end);

// Log the path to the console
// This will print the path from 'A' to 'E' if one exists
console.log(path); 