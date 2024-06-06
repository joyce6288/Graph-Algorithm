// Define a PriorityQueue class
class PriorityQueue {
    // Constructor function initializes an empty array to store the values
    constructor() {
        this.values = [];
    }

    // The enqueue method takes a value and a priority, creates an object from them, and adds it to the end of the values array
    // Then it sorts the values array based on priority
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    // The dequeue method removes and returns the first element from the values array
    // Since the array is sorted based on priority, this will remove the element with the highest priority (lowest priority number)
    dequeue() {
        return this.values.shift();
    }

    // The sort method sorts the values array based on priority
    // It uses the Array.prototype.sort method, which sorts elements in place and returns the array
    // The sort order is ascending, so elements with lower priority numbers will come first
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

// Export the PriorityQueue class so it can be required in other files
module.exports = PriorityQueue;