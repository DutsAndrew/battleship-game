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
      const attackStatus = handleAttack(this.shipYard);

      // Upon completion of handleAttack(), if a boat is sunk it goes through handleSink() if not, it is returned.
      if (typeof attackStatus === 'object' && attackStatus !== null) {
        const sinkStatus = handleSink(this.sunkShips, attackStatus);
        return sinkStatus;
      } else {
        return attackStatus
      }
    }

    function handleAttack(shipYard) {
      for (const ship in shipYard) {
        for (const shipCoords in shipYard[ship].lengthOfShip) {
          if (attack.includes(shipYard[ship].lengthOfShip[shipCoords])) {
            const convertAttackToNumber = Number(attack);
            shipYard[ship].hits.push(convertAttackToNumber);
            
            // After hit is assigned, this part checks for if/when the hit qualifies as a sink.
            const shipHits = shipYard[ship].hits;
            const shipLocation = shipYard[ship].lengthOfShip; 
            if (shipHits.sort().join(',') === shipLocation.sort().join(',')) {
              const sunkShip = shipYard[ship];
              sunkShip.sunk = true;
              return {
                sunkShip
              }
            } else {
              return 'hit';
            }
          }
        }
      }
    }

    function handleSink(shipGraveyard, ship) {
      shipGraveyard.push(ship);
      if (shipGraveyard.length === 2) {
        return 'all ships have been sunk';
      }
      if (shipGraveyard.length !== 5) {
        return 'hit and sunk';
      }
    }
  }
}