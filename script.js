import { hexToRgb } from './node_modules/@isabellymonteiro/rgb-hex/index.js'

'use strict';


const lengthChoices = 6
const containerColors = document.querySelector('.container__colors')
function startGame() {

  // create an array of length = lengthChoices and fill it with random Hex Colors
  const randomColors = Array.from({ length: lengthChoices }, generateRandomHexColor)

  // pick a random color from the hexColors array
  const rightHexCoor = randomColors[getRndInteger(0, lengthChoices - 1)]
  console.log(rightHexCoor)

  // destructure the result of hexToRgb() and put it in the 'Guess the color' div
  const { r, g, b } = hexToRgb(rightHexCoor)
  document.querySelector('.container__colorToGuess').textContent = `rgb(${r}, ${g}, ${b})`

  // select the template, iterate from colors array and fill
  // the choices div
  const template = document.getElementById('colorSquare')

  randomColors.forEach(color => {
    let clon = template.content.cloneNode(true)
    let colorDiv = clon.querySelector('.color')
    colorDiv.textContent = color
    colorDiv.style.background = color
    containerColors.appendChild(colorDiv)
  });

  return rightHexCoor;
}

let newHex = startGame()

containerColors.addEventListener('click', (e) => {

  if (e.target.textContent === newHex) {
    alert('Correct Answer')
    while (containerColors.firstChild) containerColors.removeChild(containerColors.firstChild)
    newHex = startGame()
  } else {
    containerColors.removeChild(e.target)
  }
})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}