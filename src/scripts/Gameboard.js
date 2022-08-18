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
    console.log('receiving attack');
    if (!attack) return undefined;
    if (Array.isArray(attack) === false) return undefined;

    // Variables that validate what changes affect the gameboard
    const missedStatus = checkArrayForMatch(this.missedAttacks);
    const successStatus = checkArrayForMatch(this.successfulAttacks);
    const fleetStatus = checkArrayForMatch(this.fleetCoordinates);

    // Function for checking how attack will affect the gameboard
    function checkArrayForMatch(gameBoardArray) {
      let status = false;
      gameBoardArray.forEach(coordinate => {
        for (let i = 0; i < coordinate.length; i++) {
          if (attack.includes(coordinate[i])) {
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
      if (shipGraveyard.length === 5) {
        return 'all ships have been sunk';
      }
      if (shipGraveyard.length !== 5) {
        return 'hit and sunk';
      }
    }
  }

  addBoatsToBoard(player) {
    const carrier = document.querySelectorAll(`.carrier-${player}`);
    const battleship = document.querySelectorAll(`.battleship-${player}`);
    const cruiser = document.querySelectorAll(`.cruiser-${player}`);
    const submarine = document.querySelectorAll(`.submarine-${player}`);
    const destroyer = document.querySelectorAll(`.destroyer-${player}`);
    
    let carrierCoordinates = [];
    carrier.forEach(carrierCell => {
      const cellId = Number(carrierCell.id.split('-')[1]);
      carrierCoordinates.push(cellId);
    })
    this.shipPlacement('Carrier', carrierCoordinates);

    let battleshipCoordinates = [];
    battleship.forEach(battleshipCell => {
      const cellId = Number(battleshipCell.id.split('-')[1]);
      battleshipCoordinates.push(cellId);
    })
    this.shipPlacement('Battleship', battleshipCoordinates);

    let cruiserCoordinates = [];
    cruiser.forEach(cruiserCell => {
      const cellId = Number(cruiserCell.id.split('-')[1]);
      cruiserCoordinates.push(cellId);
    })
    this.shipPlacement('Cruiser', cruiserCoordinates);

    let submarineCoordinates = [];
    submarine.forEach(submarineCell => {
      const cellId = Number(submarineCell.id.split('-')[1]);
      submarineCoordinates.push(cellId);
    })
    this.shipPlacement('Submarine', submarineCoordinates);

    let destroyerCoordinates = [];
    destroyer.forEach(destroyerCell => {
      const cellId = Number(destroyerCell.id.split('-')[1]);
      destroyerCoordinates.push(cellId);
    })
    this.shipPlacement('Destroyer', destroyerCoordinates);
  }

  displayAttack(attackedCell, attackStatus, shipYard, whoReceivesAttack) {
    console.log(attackedCell, attackStatus);

    if (attackStatus === 'hit') {
      const cellToMark = document.querySelector(`#${whoReceivesAttack}-${attackedCell}`);
      cellToMark.classList.add('boat-hit');
    }
    if (attackStatus === 'miss') {
      const cellToMark = document.querySelector(`#${whoReceivesAttack}-${attackedCell}`);
      cellToMark.classList.add('missed-shot');
    }
    if (attackStatus === 'hit and sunk') {
      shipYard.forEach(ship => {
       const shipLength = ship.lengthOfShip;
       shipLength.forEach(coordinate => {
        if (coordinate.toString().includes(attackedCell.toString())) {
          const sunkShip = ship.lengthOfShip;
          sunkShip.forEach(sunkCoordinate => {
            const coordinateInDOM = document.querySelector(`#${whoReceivesAttack}-${sunkCoordinate}`);
            coordinateInDOM.classList.remove('boat-hit');
            coordinateInDOM.classList.add('boat-sunk');
          })
        }
       })
      })
    }
  }

}