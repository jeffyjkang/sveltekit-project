export const quickSort = (arr: number[], firstIndex = 0, lastIndex = arr.length - 1): number[] => {
  if (firstIndex >= lastIndex) {
    return;
  }

  const pivotValue = arr[lastIndex];
  let leftPointer = firstIndex;
  let rightPointer = lastIndex;

  while (leftPointer < rightPointer) {
    while (arr[leftPointer] <= pivotValue && leftPointer < rightPointer) {
      leftPointer++;
    }
    while (arr[rightPointer] >= pivotValue && leftPointer < rightPointer) {
      rightPointer--;
    }
    [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
  }
  [arr[leftPointer], arr[lastIndex]] = [arr[lastIndex], arr[leftPointer]];

  quickSort(arr, firstIndex, leftPointer - 1);
  quickSort(arr, leftPointer + 1, lastIndex);
}

