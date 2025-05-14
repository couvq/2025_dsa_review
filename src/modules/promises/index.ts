/**
 * getKey("foo") -> 12
 * getKey("bar") -> 42
 *
 * want to only make the call once per x ms (I'll use 1000ms in my function) 
 * with all the vals we have called with rather than making multiple calls
 *
 * GET /v1/vals?keys=foo,bar
 * Response:
 * {
 *  "foo": 12,
 *  "bar": 42
 * }
 */

const mockAsyncCall = (keys: string[]): Promise<Record<string, number>> => {
  return new Promise((resolve) => {
    const res: Record<string, number> = {};
    for (const key of keys) {
      res[key] = Math.random() * 100;
    }
    resolve(res);
  });
};

const createGetKey = () => {
  let keys: Array<string> = [];
  let timeoutId: number | undefined = undefined;
  let callbacks: Array<(val: number) => void> = [];

  return (key: string, callback: (val: number) => void): void => {
    keys.push(key);
    callbacks.push(callback);

    if (timeoutId === undefined) {
      timeoutId = setTimeout(async () => {
        const response = await mockAsyncCall(keys);
        console.log(response);
        for (let i = 0; i < callbacks.length; i++) {
          const callback = callbacks[i];
          const key = keys[i];
          callback(response[key]);
        }
        keys = [];
        timeoutId = undefined;
        callbacks = [];
      }, 1000);
    }
  };
};

const callback = (val: number) => console.log(val);
const getKey = createGetKey();
getKey("foo", callback);
getKey("bar", callback);
getKey("baz", callback);
setTimeout(() => {
  getKey("should only call with one key", callback);
}, 2000);
setTimeout(() => {
  getKey("should only call with one key second time", callback);
}, 4000);
