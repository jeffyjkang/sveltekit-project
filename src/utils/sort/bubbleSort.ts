export const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j ++) {
      if (arr[j] > arr[j + 1]) {
        const tempElement = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = tempElement
      }
    }
  }
  return arr;
}

export function* bubbleSortGenerator(arr: number[]) :
  Generator<{arr: number[]; _i: number; _j: number; _k: number | undefined;} |number[]> {
  let _i: number, _j: number, _k: number | undefined;

  for (let i = 0; i < arr.length; i++) {
    _i = i;
    _j = i + 1;
    _k = undefined;
    yield {arr, _i, _j, _k}
    for (let j = 0; j < arr.length - i - 1; j++) {
      _j = j;
      _k = j + 1;
      yield {arr, _i, _j, _k}
      if (arr[j] > arr[j + 1]){
        const tempElement = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempElement;
        yield {arr, _i, _j, _k}
      }
    }
  }
  return arr;
}

