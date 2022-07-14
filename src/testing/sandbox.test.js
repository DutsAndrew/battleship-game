import { 
  Ship,
  isSunk
} from '../scripts/sandbox';

describe('Ship tests', () => {

  let smallBoat;
  let bigBoat;

  beforeEach(() => {
    smallBoat = new Ship('small boat', [0, 1, 2,]);
    bigBoat = new Ship('big boat', [5, 6, 7, 8, 9]);
  });

  it('boat gets created', () => {
    expect(smallBoat.lengthOfShip.length).toBe(3);
  });

  it('boat reports name', () => {
    expect(bigBoat.shipType).toBe('big boat');
  })

  it('checks if boat is sunk', () => {
    expect(smallBoat.sunk).toBe(false);
  })

  it('boat receives hits', () => {
    expect(bigBoat.hit([0, 1])).toBe(bigBoat.hits);
  })

  it('gathers info on boat', () => {
    bigBoat.hit([7, 8, 9]);
    expect(bigBoat.getInfoOnBoat()).toBe('big boat, 5,6,7,8,9, 7,8,9, false');
  })

  it('returns truthy when boat is sunk', () => {
    smallBoat.hit([0, 1, 2]);
    expect(smallBoat.isSunk()).toBe(true);
  })
})