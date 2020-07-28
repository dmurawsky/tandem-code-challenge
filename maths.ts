export interface AllMaths {
  mean: number,
  median: number,
  standardDeviation: number,
  mode: number[],
}

const findSum = (numbers: number[]): number => numbers.reduce((a, b) => a + b, 0);

const findMean = (numbers: number[]): number => findSum(numbers) / numbers.length

const findMedian = (numbers: number[]): number => {
  const mid = Math.floor(numbers.length / 2);
  const sorted = [...numbers].sort((a, b) => a - b);
  return numbers.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

const findStandardDeviation = (numbers: number[]): number => {
  const mean = findMean(numbers)
  return Math.sqrt(findMean(numbers.map((value) => (value - mean) ^ 2))) || 0;
};

const findMode = (numbers: number[]): number[] => {
  let maxIndex = 0;
  const count: number[] = []

  const counts: number[] = numbers.reduce((prev, num) => {
    prev[num] = (prev[num] || 0) + 1;
    if (prev[num] > maxIndex) {
      maxIndex = prev[num];
    }
    return prev
  }, count)

  return counts.filter(num => num === maxIndex)
}

export default (numbers: number[]): AllMaths => ({
  mean: findMean(numbers),
  median: findMedian(numbers),
  standardDeviation: findStandardDeviation(numbers),
  mode: findMode(numbers),
})