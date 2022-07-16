export {
  Gameboard
}

import { Ship } from './Ship';

class Gameboard {
  constructor() {
    this.missedAttacks = [];
    this.successfulAttacks = [];
    this.sunkShips = [];
    this.shipYard = [];
    this.fleetCoordinates = [];
  }
  shipPlacement(typeOfShip, shipCoordinates) {
    let newShip = new Ship(`${typeOfShip}`, shipCoordinates);
    this.shipYard.push(newShip);
    this.fleetCoordinates.push(shipCoordinates);
    return newShip;
  }
  receiveAttack(attack) {
    let attackResult;
    if (this.missedAttacks.includes(attack) || this.successfulAttacks.includes(attack)) {
      attackResult = null;
      return attackResult;
    } else if (this.fleetCoordinates.includes(attack)) {
      this.fleetCoordinates.forEach(array => {
        array.every((coordinate, index) => {
          if (coordinate === this.successfulAttacks[index]) {
            attackResult = 'sunk';
            this.successfulAttacks.push(attack);
            return attackResult;
          }
        })
      });
      attackResult = true;
      this.successfulAttacks.push(attack);
      return attackResult;
    } else if (!this.fleetCoordinates.includes(attack)) {
      attackResult = false;
      this.missedAttacks.push(attack);
      return attackResult;
    }
  }
}