var c = document.getElementById("pattern");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var font_size = 30;
var columns = c.width / font_size;
var character = "01";
character = character.split("");
var drops = [];

function init() {
  drops = [];
  for (var x = 0; x < columns; x++) drops[x] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#FFF";
  //   ctx.font = font_size + "px monospace";
  for (var i = 0; i < drops.length; i++) {
    var text = character[Math.floor(Math.random() * character.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

init();
let raining = setInterval(draw, 60);

const handleResize = () => {
  clearInterval(raining);
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  columns = c.width / font_size;
  c.setAttribute("width", c.width);
  c.setAttribute("height", c.height);
  init();
  raining = setInterval(draw, 60);
};

window.addEventListener("resize", handleResize);
