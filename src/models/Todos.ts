export class Todos {
  id: number;
  timestamp: number;
  constructor(public title: string, public done: boolean) {
    this.id = this.generateId();
    this.timestamp = Date.now();
  }
  generateId() {
    const uniqeID = Date.now() * Math.random();
    return uniqeID;
  }
}
