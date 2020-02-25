/******************
 * YOUR CODE HERE *
 ******************/
function onlyOdds(input) {
  const output = [];

  for (let i = 0; i < input.length; i++){
    if (input[i] % 2 === 1){
      output.push(input[i])
    }
  }
  return output
}

function onlyEvens(input) {
  const output = [];

for (let i = 0; i < input.length; i++) { 
  if (input[i] % 2 === 0){
    output.push(input[i])
  }
}
return output
}

function shortNamesOnly(input) {
  const output = []

  for (let i = 0; i < input.length; i++) {
    if (input[i].length <7){
      output.push(input[i])
    }
  }
  return output
}

function dNames(input) {
  const output = []
  
  for (let i = 0; i < input.length; i++) {
    if (input[i].startWith === 'd' ){
      output.push(input[i])
    }
  }
  return output
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
