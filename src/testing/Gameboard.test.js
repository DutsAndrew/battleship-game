import { Gameboard } from "../scripts/Gameboard";
import { Ship } from '../scripts/Ship';

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

  it('gameboard can receive attacks', () => {
    newBoard.shipPlacement('Carrier', [0, 1, 2, 3, 4]);
    
  })

})