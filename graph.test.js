// Importing the Graph class from the Graph.js file
const Graph = require('./Graph'); // adjust the path if necessary

// Test for the BFS method of the Graph class
test('BFS should return the correct result', () => {
    // Creating a new graph and adding vertices
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    // Adding edges between the vertices
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');

    // Testing the BFS method and comparing the result with the expected output
    expect(graph.bfs('A')).toEqual(['A', 'B', 'C', 'D', 'E']); // adjust the expected result based on your BFS implementation
});

// Test for the DFS method of the Graph class
test('DFS should return the correct result', () => {
    // Creating a new graph and adding vertices
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    // Adding edges between the vertices
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');

    // Testing the DFS method and comparing the result with the expected output
    expect(graph.dfs('A')).toEqual(['A', 'B', 'D', 'E', 'C']); // adjust the expected result based on your graph's DFS implementation
});

// Test for the Dijkstra's algorithm of the Graph class
test('Dijkstra should return the correct result', () => {
    // Creating a new graph and adding vertices
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    // Adding weighted edges between the vertices
    graph.addEdge('A', 'B', 1);
    graph.addEdge('B', 'C', 2);
    graph.addEdge('B', 'D', 1);
    graph.addEdge('D', 'E', 3);
    graph.addEdge('C', 'E', 1);

    // Testing the Dijkstra's method and comparing the result with the expected output
    expect(graph.dijkstra('A', 'E')).toEqual({
        path: ['A', 'B', 'C', 'E'],
        totalWeight: 4 // adjust based on your graph's Dijkstra implementation
    });
});

// Test for the findPath method of the Graph class
test('findPath should return the correct result', () => {
    // Creating a new graph and adding vertices
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    // Adding edges between the vertices
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');

    // Testing the findPath method and comparing the result with the expected output
    expect(graph.findPath('A', 'E')).toEqual(['A', 'C', 'E']); // adjust based on your graph's findPath implementation
});