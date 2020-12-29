let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
};

function criarBG() {
  context.fillStyle = "lightGreen";
  context.fillRect(0,0,16 * box, 16 * box);
}

function criaCobrinha() {
  snake.forEach(e => {
    context.fillStyle = "green";
    context.fillRect(e.x, e.y, box, box);    
  });
}

criarBG();
criaCobrinha();
