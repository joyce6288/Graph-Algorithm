// Importing PriorityQueue class for use in Dijkstra's algorithm
const PriorityQueue = require('./PriorityQueue.js');

// Graph class definition
class Graph {
    // Constructor for the Graph class. By default, the graph is undirected.
    constructor(isDirected = false) {
        this.adjacencyList = {}; // Adjacency list to store the graph. Key is the vertex, value is an array of edges.
        this.isDirected = isDirected; // Boolean to check if the graph is directed or not.
    }

    // Method to add a vertex to the graph
    addVertex(vertex) {
        // Checking if the vertex is a string or a number
        if (typeof vertex !== 'string' && typeof vertex !== 'number') {
            throw new TypeError(`Vertex must be a string or number. Received type ${typeof vertex}`);
        }
        // If the vertex does not exist in the adjacency list, add it.
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Method to add an edge to the graph
    addEdge(vertex1, vertex2, weight = 0) {
        // Checking if the vertices are the same. If they are, throw an error.
        if (vertex1 === vertex2) {
            throw new Error(`Self-loops are not allowed: vertex '${vertex1}' cannot be connected to itself.`);
        }

        // Checking if the edge already exists. If it does, throw an error.
        const edgeExists = this.adjacencyList[vertex1].some(edge => edge.node === vertex2);
        if (edgeExists) {
            throw new Error(`An edge between '${vertex1}' and '${vertex2}' already exists.`);
        }

        // Checking if the weight is a number. If it's not, throw an error.
        if (typeof weight !== 'number') {
            throw new TypeError(`Weight must be a number. Received type ${typeof weight}`);
        }

        // Adding the edge to the adjacency list.
        this.adjacencyList[vertex1].push({ node: vertex2, weight });

        // If the graph is undirected, add the edge in the opposite direction as well.
        if (!this.isDirected) {
            this.adjacencyList[vertex2].push({ node: vertex1, weight });
        }
    }

    // Method to perform Breadth-First Search (BFS) on the graph
    bfs(start) {
        // Checking if the graph is empty. If it is, throw an error.
        if (Object.keys(this.adjacencyList).length === 0) {
            throw new Error(`The graph is empty.`);
        }

        // Checking if the start vertex exists in the graph. If it doesn't, throw an error.
        if (!this.adjacencyList[start]) {
            throw new Error(`Vertex ${start} does not exist in the graph`);
        }

        // Initializing the queue with the start vertex, and setting up the result and visited arrays.
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;

        // While there are vertices in the queue, remove the first one and add it to the result array.
        // Then, add all its unvisited neighbors to the queue.
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    visited[neighbor.node] = true;
                    queue.push(neighbor.node);
                }
            });
        }

        // Return the result array, which contains the vertices in the order they were visited.
        return result;
    }

    // Method to perform Depth-First Search (DFS) on the graph
    dfs(start) {
        const result = [];
        const visited = {};
        // Checking if the graph is empty. If it is, throw an error.
        if (Object.keys(this.adjacencyList).length === 0) {
            throw new Error(`The graph is empty.`);
        }
        // Checking if the start vertex exists in the graph. If it doesn't, throw an error.
        if (!this.adjacencyList[start]) {
            throw new Error(`Vertex ${start} does not exist in the graph`);
        }
        // Helper function for the DFS
        const dfsHelper = vertex => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    return dfsHelper(neighbor.node);
                }
            });
        };
        dfsHelper(start);
        // Return the result array, which contains the vertices in the order they were visited.
        return result;
    }
    
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // to return at end
        let smallest;
        let totalWeight = 0; // to keep track of the total weight

        if (!this.adjacencyList[start] || !this.adjacencyList[finish]) {
            throw new Error(`Both start and finish vertices must exist in the graph.`);
        }

        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // We are done
                // build up path to return at end
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        totalWeight = distances[finish]; // set the total weight to the distance to the finish vertex
        return {
            path: path.concat(smallest).reverse(),
            totalWeight: totalWeight
        };
    }

    findPath(u, v) {
        // Check if both vertices exist in the graph
        if (!this.adjacencyList[u] || !this.adjacencyList[v]) {
            throw new Error(`One or both vertices do not exist in the graph`);
        }

        // Special case: start and end vertices are the same
        if (u === v) return [u];

        const queue = [u];
        const visited = { [u]: true };
        const prev = { [u]: null };

        while (queue.length > 0) {
            const vertex = queue.shift();

            if (vertex === v) {
                // Path found, reconstruct the path from v to u
                const path = [];
                for (let at = v; at !== null; at = prev[at]) {
                    path.push(at);
                }
                path.reverse(); // Reverse to get the path from u to v
                return path;
            }

            // Explore neighbors
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    visited[neighbor.node] = true;
                    prev[neighbor.node] = vertex;
                    queue.push(neighbor.node);
                }
            });
        }

        return null; // Return null if no path is found
    }
}

module.exports = Graph;