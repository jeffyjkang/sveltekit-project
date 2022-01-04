export const generateArray = (count?: number): number[] => {
  // canvas width limitations
  if (count && (count > 44 || count < 1)) {
    throw new Error('number must be between 1 and 44')
  }
  return Array.from({length: count ?? 44}, () => Math.floor(Math.random() * (100 - 2) + 2));
}

