function verificaPalindromo(word) {
  if (!word) return 'Vazia'
  return word.split('').reverse().join('') === word
}

//console.log(verificaPalindromo('arara'))

function mudarPar(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log('-1')
    } else {
      if (array[i] % 2 === 0) {
        array[i] = 0
      }
    }
  }
  return array
}

let array = [1, 2, 3, 4, 5, 6]

console.log(mudarPar(array))
