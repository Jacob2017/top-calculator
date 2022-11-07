const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const multiply = function(a,b) {
  return a * b;
};

const divide = function(a,b) {
  return b === 0 ? "ERROR" : a / b;
};

const operate = (op, a, b) => {
  if (op === "+") {
    return add(a,b);
  } else if (op === "-") {
    return subtract(a,b);
  } else if (op === "*") {
    return multiply(a,b);
  } else if (op === "/") {
    return divide(a,b);
  } else {
    return "ERROR";
  }
};

const container = document.querySelector('.container');

const display = document.createElement('div');
display.classList.add('display');
display.textContent = "01234";
container.appendChild(display);


const numbers = document.createElement('div');
for (let i = 1; i < 11; i++) {
  let num = document.createElement('button');
  num.classList.add('number');
  num.textContent = `${i % 10}`;
  numbers.appendChild(num);
}
numbers.classList.add('numbers');
container.appendChild(numbers);

const opsArray = ["+","-","*","/","="];


const operators = document.createElement('div');
operators.classList.add('operators');
for (let i = 0; i < opsArray.length; i++) {
  let op = document.createElement('button');
  op.classList.add('operator');
  if (opsArray[i] === "=") {
    op.classList.add('equals');
  }
  op.textContent = opsArray[i];
  operators.appendChild(op);
}
container.appendChild(operators);





const buttons = document.querySelectorAll('button');
console.log(buttons);

const onClick = (e) => {
  if (e.target.localName !== 'button') {
    return;
  }
};

let numStack = [];
let opStack = [];
let currentNum = "";
let displayVar = "";

for (let i = 0; i < buttons.length; i++) {
  let current = buttons[i];

  current.addEventListener('click', (e) => {
    if (e.target.localName !== 'button') {
      return;
    }
    if (e.target.className === "number") {
      currentNum = `${currentNum}${+e.target.textContent}`
      if (displayVar.length !== 0) {
        display.textContent = `${displayVar} ${currentNum}`;
      } else {
        display.textContent = currentNum;
      }
    }
    if (e.target.classList.contains("operator")) {
      numStack.push(+currentNum);
      opStack.push(e.target.textContent);
      if (displayVar.length === 0) {
        displayVar = `${currentNum} ${e.target.textContent}`
      } else {
        displayVar = `${displayVar} ${currentNum} ${e.target.textContent}`;
      }
    }
  })
}

// buttons.forEach(addEventListener('click', onClick));

// console.log(operate("+",6,2));
// console.log(operate("-",6,2));
// console.log(operate("*",6,2));
// console.log(operate("/",6,2));