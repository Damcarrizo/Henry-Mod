'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
return Number.parseInt (num,2)
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario = (num%2) .toString();
  for (; num > 1;) {
    num = parseInt (num/2);
    binario = (num%2) + (binario)
  }
  return binario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}