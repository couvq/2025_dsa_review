interface Heap<T> {
  push(val: T): void;
  pop(): T;
}

class MinHeap implements Heap<number> {
  #heapArray: number[];

  constructor(initialValues?: number[]) {
    this.#heapArray = initialValues ?? [-Infinity];
  }

  push(val: number): void {
    this.#heapArray.push(val);

    let i = this.#heapArray.length - 1;
    let parentIndex = Math.floor(i / 2);

    while (this.#heapArray[i] < this.#heapArray[parentIndex]) {
      this.#swap(i, parentIndex);
      i = parentIndex;
      parentIndex = Math.floor(i / 2);
    }
  }

  pop(): number {
    throw new Error("Method not implemented.");
  }

  printValues(): void {
    console.log(this.#heapArray);
  }

  #swap(i: number, j: number): void {
    const temp = this.#heapArray[i];
    this.#heapArray[i] = j;
    this.#heapArray[j] = temp;
  }
}

export default MinHeap;
