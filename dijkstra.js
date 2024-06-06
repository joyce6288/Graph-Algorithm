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

// Add edges to the graph with weights
// These represent the connections or paths between the vertices
// The third argument to addEdge is the weight of the edge
graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 3);
graph.addEdge('B', 'D', 2);
graph.addEdge('C', 'E', 4);
graph.addEdge('D', 'E', 1);

// Use the Dijkstra's algorithm to find the shortest path from the start vertex to the end vertex
// The start vertex is 'A' and the end vertex is 'E'
let start = 'A'; // start vertex for the Dijkstra's algorithm
let end = 'E'; // end vertex for the Dijkstra's algorithm
let dijkstraResult = graph.dijkstra(start, end);

// Log the result of the Dijkstra's algorithm to the console
// This will print the shortest path from 'A' to 'E' and the total weight of that path
console.log(dijkstraResult);