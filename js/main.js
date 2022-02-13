"use strict";
// get elements Input field
function getElementField(inputId) {
  const inputField = document.getElementById(inputId);
  return inputField;
}
// get elements
function getElement(elementId) {
  return document.getElementById(elementId);
}
// generate the pin
function getPin() {
  const randomPin = Math.round(Math.random() * 10000);
  const randomPinStr = randomPin.toString();
  if (randomPinStr.length == 4) {
    return randomPin;
  } else {
    return getPin();
  }
}
// generate button handler
function generatePin() {
  const pin = getPin();
  getElementField("display-pin").value = pin;
}
/* 
key pad handler
 */

getElement("key-pad").addEventListener("click", function (e) {
  const keyValue = e.target.innerText;
  const inputNum = getElementField("typed-numbers");
  const inpuValue = inputNum.value;
  if (isNaN(keyValue)) {
    if (keyValue == "C") {
      inputNum.value = "";
    } else if (keyValue == "<") {
      inputNum.value = inputNum.value.slice(0, -1);
    }
  } else {
    inputNum.value = inpuValue + keyValue;
  }
});

// varify the pin number

function verifyPin() {
  const pinInput = getElementField("display-pin").value;
  const calcInput = getElementField("typed-numbers").value;
  // conditional checking
  if (pinInput == calcInput) {
    notifyMsg("block", "none");
  } else {
    notifyMsg("none", "block");
  }
}

// show notification
function notifyMsg(state1, state2) {
  const successEl = getElement("notify-success");
  const errorEl = getElement("notify-fail");
  successEl.style.display = state1;
  errorEl.style.display = state2;
}
