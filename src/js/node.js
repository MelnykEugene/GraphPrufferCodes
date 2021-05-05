export default class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = [];
    this.degree = 0;
    this.x = 0;
    this.y = 0;
    this.nextX = this.x;
    this.nextY = this.y;
  }

  secondaryConstructor(neighbor) {
    this.neighbors.push(neighbor);
    this.degree = 1;
    neighbor.neighbors.push(this);
    neighbor.degree += 1;
    this.x = Math.random() - 0.5;
    this.y = Math.random() - 0.5;
    this.nextX = this.x;
    this.nextY = this.y;
  }
}
