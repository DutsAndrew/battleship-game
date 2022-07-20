import { Gameboard } from "../scripts/Gameboard";

describe('Gameboard tests', () => {

  let newBoard;

  beforeEach(() => {
    newBoard = new Gameboard();
  })

  it('GameBoard gets created', () => {
    expect(newBoard).toBeDefined();
  })

  it('Gameboard has necessary arrays', () => {
    expect(newBoard.missedAttacks.length).toBe(0);
    expect(newBoard.successfulAttacks.length).toBe(0);
    expect(newBoard.sunkShips.length).toBe(0);
    expect(newBoard.shipYard.length).toBe(0);
    expect(newBoard.fleetCoordinates.length).toBe(0);
  })

  it('Gameboard has access to Ship factory', () => {
    expect(newBoard.shipPlacement('Carrier', [0, 1, 2, 3, 4])).toEqual({"hits": [], "lengthOfShip": [0, 1, 2, 3, 4], "shipType": "Carrier", "sunk": false});
  })

  it('When adding a ship, the coordinates of said ship get added to the Gameboard', () => {
    newBoard.shipPlacement('Carrier', [0, 1, 2, 3, 4]);
    expect(newBoard.fleetCoordinates).toStrictEqual([[0, 1, 2, 3, 4]]);
  })

  it('gameboard rejects empty attacks', () => {
    expect(newBoard.receiveAttack()).toBe(undefined);
  })

  it('gameboard rejects non-array objects', () => {
    expect(newBoard.receiveAttack('hello world')).toBe(undefined);
    expect(newBoard.receiveAttack(9)).toBe(undefined);
  })

  it('gameboard can receive hits, if the coordinate is found within the fleet coordinates', () => {
    newBoard.shipPlacement('Submarine', [11, 19, 26]);
    expect(newBoard.receiveAttack([19])).toBe('hit');
  })

  it('gameboard prevents duplicate attacks', () => {
    newBoard.shipPlacement('Carrier', [0, 1, 2, 3, 4]);
    newBoard.shipPlacement('Submarine', [11, 19, 26]);
    newBoard.receiveAttack([19]);
    expect(newBoard.receiveAttack([19])).toBe('move has already been made');
  })

  it('gameboard registers misses when the coordinates are not found within the fleet', () => {
    newBoard.shipPlacement('Carrier', [0, 1, 2, 3, 4]);
    expect(newBoard.receiveAttack([30])).toBe('miss');
  })

  it('gameboard can handle attacks back to back', () => {
    newBoard.shipPlacement('Carrier', [0, 1, 2, 3, 4]);
    newBoard.shipPlacement('Submarine', [11, 19, 26]);
    expect(newBoard.receiveAttack([19])).toBe('hit');
    expect(newBoard.receiveAttack([50])).toBe('miss');
    expect(newBoard.receiveAttack([0])).toBe('hit');
  })

  it('gameboard assigns hit values to individual boats', () => {
    newBoard.shipPlacement('Carrier', [0, 1, 2, 3, 4]);
    newBoard.shipPlacement('Submarine', [11, 19, 26]);
    newBoard.receiveAttack([0]);
    newBoard.receiveAttack([19]);
    newBoard.receiveAttack([11]);
    expect(newBoard.shipYard[0].hits).toStrictEqual([0]);
    expect(newBoard.shipYard[1].hits).toStrictEqual([19, 11]);
  })

})