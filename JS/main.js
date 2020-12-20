const input = document.querySelector('input')
const container = document.getElementById('container');
let initialValue = [];
let secondValue = [];
let operation;
let currentOperation;
let total;


const clearButton = document.getElementById("clear");


function clear() {
    input.value = "";
    initialValue = [];
    secondValue = [];
    removeSecondValueListeners();
    addInitialValueListeners();
}

clearButton.addEventListener('click', clear);


function addInitialValueListeners() {
    numberZero.addEventListener('click', initialValueZero);
    numberOne.addEventListener('click', initialValueOne);
    numberTwo.addEventListener('click', initialValueTwo);
    numberThree.addEventListener('click', initialValueThree);
    numberFour.addEventListener('click', initialValueFour);
    numberFive.addEventListener('click', initialValueFive);
    numberSix.addEventListener('click', initialValueSix);
    numberSeven.addEventListener('click', initialValueSeven);
    numberEight.addEventListener('click', initialValueEight);
    numberNine.addEventListener('click', initialValueNine);
}


function removeInitialValueListeners() {
    numberZero.removeEventListener('click', initialValueZero);
    numberOne.removeEventListener('click', initialValueOne);
    numberTwo.removeEventListener('click', initialValueTwo);
    numberThree.removeEventListener('click', initialValueThree);
    numberFour.removeEventListener('click', initialValueFour);
    numberFive.removeEventListener('click', initialValueFive);
    numberSix.removeEventListener('click', initialValueSix);
    numberSeven.removeEventListener('click', initialValueSeven);
    numberEight.removeEventListener('click', initialValueEight);
    numberNine.removeEventListener('click', initialValueNine);
}

function addSecondValueListeners() {
    numberZero.addEventListener('click', secondValueZero);
    numberOne.addEventListener('click', secondValueOne);
    numberTwo.addEventListener('click', secondValueTwo);
    numberThree.addEventListener('click', secondValueThree);
    numberFour.addEventListener('click', secondValueFour);
    numberFive.addEventListener('click', secondValueFive);
    numberSix.addEventListener('click', secondValueSix);
    numberSeven.addEventListener('click', secondValueSeven);
    numberEight.addEventListener('click', secondValueEight);
    numberNine.addEventListener('click', secondValueNine);
}

function removeSecondValueListeners() {
    numberZero.removeEventListener('click', secondValueZero);
    numberOne.removeEventListener('click', secondValueOne);
    numberTwo.removeEventListener('click', secondValueTwo);
    numberThree.removeEventListener('click', secondValueThree);
    numberFour.removeEventListener('click', secondValueFour);
    numberFive.removeEventListener('click', secondValueFive);
    numberSix.removeEventListener('click', secondValueSix);
    numberSeven.removeEventListener('click', secondValueSeven);
    numberEight.removeEventListener('click', secondValueEight);
    numberNine.removeEventListener('click', secondValueNine);
}

const additionButton = document.getElementById("add");


function additionPrerequisites() {
    input.value = additionButton.textContent;
    currentOperation = operation;
    console.log("currentOperation:" + currentOperation)
    operation = additionButton.textContent;
    if (secondValue.length == 0) {
        removeInitialValueListeners();
        addSecondValueListeners();
    };
    if (initialValue.length > 0 && secondValue.length > 0) {
        continousOperations(currentOperation);
        removeInitialValueListeners();
        addSecondValueListeners();
    }
}

function add(x, y) {
    total = x + y;
}

additionButton.addEventListener('click', additionPrerequisites);

const subtractionButton = document.getElementById("subtract");


function subtractionPrerequisites() {
    input.value = subtractionButton.textContent;
    currentOperation = operation;
    console.log("currentOperation:" + currentOperation)
    operation = subtractionButton.textContent;
    if (secondValue.length == 0) {
        removeInitialValueListeners();
        addSecondValueListeners();
    };
    if (initialValue.length > 0 && secondValue.length > 0) {
        continousOperations(currentOperation);
        removeInitialValueListeners();
        addSecondValueListeners();
    }
}

function subtract(x, y) {
    total = x - y;
}

subtractionButton.addEventListener('click', subtractionPrerequisites);



const multiplicationButton = document.getElementById("multiply");


function multiplicationPrerequisites() {
    input.value = multiplicationButton.textContent;
    currentOperation = operation;
    console.log("currentOperation:" + currentOperation)
    operation = multiplicationButton.textContent;
    if (secondValue.length == 0) {
        removeInitialValueListeners();
        addSecondValueListeners();
    };
    if (initialValue.length > 0 && secondValue.length > 0) {
        continousOperations(currentOperation);
        removeInitialValueListeners();
        addSecondValueListeners();
    }
}


function multiply(x, y) {
    total = x * y;
}

multiplicationButton.addEventListener('click', multiplicationPrerequisites);



const divisionButton = document.getElementById("divide");


function divisionPrerequisites() {
    input.value = divisionButton.textContent;
    currentOperation = operation;
    console.log("currentOperation:" + currentOperation)
    operation = divisionButton.textContent;
    if (secondValue.length == 0) {
        removeInitialValueListeners();
        addSecondValueListeners();
    };
    if (initialValue.length > 0 && secondValue.length > 0) {
        continousOperations(currentOperation);
        removeInitialValueListeners();
        addSecondValueListeners();
    }
}

function divide(x, y) {
    total = x / y;
}

divisionButton.addEventListener('click', divisionPrerequisites);


const equalButton = document.getElementById("equal");

function continousOperations(operator) {
    if (!(initialValue.length == 0 && secondValue.length == 0)) {
        let updatedInitialValue = initialValue.join("");
        updatedInitialValue = +updatedInitialValue;
        let updatedSecondValue = secondValue.join("");
        updatedSecondValue = +updatedSecondValue;
        let total = operate(operator, updatedInitialValue, updatedSecondValue);
    }
    removeSecondValueListeners();
    addInitialValueListeners();
    initialValue = [];
    initialValue.push(total);
    secondValue = [];
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}



function equal() {
    if (!(initialValue.length == 0 && secondValue.length == 0)) {
        let updatedInitialValue = initialValue.join("");
        updatedInitialValue = +updatedInitialValue;
        let updatedSecondValue = secondValue.join("");
        updatedSecondValue = +updatedSecondValue;
        let total = operate(operation, updatedInitialValue, updatedSecondValue);
    }
    removeSecondValueListeners();
    addInitialValueListeners();
    initialValue = [];
    initialValue.push(total);
    secondValue = [];
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}


equalButton.addEventListener('click', equal);






const numberZero = document.getElementById("numberZero");



function initialValueZero() {
    input.value += 0;
    initialValue.push(0);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
};

function secondValueZero() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 0;
    secondValue.push(0);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
};

numberZero.addEventListener('click', initialValueZero);




const numberOne = document.getElementById("numberOne");



function initialValueOne() {
    input.value += 1;
    initialValue.push(1);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}


function secondValueOne() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 1;
    secondValue.push(1);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
};

numberOne.addEventListener('click', initialValueOne);




const numberTwo = document.getElementById("numberTwo");



function initialValueTwo() {
    input.value += 2;
    initialValue.push(2);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

function secondValueTwo() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 2;
    secondValue.push(2);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

numberTwo.addEventListener('click', initialValueTwo);





const numberThree = document.getElementById("numberThree");



function initialValueThree() {
    input.value += 3;
    initialValue.push(3);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

function secondValueThree() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 3;
    secondValue.push(3);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

numberThree.addEventListener('click', initialValueThree);


const numberFour = document.getElementById("numberFour");



function initialValueFour() {
    input.value += 4;
    initialValue.push(4);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

function secondValueFour() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 4;
    secondValue.push(4);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

numberFour.addEventListener('click', initialValueFour);


const numberFive = document.getElementById("numberFive");



function initialValueFive() {
    input.value += 5;
    initialValue.push(5);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

function secondValueFive() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 5;
    secondValue.push(5);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

numberFive.addEventListener('click', initialValueFive);



const numberSix = document.getElementById("numberSix");




function initialValueSix() {
    input.value += 5;
    initialValue.push(5);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

function secondValueSix() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 6;
    secondValue.push(6);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

numberSix.addEventListener('click', initialValueSix);


const numberSeven = document.getElementById("numberSeven");



function initialValueSeven() {
    input.value += 7;
    initialValue.push(7);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

function secondValueSeven() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 7;
    secondValue.push(7);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

numberSeven.addEventListener('click', initialValueSeven);



const numberEight = document.getElementById("numberEight");

function initialValueEight() {
    input.value += 8;
    initialValue.push(8);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

function secondValueEight() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 8;
    secondValue.push(8);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

numberEight.addEventListener('click', initialValueEight);



const numberNine = document.getElementById("numberNine");


function initialValueNine() {
    input.value += 9;
    initialValue.push(9);
    console.log("typeOf:" + typeof initialValue);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

function secondValueNine() {
    if (input.value == operation || secondValue.length == 0) input.value = "";
    input.value += 9;
    secondValue.push(9);
    console.log("initialValue:" + initialValue);
    console.log("secondValue:" + secondValue);
}

numberNine.addEventListener('click', initialValueNine);




function operate(operator, x, y) {
    switch (operator) {
        case "+":
            add(x, y);
            input.value = total;
            console.log("x:" + x);
            console.log("y:" + y);
            console.log("total:" + total);
            break;
        case "-":
            subtract(x, y);
            input.value = total;
            console.log("x:" + x);
            console.log("y:" + y);
            console.log("total:" + total);
            break;
        case "*":
            multiply(x, y);
            input.value = total;
            console.log("x:" + x);
            console.log("y:" + y);
            console.log("total:" + total);
            break;
        case "/":
            divide(x, y);
            input.value = total;
            console.log("x:" + x);
            console.log("y:" + y);
            console.log("total:" + total);
            break;
    }
}

