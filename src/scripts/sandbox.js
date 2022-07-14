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
    return `${this.type}, ${this.lengthOfShip}, ${this.hits}, ${this.sunk}`;
  }
  whatIsTheLength() {
    return this.lengthOfShip.length;
  }
  hit(location) {
    this.hits.push(location);
  }
  isSunk() {
    if (this.hits.length === length) {
      this.sunk = true;
      return this.sunk;
    }
  }
}