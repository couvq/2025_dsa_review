import MinHeap from "../abstractions";

const minHeap = new MinHeap([-Infinity, 1, 2, 3])
minHeap.push(7)
console.log('After pushing 7...')
minHeap.printValues()
minHeap.push(0)
console.log('After pushing 0...')
minHeap.printValues()