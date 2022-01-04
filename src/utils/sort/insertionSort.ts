export const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const tempElement = arr[i];
    let j = i - 1;
    while (j >= 0 && tempElement < arr[j]) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = tempElement;
  }
  return arr;
}

export function* insertionSortGenerator(arr: number[]): Generator<unknown, number[], unknown> {
  let _i: number, _j: number | undefined, _k: number | undefined;

  for (let i = 1; i < arr.length; i++) {
    const tempElement = arr[i];
    let j = i - 1;
    // swap index starts left of i
    _i = i;
    _k = j;
    _j = undefined;
    yield {arr, _i, _j, _k}
    while (j >= 0 && tempElement < arr[j]) {
      arr[j + 1] = arr[j];
      // required for animation and duplicate key error 
      arr[j] = tempElement;
      --j;
      // j pointer, points to tempElement, k pointer, points to stop check
      _j = j + 1;
      _k = j;
      yield {arr, _i, _j, _k}
    }
    // unecessary assignment due to iterative assignments in while block
  }
  return arr;
}

