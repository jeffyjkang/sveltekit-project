export const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      const tempElement = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = tempElement;
    }
  }
  return arr;
}

export function* selectionSortGenerator(arr: number[]):
  Generator<{arr: number[]; _i: number; _j: number; _k: number | undefined;} |number[]> {
  let _i: number, _j: number; let _k: number | undefined;
  for (let i = 0; i < arr.length -1; i++) {
    _i = i;
    _k = undefined;
    // clear swap index
    yield {arr, _i, _j, _k}
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      _j = j;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        _k = minIndex
        // move pointer 2
        yield {arr, _i, _j, _k}
      }
      yield {arr, _i, _j, _k}
    }
    if (minIndex !== i) {
      const tempElement = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = tempElement;
      // swap
      yield {arr, _i, _j, _k};
    }
  }
  return arr;
}
/*
{
  next: returns value yielded by the yield expression next() -> { value: any; done: boolean }
  return: returns value and finishes generator
  throw: throws an error, (finishes generator)
}
*/

