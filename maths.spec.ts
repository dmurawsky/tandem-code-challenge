import maths from './maths';
import data1 from './data/data-1234.json'
import data2 from './data/data-4321.json'

describe('Maths', () => {
  const maths1 = maths(data1)
  const maths2 = maths(data2)
  test('mean', () => {
    expect(maths1.mean).toEqual(49.45705024311183);
    expect(maths2.mean).toEqual(50.34667900948855);
  });
  test('median', () => {
    expect(maths1.median).toEqual(49);
    expect(maths2.median).toEqual(51);
  });
  test('standardDeviation', () => {
    expect(maths1.standardDeviation).toEqual(0.2593471419399391);
    expect(maths2.standardDeviation).toEqual(0);
  });
  test('mode', () => {
    expect(maths1.mode).toEqual([23]);
    expect(maths2.mode).toEqual([62]);
  });
})