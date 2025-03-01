const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let firstDigit = minutes.toString()[0];
  let secondDigit = minutes.toString()[1];

  minDecElement.innerHTML = firstDigit;
  minUniElement.innerHTML = secondDigit;
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  let firstDigit = seconds.toString()[0];
  let secondDigit = seconds.toString()[1];

  secDecElement.innerHTML = firstDigit;
  secUniElement.innerHTML = secondDigit;
}

// BONUS
function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.currentMilliseconds
  );
  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit() {
  let newListItem = document.createElement('li');
  newListItem.innerHTML = `${chronometer.split()}`;
  splitsElement.appendChild(newListItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.className = `btn stop`;
  btnLeftElement.innerHTML = `STOP`;
}

function setSplitBtn() {
  btnRightElement.className = `btn split`;
  btnRightElement.innerHTML = `SPLIT`;
}

function setStartBtn() {
  btnLeftElement.className = `btn start`;
  btnLeftElement.innerHTML = `START`;
}

function setResetBtn() {
  minDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0;
  secDecElement.innerHTML = 0;
  secUniElement.innerHTML = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    chronometer.start(printTime, printMilliseconds);
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    chronometer.stop();
    clearInterval();
    btnRightElement.className = `btn reset`;
    btnRightElement.innerHTML = `RESET`;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn reset') {
    setResetBtn();
    clearSplits();
    chronometer.reset();
  } else {
    printSplit();
  }
});
