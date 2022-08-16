import { Player } from '../scripts/Player';

describe('Player tests', () => {

  let playerOne;
  let playerTwo;

  beforeEach(() => {
    playerOne = new Player();
    playerTwo = new Player();
  });

  it('creates a new player', () => {
    expect(playerOne).toBeDefined();
  })

  it('checks for win conditions', () => {
    playerTwo.enemyBoatsSunk.push({'boat': 1}, {'boat': 2}, {'boat': 3}, {'boat': 4}, {'boat': 5})
    expect(playerOne.checkForWin()).toBe(false);
    expect(playerTwo.checkForWin()).toBe(true);
  })

  it('computer can generate an attack and validate it', () => {
    expect(playerOne.generateComputerAttack()).toBeGreaterThan(0);
    expect(playerOne.generateComputerAttack()).toBeLessThan(100);
  })
})