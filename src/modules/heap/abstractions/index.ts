interface Heap<T> {
  push(val: T): void;
  pop(): T | undefined;
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

  pop(): number | undefined {
    if (this.#heapArray.length === 1)
      throw new Error("Cannot pop off an empty heap.");
    if (this.#heapArray.length === 2) return this.#heapArray.pop();

    const returnVal = this.#heapArray[1];
    // move last element to root
    // @ts-ignore
    this.#heapArray[1] = this.#heapArray.pop();
    let i = 1;
    // iterate while we have a left child
    while(2 * i < this.#heapArray.length) {
        if(2 * i + 1 < this.#heapArray.length) {
            if(this.#heapArray[2 * i] < this.#heapArray[2 * i + 1]) {
                this.#swap(2 * i, i)
                i = 2 * i
            } else {
                this.#swap(2 * i + 1, i)
                i = 2 * i + 1
            }
        } else {
            if(this.#heapArray[2 * i] > this.#heapArray[i]) {
                break;
            } else {
                this.#swap(2 * i, i)
                i = 2 * i
            }
        }
    }

    return returnVal;
  }

  printValues(): void {
    console.log(this.#heapArray);
  }

  #swap(i: number, j: number): void {
    const temp = this.#heapArray[i];
    this.#heapArray[i] = this.#heapArray[j];
    this.#heapArray[j] = temp;
  }
}

export default MinHeap;
