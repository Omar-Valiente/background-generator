// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// const body = document.getElementsByTagName("BODY")[0];
// const button = document.getElementsByTagName("BUTTON")[0];

// function changeBackground() {
//   body.style.background = `linear-gradient(to right,${getRandomHEXColor()},${getRandomHEXColor()})`;
// }

// function getRandomHEXColor() {
//   const SEED = "0123456789abcdef";
//   let output = "#";
//   while (output.length < 7) {
//     output += SEED[Math.floor(Math.random() * SEED.length)];
//   }
//   return output;
// }

// button.addEventListener("click", changeBackground);

// function setGradient() {
//   body.style.background =
//     "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

//   css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rdmButton = document.createElement("button");
rdmButton.classList.add("rdmButton");
rdmButton.textContent = "Random";
body.appendChild(rdmButton);

function setGradient() {
  body.style.background =
    "linear-gradient( to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}
function randomColor() {
  var randomR = Math.floor(Math.random() * 256);
  var randomG = Math.floor(Math.random() * 256);
  var randomB = Math.floor(Math.random() * 256);
  return { r: randomR, g: randomG, b: randomB };
}

function rgbToHex(rgb) {
  var hexR = rgb.r.toString(16).padStart(2, "0");
  var hexG = rgb.g.toString(16).padStart(2, "0");
  var hexB = rgb.b.toString(16).padStart(2, "0");
  return "#" + hexR + hexG + hexB;
}

function rdmGradient() {
  var randomColor1 = randomColor();
  var randomColor2 = randomColor();

  color1.value = rgbToHex(randomColor1);
  color2.value = rgbToHex(randomColor2);

  setGradient();
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rdmButton.addEventListener("click", rdmGradient);
