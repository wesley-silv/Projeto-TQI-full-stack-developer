var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTMl = currentNumber
}
function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTMl = currentNumber
}
