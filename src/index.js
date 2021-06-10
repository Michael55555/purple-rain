import Drop from "./drop.js";

let ctx = null;
let drops = new Array(50).fill().map(() => new Drop());

function init() {
  const canvas = document.querySelector("canvas");

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  ctx = canvas.getContext("2d");
  animate();
}

function render() {
  for (let i = 0; i < 4; i++) {
    drops.push(new Drop());
  }

  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let drop of drops) {
    drop.move();
    ctx.fillStyle = drop.fillStyle;
    ctx.fillRect(drop.x, drop.y, drop.width, drop.height);
  }

  drops = drops.filter((drop) => drop.y < innerHeight);
}

function animate() {
  setTimeout(() => {
    requestAnimationFrame(animate);
  }, 1000 / 50);
  render();
}

onload = init;
