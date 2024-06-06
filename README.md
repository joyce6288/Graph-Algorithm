# GraphLib: A JavaScript Graph Library

## Overview

GraphLib makes working with graphs in JavaScript simple and straightforward. It's perfect for anyone needing to build or explore graphs, offering key features like BFS (Breadth-First Search), DFS (Depth-First Search), Dijkstra's algorithm for shortest paths, and a way to find paths between two points (findPath(u, v)). Whether you're tackling complex problems or just handling graph data, GraphLib has you covered with the basics to get started easily.

## Installation

To include GraphLib in your project, you can install it directly from the GitHub repository:

```bash
npm install (https://github.com/joyce628/Graph-Algorithm.git)
```

##Quick Start

Here's how you can get started with GraphLib:

1. Create a Graph:

`const Graph = require('graphlib-js');
const graph = new Graph();`

Add Vertices and Edges:

```javascript
// Add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
```
Perform Graph Traversals:
BFS:

`console.log(graph.bfs('A')); // Output might be: ['A', 'B', 'C']`

DFS:

`console.log(graph.dfs('A')); // Output might vary based on graph structure`

Find Shortest Path with Dijkstra's Algorithm:

`console.log(graph.dijkstra('A', 'C')); // Output: shortest path from A to C`

Find a Specific Path:

`console.log(graph.findPath('A', 'C')); // Output: ['A', 'B', 'C']`



