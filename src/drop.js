class Drop {
  constructor() {
    this.x = Math.random() * innerWidth;
    this.y = -20;
    this.v = Math.random() * 30 + 10; 
    this.width = Math.random() * 5 + 5;
    this.height = Math.random() * 5 + 15;
    this.fillStyle = `rgba(154, 18, 179, ${this.v / 40})`
  }
  move() {
    this.y += this.v; 
  }
}

export default Drop;
