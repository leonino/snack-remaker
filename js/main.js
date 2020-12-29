let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
};
let direction = "right";
let food = novaComida();

function criarBG() {
  context.fillStyle = "lightGreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criaCobrinha() {
  snake.forEach(e => {
    context.fillStyle = "green";
    context.fillRect(e.x, e.y, box, box);
  });
}

function novaComida() {
  return {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
  };
}

function criarComida() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

function houveChoque() {
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y)
      return true;
  }
  return false;
}

function iniciarJogo() {

  if (snake[0].x > (15 * box) && direction == 'right') snake[0].x = 0;
  if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
  if (snake[0].y > (15 * box) && direction == 'down') snake[0].y = 0;
  if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

  criarBG();
  criaCobrinha();
  criarComida();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;


  let newHead = {
    x: snakeX,
    y: snakeY
  };

  if (food.x == newHead.x && food.y == newHead.y) {
    food = novaComida();
  } else {
    snake.pop();
  }

  if(houveChoque()) {
    console.log("Houve CHOQUE!!!");
    clearInterval(jogo);
    alert("GAME OVER :(");
  };

  snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
