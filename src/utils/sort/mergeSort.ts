export const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }

  const midPoint = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, midPoint));
  const rightArr = mergeSort(arr.slice(midPoint));
  
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    sortedArr.push(leftArr[0] > rightArr[0] ? rightArr.shift() : leftArr.shift());
  }
  return sortedArr.concat(leftArr.slice()).concat(rightArr.slice());
}

