const nums = [1, 2, 3, 4, 5];

const createNumPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, Math.random() * 1000);
  });
};

const numPromises = nums.map((val) => createNumPromise(val));

const resolveAllPromisesInOrder = async () => {
  try {
    const nums = await Promise.all(numPromises);
    return nums;
  } catch (error) {
    console.error(error);
  }
};

const resolvePromisesOutOfOrder = () => {
  return new Promise((resolve, reject) => {
    const res: void | number[] | PromiseLike<void> = [];
    let numResolved = 0;
    try {
      numPromises.forEach(async (promise, index) => {
        const num = await promise;
        res.push(num);
        numResolved++;
        if (numResolved === numPromises.length) resolve(res);
      });
    } catch (error) {
      console.error(error);
    }
  });
};

resolveAllPromisesInOrder().then((val) => console.log(val));
resolvePromisesOutOfOrder().then((val) => console.log(val));
