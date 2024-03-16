// TODO: this file! :)

// write a function called addNumber
// addNumber takes in a user input
// addNumber adds the input number to the number bank when a button is clicked
// button needs to be defined
// button needs an event listener 
// button needs an event handler
// output needs to be defined
// output needs to be appended/added to

//STATE:

const state = {
numberBank: [],
oddsBank: [],
evensBank: [],
}

let inputObj = document.querySelector('input');
const outputObj = document.querySelector('#outputBank');


let formObj = document.querySelector('form');
formObj.addEventListener('submit', (event)=>{
  event.preventDefault();
  let outputNumber = Number(inputObj.value);
  state.numberBank.push(outputNumber);
  inputObj.value = null;
  render()
});

// sortOneButton = document.querySelector('#sortOne');
// sortOneButton.addEventListener('click', display);

// sortAllButton = document.querySelector('#sortAll');
// sortAllButton.addEventListener('click', display);

function render () {
  outputObj.value = state.numberBank;

};

render()

// 'add Number' button needs eventlistener to add input numbers to the bank
// 'sort 1' button needs event listener to sort the first number in the bank
// 'sort all' button needs evvent listener to sort all numbers in the bank