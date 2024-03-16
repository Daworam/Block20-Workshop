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
};

let inputObj = document.querySelector("input");
const outputObj = document.querySelector("#outputBank");
const oddsOutputObj = document.querySelector("#oddOutput");
const evensOutputObj = document.querySelector("#evenOutput");

let formObj = document.querySelector("form");
formObj.addEventListener("submit", (event) => {
  event.preventDefault();
  let outputNumber = Number(inputObj.value);
  state.numberBank.push(outputNumber);
  inputObj.value = null;
  render();
});

sortOneButton = document.querySelector("#sortOne");
sortOneButton.addEventListener("click", (event) => {
  if (state.numberBank[0] % 2 === 0) {
    state.evensBank.push(state.numberBank.shift());
  } else {
    state.oddsBank.push(state.numberBank.shift());
  }
  render();
});

const sortAllButton = document.querySelector("#sortAll");
sortAllButton.addEventListener("click", (event) => {
  const filteredEvens = state.numberBank.filter((currentItem) => {
    if (currentItem % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });

  const filteredOdds = state.numberBank.filter((currentItem) => {
    if(currentItem % 2 !== 0){
      return true;
    }else{
      return false;
    }
  }); 
  state.oddsBank.push(filteredOdds);
  state.evensBank.push(filteredEvens);
  state.numberBank = [];
  render();
});

function render() {
  outputObj.value = state.numberBank;
  oddsOutputObj.value = state.oddsBank;
  evensOutputObj.value = state.evensBank;
}

render();

// 'add Number' button needs eventlistener to add input numbers to the bank
// 'sort 1' button needs event listener to sort the first number in the bank
// 'sort all' button needs evvent listener to sort all numbers in the bank
