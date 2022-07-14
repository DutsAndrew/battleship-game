export {
  Ship
}

class Ship {
  constructor(shipType, shipLength) {
    this.shipType = shipType,
    this.lengthOfShip = shipLength;
    this.hits = [];
    this.sunk = false;
  }
  howManyHits() {
    return this.hits;
  }
  getInfoOnBoat() {
    return `${this.shipType}, ${this.lengthOfShip}, ${this.hits}, ${this.sunk}`;
  }
  whatIsTheLength() {
    return this.lengthOfShip.length;
  }
  hit(location) {
    this.hits.push(location);
    return this.hits;
  }
  isSunk() {
    let lengthToString = this.lengthOfShip.toString();
    let hitsToString = this.hits[0].toString();
    if (lengthToString == hitsToString) {
      this.sunk = true;
      return true;
    } else {
      return false;
    }
  }
}