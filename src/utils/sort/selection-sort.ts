export const selectionSort = (arr: number[]) => {
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

