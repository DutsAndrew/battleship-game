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

  it('keeps track of turn count', () => {
    playerOne.makeAMove();
    playerTwo.makeAMove();
    playerOne.makeAMove();
    expect(playerOne.turnCounter).toBe(2);
    expect(playerTwo.turnCounter).toBe(1);
  })

  it('checks for win conditions', () => {
    playerTwo.enemyBoatsSunk.push({'boat': 1}, {'boat': 2}, {'boat': 3}, {'boat': 4}, {'boat': 5})
    expect(playerOne.checkForWin()).toBe('no winner yet');
    expect(playerTwo.checkForWin()).toBe('we have a winner, chicken dinner');
  })

  it('computer can generate an attack and validate it', () => {
    expect(playerOne.generateComputerAttack()).toBeGreaterThan(0);
    expect(playerOne.generateComputerAttack()).toBeLessThan(100);
  })

  it('players alternate turns on makeAMove()', () => {
    expect(playerOne.playersTurn).toBe(false);
    playerOne.makeAMove();
    expect(playerOne.playersTurn).toBe(true);
    playerOne.playersTurn = false;
    expect(playerOne.playersTurn).toBe(false);
    expect(playerTwo.playersTurn).toBe(false);
    playerTwo.makeAMove();
    expect(playerTwo.playersTurn).toBe(true);
    playerTwo.playersTurn = false;
    expect(playerTwo.playersTurn).toBe(false);
    expect(playerOne.playersTurn).toBe(false);
  })
})