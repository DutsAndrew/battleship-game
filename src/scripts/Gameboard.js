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
    const newShip = new Ship(`${typeOfShip}`, shipCoordinates);
    this.shipYard.push(newShip);
    this.fleetCoordinates.push(shipCoordinates);
    return newShip;
  }
  receiveAttack(attack) {
    if (!attack) return undefined;
    if (Array.isArray(attack) === false) return undefined;

    // Variables that validate what changes affect the gameboard
    const missedStatus = checkArrayForMatch(this.missedAttacks);
    const successStatus = checkArrayForMatch(this.successfulAttacks);
    const fleetStatus = checkArrayForMatch(this.fleetCoordinates);

    // Function for checking how attack will affect the gameboard
    function checkArrayForMatch(gameBoardArray) {
      let status = false;
      gameBoardArray.forEach(array => {
        for (let i = 0; i < array.length; i++) {
          if (attack.includes(array[i])) {
            status = true;
          }
        }
      })
      return status;
    }
    
    if (missedStatus === true || (successStatus === true && fleetStatus === true)) {
      return 'move has already been made';
    } else if (fleetStatus === false && missedStatus === false) {
      this.missedAttacks.push(attack);
      return 'miss';
    } else if (fleetStatus === true && successStatus === false) {
      this.successfulAttacks.push(attack);
      const sendAttackToBoat = assignHitValueToShip(this.shipYard);
      // const sunkStatus = checkIfSunk(this.shipYard);
      return 'hit';
    }

    function assignHitValueToShip(shipYard) {
      for (const ship in shipYard) {
        for (const shipCoords in shipYard[ship].lengthOfShip) {
          if (attack.includes(shipYard[ship].lengthOfShip[shipCoords])) {
            const convertAttackToNumber = Number(attack);
            shipYard[ship].hits.push(convertAttackToNumber);
            return shipYard[ship];
          }
        }
      }
    }

    // function checkIfSunk(shipYard) {
    //   return shipYard;
    // }
  }
}