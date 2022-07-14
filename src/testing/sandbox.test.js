import { Ship } from '../scripts/sandbox';

describe('Ship tests', () => {

  let smallBoat;
  let bigBoat;

  beforeEach(() => {
    smallBoat = new Ship('small boat', [0, 1, 2,]);
    bigBoat = new Ship('big boat', [5, 6, 7, 8, 9]);
  });

  it('boat gets created', () => {
    expect(smallBoat.lengthOfShip.length).toBe(3);
  })
})